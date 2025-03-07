// Iteration 1: Get all Fire-type Pokemons
function getAllFirePokemons(pokemons) {
  return pokemons.filter((pokemon) => pokemon.type.includes("Fire"));
}

// Iteration 2: Find the Shortest Pokemon
function shortestPokemon(pokemons) {
  return pokemons.reduce((shortest, current) => {
    return parseFloat(current.height) < parseFloat(shortest.height)
      ? current
      : shortest;
  }).name;
}

// Iteration 3: Calculate the average candy_count
function candyAverage(pokemons) {
  let totalCandy = 0;
  let count = 0;

  pokemons.forEach((pokemon) => {
    if (pokemon.candy_count) {
      totalCandy += pokemon.candy_count;
      count++;
    }
  });

  return count === 0 ? 0 : parseFloat((totalCandy / count).toFixed(2));
}

// Iteration 4: Get images of first 10 Ground-type Pokemons
function getGroundPokeImg(pokemons) {
  return pokemons
    .filter((pokemon) => pokemon.type.includes("Ground"))
    .slice(0, 10)
    .map((pokemon) => pokemon.img);
}

// Iteration 5: Find all Pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
  const pikachu = pokemons.find((pokemon) => pokemon.name === "Pikachu");
  const pikachuWeight = parseFloat(pikachu.weight);

  return pokemons
    .filter((pokemon) => parseFloat(pokemon.weight) > pikachuWeight)
    .map((pokemon) => pokemon.name);
}

// Iteration 6: Alphabetical Order (first 20 names)
function orderAlphabetically(pokemons) {
  return pokemons
    .map((pokemon) => pokemon.name)
    .sort()
    .slice(0, 20);
}

// Iteration 7: Strong Pokemons (first 15 with only one weakness)
function strongPokemons(pokemons) {
  return pokemons
    .filter((pokemon) => pokemon.weaknesses.length === 1)
    .slice(0, 15)
    .map((pokemon) => pokemon.name);
}
