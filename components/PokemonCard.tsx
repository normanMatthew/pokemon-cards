import { PokemonCardData } from '@/types/pokemon';
import Image from 'next/image';

interface PokemonCardProps {
    pokemon: PokemonCardData;
}

// Type color mapping for visual appeal
const TYPE_COLORS: Record<string, string> = {
  normal: 'bg-gray-400',
  fire: 'bg-orange-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-cyan-400',
  fighting: 'bg-red-600',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-400',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-500',
  rock: 'bg-yellow-700',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-600',
  dark: 'bg-gray-700',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    //Capitalize first letter of pokemon name
    const displayName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Card Header */}

            <div className='bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white'>
                <h2 className="text-2xl font-bold">{displayName}</h2>
                    <p className="text-sm opacity-90">#{pokemon.id.toString().padStart(3, '0')}</p>
            </div>

            {/* Pokemon Image */}

            <div className='relative h-64 bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center'>
                <Image
                    src={pokemon.image}
                    alt={displayName}
                    width={200}
                    height={200}
                    className='object-contain'
                    priority
                />
            </div>

            {/* Card Content */}

            <div className='p-6'>
                {/* Types */}
                <div className='flex gap-2 mb-4'>
                    {pokemon.types.map((type) => (
                        <span
                            key={type}
                            className={`${TYPE_COLORS[type] || 'bg-gray-400'} text-white px-3 py-1 rounded-full text-sm font-semibold capitalize`}
                        >
                            {type}
                        </span>
                    ))}
                </div>

                {/* Stats - health - attack - defense */}
                <div className='space-y-3'>
                    <h3 className='font-bold text-gray-700 mb-2'>Stats</h3>

                    <div className='flex justify-between items-center'>
                        <span className='text-gray-600'>HP</span>
                        <span className='font-bold text-red-500'>{pokemon.stats.hp}</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <span className='text-gray-600'>Attack</span>
                        <span className='font-bold text-orange-500'>{pokemon.stats.attack}</span>
                    </div>

                    <div className='flex justify-between items-center'>
                        <span className='text-gray-600'>Defense</span>
                        <span className='font-bold text-blue-500'>{pokemon.stats.defense}</span>
                    </div>
                </div>
                {/* Physical Stats */}
                <div className='mt-4 pt-4 border-t border-gray-200 flex justify-between text-sm text-gray-600'>
                    <div>
                        <span className='font-semibold'>Height:</span>{pokemon.height / 10}m
                    </div>
                    <div>
                        <span className='font-semibold'>Weight:</span>{pokemon.weight / 10}kg
                    </div>
                </div>
            </div>
        </div>
    );
}