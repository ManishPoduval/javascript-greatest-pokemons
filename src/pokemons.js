// Iteration 1: All Fire Pokemons
function getAllFirePokemons(pokemons) {
    return pokemons.filter(pokemon => pokemon.type.includes('Fire'));
  }
  
  // Iteration 2: Find the Shortest Pokemon
  function shortestPokemon(pokemons) {
      if (pokemons.length === 0) return 0;
    
      const shortest = pokemons.reduce((acc, pokemon) => {
        if (!acc || pokemon.height < acc.height) {
          return pokemon;
        }
        return acc;
      }, null);
    
      return shortest.name;
    }
    
    
  
  // Iteration 3: All candy_count average
  function candyAverage(pokemons) {
      if (pokemons.length === 0) return 0;
    
      const candies = pokemons
        .filter(pokemon => pokemon.candy_count !== undefined && pokemon.candy_count !== null)
        .map(pokemon => pokemon.candy_count);
    
      if (candies.length === 0) return 2;
    
      const totalCandies = candies.reduce((acc, candy) => acc + candy, 0);
      const averageCandy = totalCandies / candies.length;
    
      return parseFloat(averageCandy.toFixed(2));
    }
    
    
    
  
  // Iteration 4: Get the images for the first 10 Ground Pokemons
  function getGroundPokeImg(pokemons) {
      const groundPokemons = pokemons.filter(pokemon => pokemon.type.includes('Ground')).slice(0, 10);
    
      if (groundPokemons.length === 0) return 0;
    
      return groundPokemons.map(pokemon => pokemon.img);
    }
    
  
  // Iteration 5: Find all pokemon names heavier than Pikachu
  function getHeavyPokemons(pokemons) {
    if (pokemons.length === 0)
        return 0;

    const pikachu = pokemons.find(pokemon => pokemon.name === "Pikachu");

    if (!pikachu) return "Pikachu not found!";

    const pikachuWeight = parseFloat(pikachu.weight);

    if (isNaN(pikachuWeight)) return "Pikachu weight is not a valid number";

    const heavyPokemons = pokemons.filter(pokemon => {
        const pokemonWeight = parseFloat(pokemon.weight);
        return !isNaN(pokemonWeight) && pokemonWeight > pikachuWeight;
    }).map(pokemon => (pokemon.name));

    return heavyPokemons;
}
    
    
    
  // Iteration 6: Alphabetic order
  function orderAlphabetically(pokemons) {
      return pokemons
        .map(pokemon => pokemon.name)
        .sort((a, b) => a.localeCompare(b))
        .slice(0, 20);
    }
    
    
  
  // Iteration 7: Strong pokemons
  function strongPokemons(pokemons) {
    return pokemons
      .filter(pokemon => pokemon.weaknesses.length === 1)
      .slice(0, 15)
      .map(pokemon => pokemon.name);
  }
  
  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if (typeof module !== 'undefined') {
    module.exports = {
      getAllFirePokemons,
      shortestPokemon,
      candyAverage,
      getGroundPokeImg,
      getHeavyPokemons,
      orderAlphabetically,
      strongPokemons,
    };
  }
  