import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PokemonContext } from "../PokemonContext/PokemonContext";
import styled from "styled-components";

function PokemonDetailView() {
  const { name } = useParams();
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [artwork, setArtwork] = useState("");
  const [abilities, setAbilities] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [moves, setMoves] = useState("");
  const navigate = useNavigate();

  const { dispatch } = useContext(PokemonContext);
  const style = type;

  useEffect(() => {
    fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }, [name]);

  const fetchPokemons = async (url) => {
    const response = await fetch(url).then((res) => res.json());
    setArtwork(response.sprites.other.dream_world.front_default);
    setType(response.types[0].type.name);
    setId(response.id);
    setAbilities(response.abilities[0].ability.name);
    setWeight(response.weight);
    setHeight(response.height);
    setMoves(response.moves[0].move.name);
  };

  const goBack = () => {
    navigate(-1);
  };

  const test = () => {
    navigate("/mypokemons");
  };

  const handleClick = () => {
    dispatch({
      type: "CAPTURE",
      payload: name,
    });
  };

  function handleClick2() {
    dispatch({
      type: "RELEASE",
      payload: name,
    });
  }

  function testing() {
    const dialog = document.querySelector("dialog");
    const yesBtn = document.querySelector(".yes");
    const noBtn = document.querySelector(".no");
    const result = document.querySelector(".result");

    dialog.showModal();

    yesBtn.addEventListener("click", () => {
      result.textContent = handleClick2();
      dialog.close();
    });

    noBtn.addEventListener("click", () => {
      dialog.close();
    });
  }

  return (
    <div>
      <div>
        <DetailWrapper className={style}>
          <Button type="button" onClick={handleClick}>
            Capture!{" "}
          </Button>

          <h2>
            {id}: {name}{" "}
          </h2>

          <div>
            <Button id="open-dialog" onClick={testing}>
              Release
            </Button>
            <div class="result"></div>
            <dialog>
              <div>Proceed with deleting {name}?</div>
              <button class="yes">Yes</button>
              <button class="no">No</button>
            </dialog>
          </div>
        </DetailWrapper>
      </div>
      <DetailWrapper className={style}>
        <div>
          <img src={artwork} alt={name} />
        </div>

        <div></div>

        <div>
          <h3>type: {type} </h3>
          <h3>abilities: {abilities} </h3>
          <h3>moves: {moves}</h3>
          <h3>weight: {weight} </h3>
          <h3>height: {height} </h3>
        </div>
      </DetailWrapper>

      <div>
        <Button type="button" onClick={goBack}>
          ← Back
        </Button>
        <Button type="button" onClick={test}>
          View My Pokemons{" "}
        </Button>
      </div>
    </div>
  );
}

const DetailWrapper = styled.div`
width: 60%;
  border: 5px solid #efefef;
  border-radius: 1rem;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
display: flex;
align-items: center;
justify-content: center;
margin: auto;
margin-top: 1rem;
margin-bottom: 1rem;

button{
  margin: 10px 10px 0 0;
}
h2{
  margin-bottom:2rem;
  margin-left: 8rem;
  margin-right: 8rem;
  font-size: 2rem;

  text-transform: capitalize;
}
h3{
  font-size: 1.2rem;
  line-height: 2.5rem;
}
ul{
  margin-top:2rem
}
img{
width: 50vh;`;

const Button = styled.button`
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: #fff;
  background: #58abf6;
  border: 3px solid #58abf6;
  font-weight: 600;
  cursor: pointer;
  margin: 3px;
  font-family: "Lexend Deca", sans-serif;
`;

export default PokemonDetailView;
