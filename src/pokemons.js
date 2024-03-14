// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

// Iteration 4: images for the first 10 `Ground`  Pokemons// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

function getAllFirePokemons(array) {
    const firePokemon = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].type.includes("Fire")) {
            firePokemon.push(array[i]);
        }
    }
    return firePokemon;
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

function shortestPokemon(arr) {
    let shortest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (parseInt(arr[i].height) < parseInt(shortest.height)) {
            shortest = arr[i];
        }
    }gi
    return shortest.name;
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

function candyAverage(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i].candy_count === 'number') {
            sum += arr[i].candy_count;
            count++;
        }
    }
    const average = sum / count;
    return (Math.round(average * 100) / 100);
}
// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGroundPokeImg(arr) {
    const groundPokemonImages = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const pokemon = arr[i];
        if (count >= 10) {
            break; 
        }
        if (pokemon.type.includes("Ground")) {
            groundPokemonImages.push(pokemon.img);
            count++;
        }
    }
    return groundPokemonImages;
}
// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(arr) {
    const heavyPokemons = [];
    const pikachuWeight = parseFloat(arr.find(pokemon => pokemon.name === 'Pikachu').weight);

    for (let i = 0; i < arr.length; i++) {
        const pokemon = arr[i];
        if (parseFloat(pokemon.weight) > pikachuWeight) {
            heavyPokemons.push(pokemon.name);
        }
    }

    return heavyPokemons;
}
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(arr) {
    const sortedPokemons = arr.slice(0, 20).sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    const names = [];
    for (let i = 0; i < sortedPokemons.length; i++) {
        names.push(sortedPokemons[i].name);
    }

    return names;
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

function strongPokemons(arr) {
    const strong = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].weaknesses.length === 1) {
            strong.push(arr[i].name);
            count++;
            if (count === 15) {
                break;
            }
        }
    }

    return strong;
}

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
