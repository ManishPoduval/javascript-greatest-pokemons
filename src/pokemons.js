// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
const getAllFirePokemons = pokemonsArr => {
    // Data type: pokemonsArr.type --> is an array
    // use filter method & includes method
    return pokemonsArr.filter(pokemon => pokemon.type.includes("Fire"))
}


// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
const shortestPokemon = pokemonArr => {
    if (!pokemonArr.length) {
        return 0;
    }

    // Return name of 1 pokemon
    // Data type: property height with a string in it: "height": "0.71 m"
    let minHeight = Infinity;
    let smallestPokemon = null;

    // Loop over each pokemon, check if minHeight < height pokemon
    // use replace method to remove the m
    pokemonArr.forEach(pokemon => {
        if (+pokemon.height.replace(' m', '') < minHeight) {
            minHeight = +pokemon.height.replace(' m', '') 
            smallestPokemon = pokemon.name;
        }
    })
    return smallestPokemon
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
const candyAverage = pokemonArr => {
    if (!pokemonArr.length) {
        return 0;
    }

    // Use the reduce method to calculate the sum of all candy types, check first if property exists
    // const allCandy = pokemonArr.reduce((total, pokemon) => {
    //     if (pokemon.candy_count) {
    //         return pokemon.candy_count + total;
    //     }
    //     else {
    //         return total;
    //     }
    // }, 0)
    
    const allCandy = pokemonArr.reduce((total, pokemon) => {
        return pokemon.candy_count ? total + pokemon.candy_count  : total
    }, 0);

    // let averageCandy = +((allCandy / pokemonArr.length).toFixed(2))
    // return averageCandy

    return +((allCandy / pokemonArr.length).toFixed(2))
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
const getGroundPokeImg = pokemonArr => {
    if (!pokemonArr.length) {
        return 0;
    }

    // Data type: pokemonsArr.type --> is an array
    // filter for ground pokemons, do splice and then map
    let groundPokemons = pokemonArr.filter(pokemon => pokemon.type.includes('Ground'))
    return groundPokemons.slice(0, 10).map(pokemon => pokemon.img)
}

// Iteration 5: Find all pokemon names heavier than Pikachu
const getHeavyPokemons = pokemonArr => {
    if (!pokemonArr.length) {
        return 0;
    }

    // find weight of Pickachy using forEach
    let weightPickachy
    pokemonArr.forEach(pokemon => {
        if (pokemon.name === "Pikachu") {
            weightPickachy = +pokemon.weight.replace(" kg", '') 
        }
    })

    // Use filter method to filter pokemons 
    // use replace method, + sign to convert into integert
    let heavyPokemons = pokemonArr.filter(pokemon => +pokemon.weight.replace(" kg", '' ) > weightPickachy)
    return heavyPokemons.map(pokemon => pokemon.name)
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
const orderAlphabetically = pokemonArr => {
    if (!pokemonArr.length) {
        return [];
    }

    // map first
    let pokemonNames = pokemonArr.map(pokemon => pokemon.name);

    // sort
    // let sortedPokemons = pokemonNames.sort((a, b) => {
    //     if (a < b) {
    //         return -1
    //     }
    //     else if (a > b) {
    //         return 1
    //     }
    //     else {
    //         return 0
    //     }
    // })

    // let sortedPokemons = pokemonNames.sort((a, b) => a < b ? -1 
    //                                                 :a > b ? 1 : 0)

    // use sort method to sort the names
    let sortedPokemons = pokemonArr.map(pokemon => pokemon.name).sort()


    // use slice to get first 20
    return sortedPokemons.slice(0, 20);
}


// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
const strongPokemons = pokemonArr => {
    if (!pokemonArr.length) {
        return 0;
    }

    // Data type: weaknesses --> array of strings
    let strongPokemons = pokemonArr.filter(pokemon => pokemon.weaknesses.length === 1)

    // slice 15 pokemons
    return strongPokemons.splice(0, 15).map(pokemon => pokemon.name);
}

  
