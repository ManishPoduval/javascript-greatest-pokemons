// const pokemons = require("./data");

// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons){
    return pokemons.filter(pokemon => pokemon.type[0] === 'Fire');
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons){
  const pokemonHeights = pokemons.map(pokemon => pokemon.height.split(' ').shift());

  const leastHeight = `${pokemonHeights.sort((a, b) => a - b)[0]} m`;

  const shortPokemon = pokemons.filter(pokemon => pokemon.height === leastHeight);
  return  shortPokemon.length === 0 ? 0 : shortPokemon[0].name;
    
}




// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
