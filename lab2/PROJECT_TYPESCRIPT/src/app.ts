let listPokemonBlock: any = document.getElementById("pokemon-list");

let pokemonAPI: string = "https://pokeapi.co/api/v2/pokemon?limit=12";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

const start = async () => {
  const pokemons = await getPokemon();
  render(pokemons);
};

const render = (pokemons: Pokemon[]) => {
  if (!listPokemonBlock) return;
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

const getPokemon = async (): Promise<Pokemon[]> => {
  const response = await fetch(pokemonAPI);
  const data = await response.json();
  const results = data.results;

  const pokemons: Pokemon[] = [];

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
