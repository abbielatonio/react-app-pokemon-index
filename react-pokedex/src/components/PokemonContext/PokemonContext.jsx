import { createContext, useReducer } from "react";
import reducer from "../reducer/reducer";

export const PokemonContext = createContext();

function PokemonContextComponent({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    capturedPokemons: [],
  });

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContextComponent;
