const pokemonList = document.querySelector("#pokemon-list") 
let URL = "https://pokeapi.co/api/v2/pokemon/" 

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => showPokemon((data)))
}

function showPokemon(data) {
    const div = document.createElement("div")
    div.classList.add("pokemon")
    div.innerHTML = `
        <div class="pokemon-image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png">
        </div>
        <div class="pokemon-info">
            <div class="name-container">
                <p class="pokemon-number">#151</p>
                <h2 class="pokemon-name">Mew</h2>
            </div>
            <div class="pokemon-type">
                <p class="type psychic">PSIQUICO</p>
                <p class="type normal">NORMAL</p>
            </div>
            <div class="pokemon-stats">
                <p class="stat">4m</p>
                <p class="stat">40KG</p>
            </div>
        </div>`
}