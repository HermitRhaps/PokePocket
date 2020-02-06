const api = "https://pokeapi.co/api/v2/pokemon?limit=151";
var table = document.querySelector(".poke_body");
(async function connect() {
  let request = await fetch(api);
  let pokemons = await request.json();
  pokemons.results.forEach(pokemon => {
    pokemon_detail(pokemon);
  });
  async function pokemon_detail(pokemon) {
    let pokemon_url = pokemon.url;
    let detail_request = await fetch(pokemon_url);
    let detail = await detail_request.json();
    create_pokemon(detail, detail.types, detail.abilities, detail.stats);
  }
})()

function create_pokemon(detail, types, abilities, stats){
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
    abilities: ability_arr,
    stats: stat_arr,
    weight: detail.weight,
    height: detail.height,
    types: type_arr
  };

  draw_table(pokemon)
}

function draw_table(pokemon) {
  return table.innerHTML +=
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
    pokemon.abilities +
    "</td>" +
    "<td>" +
    pokemon.stats +
    "</td>" +
    "<td>" +
    pokemon.weight +
    "</td>" +
    "<td>" +
    pokemon.height +
    "</td>" +
    "<td>" +
    pokemon.types +
    "</td>" +
    "</tr>";
}