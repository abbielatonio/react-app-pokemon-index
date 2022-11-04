function reducer(state, action) {
  switch (action.type) {
    case "CAPTURE":
      state.capturedPokemons.push(action.payload);

      return state;

    case "RELEASE":
      var i = state.capturedPokemons.indexOf(action.payload);
      if (i >= 0) {
        state.capturedPokemons.splice(i, 1);
      }

      return state;

    default:
      return state;
  }
}

export default reducer;
