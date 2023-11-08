// Importing the Pokemons array data
// const pokemons = require('./data.js'); 

// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
/*
We need to get the array of all Fire type pokemons. Go ahead and create a function named getAllFirePokemons() that receives an array of pokemons as an argument and returns a new filtered array.

"type": [

"Fire",

],
All fire type pokemons will have that type Fire
*/

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

/*
Go ahead and create a shortestPokemon() function that receives an array as a parameter and returns the name of the shortest pokemon
*/

// Define the function
function shortestPokemon(pokemonArray) {
    
    // Return 0 if the Array is empty
    if(pokemonArray.length === 0) {
        return 0;
     }

    //Using reduce to find the shortest Pokemon
    const shortest = pokemonArray.reduce((acc, pokemon) => {
                
        // Parsing the height string to compare
        const height1 = parseFloat(acc.height);
        const height2 = parseFloat(pokemon.height);
        
        // Returning the information
        return height1 < height2 ? acc : pokemon;
    });

    // Return the name of the shortest Pokemon
    return shortest.name;
}


// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

/* 
Create a candyAverage() function that receives an array as a parameter. This function must return the average of candy_count for all the pokemons

The average must be returned rounded to 2 decimals! Note: Some pokemons do not have a candy_count. Handle that scenario gracefully.
*/

// Create the function.
function candyAverage(pokemonArray) {

    // If there's no Pokemon return zero
    if(pokemonArray.length === 0) {
        return 0;
    }
    

    // Using reduce to calculate the total of Pokemon with Candy
    const candySum = pokemonArray.reduce((sum, pokemon) => {
        
        // Check if polemon has Candy
        if(pokemon.candy_count) {

            // If yes add to the acumulator
            sum.totalCandy += pokemon.candy_count;
        }

        // Return the updated total
        return sum;

        }, {totalCandy: 0});

        // Calculating the average candy
        const averageCandy =  candySum.totalCandy / pokemonArray.length;

    // Returning the value
    return parseFloat(averageCandy.toFixed(2));
}

// Iteration 4: images for the first 10 `Ground`  Pokemons

/*
Create a function getGroundPokeImg() which accepts an array of pokemons as a parameter and returns an array of images for the first 10 Ground type pokemons.

Note: Ground type pokemons have this property in the object


"type": [

"Ground",

],

*/

// Create the function getGroundPokeImg()
function getGroundPokeImg(pokemonArray) {
    
    // Check if the array is empty. If yes return zero.
    if(pokemonArray.length === 0) {
        return 0;
    }

    // Array that will hold the image values
    const groudnPkmImg = [];

    // For Loop to go throught array up to 10
    for(let i = 0; i < pokemonArray.length && groudnPkmImg.length < 10; i++) {

        // Get Pokemon
        const currentPokemon = pokemonArray[i];

        // Check if it is Groind and if yes save it.
        if(currentPokemon.type.includes("Ground")) {
            
            // Add the image to the array
            groudnPkmImg.push(currentPokemon.img);
        }
    }

    // Returnning the Array of the first 10 Pokemons
    return groudnPkmImg;
}

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

// console.log("\n");