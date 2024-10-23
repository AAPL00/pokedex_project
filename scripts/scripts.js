const pokemonList = document.querySelector("#pokemon-list") 
let URL = "https://pokeapi.co/api/v2/pokemon/" 

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => showPokemon((data)))
}

function showPokemon(data) {

    let types = data.types.map(types => `<p class="type ${type.type.name}">${type.type.name}</p>`);
    console.log(types);



    const div = document.createElement("div")
    div.classList.add("pokemon")
    div.innerHTML = `
        <div class="pokemon-image">
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
        </div>
        <div class="pokemon-info">
            <div class="name-container">
                <p class="pokemon-number">${data.id}</p>
                <h2 class="pokemon-name">${data.name}</h2>
            </div>
            <div class="pokemon-type">
                ${types}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${data.height}M</p>
                <p class="stat">${data.weight}KG</p>
            </div>
        </div>`;
    pokemonList.append(div)
}