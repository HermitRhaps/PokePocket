const api = 'https://pokeapi.co/api/v2/pokemon?limit=151';
var table = document.querySelector('.poke_body');
async function connect(){
    let request = await fetch(api)
    let pokemons = await request.json()
    pokemons.results.forEach(pokemon => {
        pokemon_detail(pokemon)
    });
    async function pokemon_detail(pokemon){
        let pokemon_url = pokemon.url;
        let detail_request = await fetch(pokemon_url);
        let detail = await detail_request.json()
        draw_table(detail)
    }
    function draw_table(detail){
        // console.log(detail);
        let pokemon_id = detail.id;
        let pokemon_weigth = detail.weight
        // stats.base_stat
        // stats.stat.name
        let pokemon_sprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon_id + '.png';
        let pokemon_name = detail.name;
        table.innerHTML += '<tr>' + '<td>'+pokemon_id+'</td>' + 
        '<th>' + '<img src='+pokemon_sprite+'>' + '</th>' + 
        '<th>' + pokemon_name + '</th>' +'</tr>'
    }
}

connect();