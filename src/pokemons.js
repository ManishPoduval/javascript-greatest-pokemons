// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(arr) {
  return arr.filter((pokemon) => pokemon.type.includes("Fire"));
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((a, b) => (a.height < b.height ? a : b)).name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const result = arr.reduce((a, b) => a + (b.candy_count || 0), 0);
  // rounded to 2 decimals
  return Math.round((result / arr.length) * 100) / 100;
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr
    .filter((pokemon) => pokemon.type.includes("Ground"))
    .slice(0, 10)
    .map((pokemon) => pokemon.img);
}

// Iteration 5: Find all pokemon names heavier than Pikachu
/**
 * I am not sure if this is correct.
 * because I din't understand the question
 */

function getHeavyPokemons(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const pikachu = arr.find((pokemon) => pokemon.name === "Pikachu");
  return arr
    .filter((pokemon) => pokemon.weight > pikachu.weight)
    .map((pokemon) => pokemon.name);
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(arr) {
  return arr
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 20)
    .map((pokemon) => pokemon.name);
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
function strongPokemons(arr) {
  return arr
    .filter((pokemon) => pokemon.weaknesses.length === 1)
    .slice(0, 15)
    .map((pokemon) => pokemon.name);
}
