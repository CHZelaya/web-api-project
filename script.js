//* Global Variables

pokemonArray = [];
const input = document.getElementById("input");
const searchButton = document.getElementById("search-button")
const imgContainer = document.getElementById("img-container")
const img = document.getElementById("pokemon-image")
const text = document.getElementById("pokemon-text")





function displayPokemon(imgUrl) {
    console.log('inside displayPokemon function:', imgUrl)
};



async function callApi(e) {
    const pokemon = e.target.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/?offset=0&limit=898`
    try {
        const response = await fetch(url);
        pokemonArray = await response.json();
        let imgUrl = pokemonArray.sprites.other.home.front_default;
        text.innerText = `Alright! Here's a picture of ${pokemon}, try searching for another!`
        return document.getElementById("pokemon-image").src = imgUrl;
    } catch (e) {
        text.innerText = `Sorry! I'm a simple website, please make sure your spelling is accurate.`
        return document.getElementById("pokemon-image").src = "sadPikachu.jpg";
    }
}



input.addEventListener("change", callApi);
searchButton.addEventListener("input", callApi);