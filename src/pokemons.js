const pokemons = require('./pokemons/data.js');

// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemonArr) {
    // Use filter to get only Fire type pokemons
    return pokemonArr.filter(pokemon => pokemon.type.includes('Fire'));
  }
  
 
  
  const firePokemons = getAllFirePokemons(pokemons);
  console.log(firePokemons);
  

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemonArr) {
    if (pokemonArr.length === 0) {
      return 'No Pokémon in the array.';
    }
  
    let shortest = pokemonArr[0];
  
    for (let i = 1; i < pokemonArr.length; i++) {
      if (pokemonArr[i].height && pokemonArr[i].height < shortest.height) {
        shortest = pokemonArr[i];
      }
    }
  
    return shortest.name;
  }
  
  
  const shortest = shortestPokemon(pokemons);
  console.log(shortest);
  

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
// Iteration 3
function candyAverage(pokemonArr) {
    // Filter pokemons with candy_count, extract candy_count values
    const candyCounts = pokemons
      .filter(pokemon => pokemon.candy_count !== undefined)
      .map(pokemon => pokemon.candy_count);
  
    // Check if there are candy_counts
    if (candyCounts.length === 0) {
      return 0;
    }
  
    // Calculate the average candy_count rounded to 2 decimals
    const totalCandyCount = candyCounts.reduce((sum, count) => sum + count, 0);
    const averageCandyCount = totalCandyCount / candyCounts.length;
  
    return parseFloat(averageCandyCount.toFixed(2));
  }
  
 
  
  const averageCandyCount = candyAverage(pokemons);
  console.log(averageCandyCount);
  

// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGroundPokeImg(pokemonArr) {
    // Filter and extract images for the first 10 Ground type pokemons
    const groundPokeImages = pokemonArr
      .filter(pokemon => pokemon.type.includes('Ground'))
      .slice(0, 10)
      .map(pokemon => pokemon.img);
  
    return groundPokeImages;
  }
  
 
  
  const groundPokeImages = getGroundPokeImg(pokemons);
  console.log(groundPokeImages);
  




// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(pokemonArr) {
    // Find the weight of Pikachu
    const pikachuWeight = pokemonArr.find(pokemon => pokemon.name === 'Pikachu')?.weight || 0;
  
    // Filter pokemons with weight greater than Pikachu
    const heavyPokemons = pokemons
      .filter(pokemon => pokemon.weight && pokemon.weight > pikachuWeight)
      .map(pokemon => pokemon.name);
  
    return heavyPokemons;
  }
  

  
  const heavyPokemons = getHeavyPokemons(pokemons);
  console.log(heavyPokemons);
  

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
// Iteration 6
function orderAlphabetically(pokemonArr) {
    // Create a new array to avoid mutating the original array
    const sortedPokemons = [...pokemonArr];
  
    // Sort the pokemons alphabetically by name
    sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
  
    // Extract names of the first 20 pokemons or all if less than 20
    const first20Names = sortedPokemons.slice(0, 20).map(pokemon => pokemon.name);
  
    return first20Names;
  }
  
 
  const alphabeticallyOrderedNames = orderAlphabetically(pokemons);
  console.log(alphabeticallyOrderedNames);
  

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
// Iteration 7
function strongPokemons(pokemonArr) {
    // Filter and extract names of the first 15 pokemon with one weakness
    const strongPokemonsNames = pokemonArr
      .filter(pokemon => pokemon.weaknesses && pokemon.weaknesses.length === 1)
      .slice(0, 15)
      .map(pokemon => pokemon.name);
  
    return strongPokemonsNames;
  }
  
  
  
  const strongPokemonsNames = strongPokemons(pokemons);
  console.log(strongPokemonsNames);
  