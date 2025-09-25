"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
let listPokemonBlock = document.getElementById("pokemon-list");
let pokemonAPI = "https://pokeapi.co/api/v2/pokemon?limit=12";
const start = async () => {
    const pokemons = await getPokemon();
    render(pokemons);
};
const render = (pokemons) => {
    if (!listPokemonBlock)
        return;
    listPokemonBlock.innerHTML = "";
    pokemons.forEach((pokemon) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <h3>${pokemon.name}</h3>
      <p>Type: ${pokemon.type}</p>
    `;
        listPokemonBlock.appendChild(card);
    });
};
const getPokemon = async () => {
    const response = await fetch(pokemonAPI);
    const data = await response.json();
    const results = data.results;
    const pokemons = [];
    for (let i = 0; i < results.length; i++) {
        const pokeData = await fetch(results[i].url).then((res) => res.json());
        pokemons.push({
            id: pokeData.id,
            name: pokeData.name,
            image: pokeData.sprites.front_default,
            type: pokeData.types[0].type.name,
        });
    }
    return pokemons;
};
start();
