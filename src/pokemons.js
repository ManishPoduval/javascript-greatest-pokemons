// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

function getAllFirePokemons(pokemons) {
    return pokemons.filter(pokemon => pokemon.type.includes("Fire"))

}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

function shortestPokemon(pokemons) {
    let shortest = pokemons[0];
    pokemons.forEach(pokemon => {
        if (pokemon.height < shortest.height) {
            shortest = pokemon;
        }
    })
    return shortest.name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

function candyAverage(pokemons) {   
    let sum = 0;
    pokemons.forEach(pokemon => {
        if (pokemon.candy_count) {
            sum += pokemon.candy_count;
        }
    })
    return sum / pokemons.length;
}

// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGroundPokeImg(pokemons) {
    let groundPoke = pokemons.filter(pokemon => pokemon.type.includes("Ground"));
    let firstTen = groundPoke.slice(0, 10);
    return firstTen.map(pokemon => pokemon.img);
}

// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(pokemons) {
    let pikachu = pokemons.find(pokemon => pokemon.name === "Pikachu");
    let heavyPoke = pokemons.filter(pokemon => pokemon.weight > pikachu.weight);
    return heavyPoke.map(pokemon => pokemon.name);
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(pokemons) {
    let pokeNames = pokemons.map(pokemon => pokemon.name);
    let sortedPokeNames = pokeNames.sort();
    return sortedPokeNames.slice(0, 20);
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

function strongPokemons(pokemons) {
    let oneWeakness = pokemons.filter(pokemon => pokemon.weaknesses.length === 1);
    return oneWeakness.slice(0, 15);
}