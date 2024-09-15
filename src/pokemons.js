// const pokemons = require("./data");

// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
  return pokemons.filter((pokemon) => pokemon.type[0] === "Fire");
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
  const pokemonHeights = pokemons.map((pokemon) =>
    pokemon.height.split(" ").shift()
  );

  const leastHeight = `${pokemonHeights.sort((a, b) => a - b)[0]} m`;

  const shortPokemon = pokemons.filter(
    (pokemon) => pokemon.height === leastHeight
  );
  return shortPokemon.length === 0 ? 0 : shortPokemon[0].name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
  const totalCandies = pokemons.reduce((acc, pokemon) => {
    let count = pokemon.candy_count;
    if(count === undefined || count === '')
      count = 0;
    return acc + count;
  }, 0);

  const averageCandyCount = totalCandies / pokemons.length;

  return pokemons.length === 0 ? 0 : averageCandyCount.toFixed(2) * 1;
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
  let firstTenPokemons;

  const groundPokemons = pokemons.filter(pokemon => pokemon.type.includes('Ground'));
  const groundPokemonsImg = groundPokemons.map(pokemon => pokemon.img);
  return pokemons.length === 0 ? 0 : groundPokemonsImg.slice(0, 10);
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
  if (!Array.isArray(pokemons) || pokemons.length === 0) {
    return 0;
  }

  const pikachuWeight = parseFloat(
    pokemons.find(pokemon => pokemon.name === "Pikachu")?.weight?.replace(" kg", "") || 0
  );

  const heavierPokemons = pokemons.filter(pokemon => {
    const pokemonWeight = parseFloat(pokemon.weight.replace(" kg", "") || 0);
    return pokemonWeight > pikachuWeight;
  });

  const namesOfHeavierPokemons = heavierPokemons.map(pokemon => pokemon.name);

  return namesOfHeavierPokemons;
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
  const pokemonName = pokemons.map((pokemon) => pokemon.name);
  const nameSorted = pokemonName.sort();
  console.log(nameSorted);
  return nameSorted.slice(0, 20);
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
function strongPokemons(pokemons) {
  const strongOnes = pokemons.filter(
    (pokemon) => pokemon.weaknesses.length === 1
  );

  let selectedOnes = strongOnes.slice(0, 15);
  return selectedOnes.map((pokemon) => pokemon.name);
}
