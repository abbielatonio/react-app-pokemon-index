import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "../PokemonCard";
import style from "./style.module.css";

function PokemonsTypeView() {
  const [pokemons, setPokemons] = useState([]);
  const { typeId } = useParams();
  const fetchPokemons = async (url) => {
  const response = await fetch(url).then((res) => res.json());
    setPokemons(response.pokemon);
  };

  useEffect(() => {
    fetchPokemons(`https://pokeapi.co/api/v2/type/${typeId}`);
  }, [typeId]);

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className={style.container}>
          {pokemons.map(({ pokemon }, index) => (
            <PokemonCard key={`${pokemon.name}-${index}`} name={pokemon.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonsTypeView;
