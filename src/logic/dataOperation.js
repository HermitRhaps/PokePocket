export const dataOperation = {
  pokemonsFetch: async (n) => {
    const pokemonsFetch = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${n}`
    );
    return await pokemonsFetch.json();
  },
  pokemonFetch: async (url) => {
    const pokemonsDetailsFetch = await fetch(url);
    return await pokemonsDetailsFetch.json();
  },
};
