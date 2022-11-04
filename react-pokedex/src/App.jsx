import { useState, useReducer } from "react";
import "./App.css";
import AllPokemons from "./components/AllPokemons/AllPokemons";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NotFoundView from "./pages/NotFoundView";
import PokemonsTypeView from "./components/PokemonsTypeView";
import PokemonDetailView from "./components/PokemonDetailView";
import PokemonContextComponent from "./components/PokemonContext/PokemonContext";
import MyPokemons from "./components/MyPokemons/MyPokemons";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import logo from "./assets/logo.png";

function App(id) {
  return (
    <div className="App">
      <img src={logo} alt="pokedex" />
      <PokemonContextComponent>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFoundView />} />
            <Route path="/type/:typeId" element={<PokemonsTypeView />} />
            <Route path="/pokemon/:name" element={<PokemonDetailView />} />
            <Route path="/mypokemons" element={<MyPokemons />} />
          </Routes>
        </BrowserRouter>
      </PokemonContextComponent>
    </div>
  );
}

export default App;
