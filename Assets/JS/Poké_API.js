const api = "https://pokeapi.co/api/v2/pokemon?limit=151";
var table = document.querySelector(".poke_body");
async function connect() {
  let request = await fetch(api);
  let pokemons = await request.json();
  pokemons.results.forEach(pokemon => {
    pokemon_detail(pokemon);
  });
  async function pokemon_detail(pokemon) {
    let pokemon_url = pokemon.url;
    let detail_request = await fetch(pokemon_url);
    let detail = await detail_request.json();
    draw_table(detail);
  }
  function draw_table(detail) {
    let pokemon = {
      id: detail.id,
      name: detail.name,
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
        detail.id +
        ".png",
      weight: detail.weight,
      height: detail.height
    };
    table.innerHTML +=
      "<tr>" +
      "<td>" +
      " -> " +
      pokemon.id +
      "</td>" +
      "<th>" +
      pokemon.name +
      "</th>" +
      "<th>" +
      "<img src=" +
      pokemon.img +
      ">" +
      "</th>" +
      "<th>" +
      "</th>" +
      "<th>" +
      "</th>" +
      "<th>" +
      pokemon.weight +
      "</th>" +
      "<th>" +
      pokemon.height +
      "</th>" +
      "<th>" +
      "</th>" +
      "</tr>";
  }
}

connect();
