import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

function PokemonCard({ name }) {
  const [artwork, setArtwork] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const style = type + " thumb-container";

  const fetchPokemons = async (url) => {
    const response = await fetch(url).then((res) => res.json());
    setArtwork(response.sprites.other.dream_world.front_default);
    setType(response.types[0].type.name);
    setId(response.id);
  };

  useEffect(() => {
    fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }, [name]);

  return (
    <Link to={`/pokemon/${name}`} className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={artwork} alt={name} className={style.img} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>type: {type}</small>
      </div>
    </Link>
  );
}

export default PokemonCard;
