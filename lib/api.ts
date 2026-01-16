import { Pokemon, PokemonCardData } from "@/types/pokemon";

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

/**
 * Fetches a single Pokemon by ID or name from pokeapi v2.
 */
export async function fetchPokemon(iDOrName: string | number): Promise<Pokemon> {
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${iDOrName}`, {
        //Next.js cache option - revalidate every twenty-four hours.
        next: { revalidate: 86400 }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch Pokemon: ${iDOrName}`);
    }

    return response.json();
};

/**
* Transforming raw Pokemon api data into simplified card data. 
*/

export function transformPokemonData(pokemon: Pokemon): PokemonCardData {
    const image =
        pokemon.sprites.other?.['official-artwork']?.front_default ||
        pokemon.sprites.other?.home?.front_default ||
        pokemon.sprites.front_default ||
        '/placeholder-pokemon.png'; //fallback in case no image

    //Extract type names
    const types = pokemon.types.map(t => t.type.name);
    
    //Get specific stats we want to display
    const hp = pokemon.stats.find(s => s.stat.name === 'hp')?.base_stat || 0;
    const attack = pokemon.stats.find(s => s.stat.name === 'attack')?.base_stat || 0;
    const defense = pokemon.stats.find(s => s.stat.name === 'defense')?.base_stat || 0;

    return {
        id: pokemon.id,
        name: pokemon.name,
        image,
        types,
        stats: {hp, attack, defense},
        height: pokemon.height,
        weight: pokemon.weight,
    };
}


/**
* Fetch multiple pokemon and return transformed data.
*/
export async function fetchMultiplePokemon(
    ids: (string | number)[]
): Promise<PokemonCardData[]> {
    try {
        const promises = ids.map(id => fetchPokemon(id));
        const pokemonData = await Promise.all(promises);
        return pokemonData.map(transformPokemonData);
    } catch (error) {
        console.error("Error fetching pokemon:", error);
        throw error;
    }
}