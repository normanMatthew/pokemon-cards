export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface PokemonSprites {
    front_default: string;
    front_shiny?: string;
    other?: {
        'official-artwork': {
            front_default: string;
        };
        home?: {
            front_default: string;
        };
    };
}

export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
    stats: PokemonStat[];
    sprites: PokemonSprites[];
    abilities: {
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    };
}

//Simple type for our card display
export interface PokemonCardData {
    id: number;
    name: string;
    image: string;
    types: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
    };
    height: number;
    weight: number;
}