//* Global Variables

const input = document.getElementById("input");
const searchButton = document.getElementById("search-button")
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const imgContainer = document.getElementById("img-container")

function show(data) {
    console.log('show():', data);
    displaySprite(data);
}

async function refreshData(e) {
    const pokemon = e.target.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/?offset=0&limit=150`
    try {
        const response = await fetch(url);
        const data = await response.json();
        show(data);
    } catch (e) {
        console.log(e);
    }
}

function displaySprite(data) {
    data.forEach((data) => {
        const img = document.createElement("img")
        img.setAttribute('src', data.sprites.front_default)
    });
    item.appendChild(img);
    imgContainer.appendChild(item);
}


input.addEventListener("change", refreshData);
searchButton.addEventListener("input", refreshData);