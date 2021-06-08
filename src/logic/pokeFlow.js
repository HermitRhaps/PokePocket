export const pokeFlow = {
  pokeListRequestOperation: async (limit = 10, offset = 0) => {
    const pokeRequest = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const pokeDataList = await pokeRequest.json();
    return pokeDataList.results.map(
      async (poke) => await pokeFlow.pokeSingleRequestOperation(poke.url)
    );
  },
  pokeSingleRequestOperation: async (url) => {
    const pokeDetailsRequest = await fetch(url);
    return await pokeDetailsRequest.json();
  },
};
