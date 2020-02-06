const api_url = "https://pokeapi.co/api/v2/pokemon?limit=151";
var table_container = document.querySelector(".poke_body");

(async function api_connect(){
    let connect_request = await fetch(api_url);
    let connect_output = await connect_request.json();
    let pokemons = [];

    connect_output.results.forEach(async result => {
        let pokemon_request = await fetch(result.url);
        let pokemon_output = await pokemon_request.json(); 

        let pokemon_types = [];
        let pokemon_abilities = [];
        let pokemon_stats = [];

        pokemon_output.types.forEach(types => {
            pokemon_types.push(types.type.name)
        })

        pokemon_output.abilities.forEach(abilities => {
            pokemon_abilities.push(abilities.ability.name)
        })

        pokemon_output.stats.forEach(stats => {
            pokemon_stats.push(stats.base_stat + " " + stats.stat.name)
        })


        let pokemon = {
            id: pokemon_output.id,
            name: pokemon_output.name,
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon_output.id + ".png",
            types: pokemon_types,
            abilities: pokemon_abilities,
            stats: pokemon_stats,
            weight: pokemon_output.weight,
            height: pokemon_output.height
        }

        pokemons.push(pokemon)

        // pokemons.forEach(pokenon => {
        //     "<tr>" +
        //     "<td>" +
        //     pokenon.id +
        //     "</td>" +
        //     "<td>" +
        //     pokenon.name +
        //     "</td>" +
        //     "<td>" +
        //     '<img src="' +
        //     pokenon.sprite +
        //     '"/>' +
        //     "</td>" +
        //     "<td>" +
        //     pokenon.abilities +
        //     "</td>" +
        //     "<td>" +
        //     pokenon.stats +
        //     "</td>" +
        //     "<td>" +
        //     pokenon.weight +
        //     "</td>" +
        //     "<td>" +
        //     pokenon.height +
        //     "</td>" +
        //     "<td>" +
        //     pokenon.types +
        //     "</td>" +
        //     "</tr>"
        // })

    });

})()
