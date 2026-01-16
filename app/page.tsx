import PokemonCard from "@/components/PokemonCard";
import { fetchMultiplePokemon } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const pokemonIds = [3, 6, 9];

  let pokemonData;
  const error = null;

  try {
    pokemonData = await fetchMultiplePokemon(pokemonIds);
  } catch (error) {
    error = error instanceof Error ? error.message : "Failed to fetch Pokemon data";
    console.error('Error Loading Pokemon:', error);
  }
  
  return (
    <main className="min-h screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Pokemon Cards
          </h1>
          <p className="text-gray-600 text-lg">
            Classic Starter Evolutions
          </p>
        </div>

        {/* Error State */}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-mb-8">
            <p className="font-bold">Error Loading Pokemon</p>
            <p>{error}</p>
          </div>
        )}

        {/* Pokemon Cards Grid */}

        {pokemonData && (
          <div>
            {pokemonData.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            ))}
          </div>
        )}

        {/* Footer */}
        <footer>
          <p>Data provided by <Link href="https://pokeapi.co" target="_blank" rel="noopener norefferer" className="text-blue-600 hover:underline">PokeAPI</Link></p>
        </footer>
      </div>
    </main>
  );
}
