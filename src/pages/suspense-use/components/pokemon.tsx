import { use } from 'react';
import PokemonLayout from './pokemon-layout';
import { fetchPokemon } from '../api/pokemon';

interface PokemonProps {
  id: number;
}

function Pokemon({ id }: PokemonProps) {
  const pokemon = use(fetchPokemon(id));
  console.log(pokemon.id);

  return (
    <PokemonLayout>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt="pikachu"
        title="pikachu"
        className="size-28"
      />
    </PokemonLayout>
  );
}

export default Pokemon;
