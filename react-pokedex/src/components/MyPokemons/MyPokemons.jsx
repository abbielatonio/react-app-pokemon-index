import { useContext } from "react";
import { PokemonContext } from "../PokemonContext/PokemonContext";
import PokemonCard from "../PokemonCard";

function MyPokemons() {
  const { state } = useContext(PokemonContext);

  return (
    <div>
      <h1>My Pokemons</h1>
      <div className="all-container">
        {state.capturedPokemons.map((pokemon) => (
          <PokemonCard key={pokemon} name={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default MyPokemons;
