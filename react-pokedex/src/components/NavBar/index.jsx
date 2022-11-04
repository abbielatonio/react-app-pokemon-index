import { useEffect, useState } from "react";
import NavBarItem from "../NavBarItem";
import style from "./style.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [items, setItems] = useState([]);

  const fetchTypes = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/type").then((res) =>
      res.json()
    );

    setItems(response.results);
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <div className={style.navBar}>
      <div className={style.link}>
        <Link to={"/"}>all pokemons</Link>
      </div>

      <div className={style.link}>
        <Link to={"/mypokemons"}>my pokemons</Link>
      </div>

      {items.map((item) => (
        <NavBarItem key={item.name} type={item.name}>
          {item.name}
        </NavBarItem>
      ))}
    </div>
  );
}

export default NavBar;
