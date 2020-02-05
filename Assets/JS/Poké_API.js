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
    draw_table(detail, detail.types, detail.abilities, detail.stats);
  }
}

function draw_table(detail, types, abilities, stats) {
  let type_arr = [];
  types.forEach(item => {
    type_arr.push(item.type.name);
  });

  let ability_arr = [];
  abilities.forEach(item => {
    ability_arr.push(item.ability.name);
  });

  let stat_arr = [];
  stats.forEach(item => {
    stat_arr.push(item.base_stat + " " + item.stat.name);
  });

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
    pokemon.id +
    "</td>" +
    "<td>" +
    pokemon.name +
    "</td>" +
    "<td>" +
    '<img src="' +
    pokemon.img +
    '"/>' +
    "</td>" +
    "<td>" +
    ability_arr +
    "</td>" +
    "<td>" +
    stat_arr +
    "</td>" +
    "<td>" +
    pokemon.weight +
    "</td>" +
    "<td>" +
    pokemon.height +
    "</td>" +
    "<td>" +
    type_arr +
    "</td>" +
    "</tr>";
}
connect();
