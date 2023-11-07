// Importing the Pokemons array data
// const pokemons = require('./data.js'); 

// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

// console.log("\n Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons");

// Creating the Function
function getAllFirePokemons (pokemonArray) { 

    // Create a variable to hold the fire Pokemons
    const firePokemons = pokemonArray.filter(pokemon => {

        // If the fire type exist in the array
        return pokemon.type.includes("Fire");
    });

    // Return the value
    return firePokemons;
}

// console.log(`\n   The Fire Pokemons are: ${getAllFirePokemons(pokemons)}`);

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon.

// Define the function
function shortestPokemon(pokemonArray) {

    //Using reduce to find the shortest Pokemon
    const shortest = pokemonArray.reduce((acc, pokemon) => {

        // Return 0 if the Array is empty
        if(pokemonArray.length === 0) {
            return 0;
        }
                
        // Parsing the height string to compare
        const height1 = parse.Float(acc.height);
        const height2 = parse.Float(acc.height);
        
        // Returning the information
        return height1 < height2 ? acc : pokemon;
    });

    // Return the name of the shortest Pokemon
    return shortest.name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

// console.log("\n");