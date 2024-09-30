// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
  return pokemons.filter((pokemon) => pokemon.type.includes("Fire"));
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

function shortestPokemon(pokemons) {
  if (pokemons.length === 0) return 0;
  return pokemons.reduce((shortest, current) => {
    const currentHeight = parseFloat(current.height);
    const shortestHeight = parseFloat(shortest.height);
    return currentHeight < shortestHeight ? current : shortest;
  }).name;
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
    const validCandies = pokemons
      .map(pokemon => pokemon.candy_count || 0); 
    if (validCandies.length === 0) return 0;
  
    const totalCandies = validCandies.reduce((sum, candy) => sum + candy, 0);
    return Math.round((totalCandies / validCandies.length) * 100) / 100;
  }
// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
  const groundPokemons = pokemons
    .filter((pokemon) => pokemon.type.includes("Ground"))
    .slice(0, 10);
  return groundPokemons.length
    ? groundPokemons.map((pokemon) => pokemon.img)
    : 0;
}

// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(pokemons) {
  const pikachu = pokemons.find((pokemon) => pokemon.name === "Pikachu");
  if (!pikachu) return 0;
  const pikachuWeight = parseFloat(pikachu.weight);
  return pokemons
    .filter((pokemon) => parseFloat(pokemon.weight) > pikachuWeight)
    .map((pokemon) => pokemon.name);
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(pokemons) {
  return pokemons
    .map((pokemon) => pokemon.name)
    .sort()
    .slice(0, 20);
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
function strongPokemons(pokemons) {
  return pokemons
    .filter((pokemon) => pokemon.weaknesses.length === 1)
    .map((pokemon) => pokemon.name)
    .slice(0, 15);
}
