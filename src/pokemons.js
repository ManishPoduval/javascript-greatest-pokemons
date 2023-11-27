// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
    let firePokemons = pokemons.filter(pokemon => pokemon.type.includes("Fire"));
    return firePokemons;
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    if (pokemons.length === 0) {
        return 0;
    }
    let shortestPokemon = pokemons.reduce((minHeightPokemon, currentPokemon) => {
        const minHeight = parseFloat(minHeightPokemon.height);
        const currentHeight = parseFloat(currentPokemon.height);

        return minHeight < currentHeight ? minHeightPokemon : currentPokemon;
    }, pokemons[0]);
    return shortestPokemon.name

}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {

    if (pokemons.length === 0) {
        return 0;
    }

    const totalCandy = pokemons.reduce((sum, pokemon) => sum + parseFloat(pokemon.candy_count || 0), 0);
    const averageCandy = totalCandy / pokemons.length;
    return Math.round(averageCandy * 100) / 100;
}
// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
    if (pokemons.length === 0) {
        return 0;
    }
    const groundpokemon = pokemons.filter(pokemon => pokemon.type.includes("Ground"));
    const groundpokemonimg = groundpokemon.map(pokemon => pokemon.img).slice(0, 10);
    return groundpokemonimg;

}
// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
    if (pokemons.length === 0) {
        return 0;
    }
    const pikachuWeight = parseFloat(pokemons.find(pokemon => pokemon.name === "Pikachu").weight);
    const heavyPokemons = pokemons.filter(pokemon => parseFloat(pokemon.weight) > pikachuWeight);
    const heavyPokemonsName = heavyPokemons.map(pokemon => pokemon.name);
    return heavyPokemonsName;
}
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
    const sortedPokemons = [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
    const first20Pokemons = sortedPokemons.slice(0, 20);
    return first20Pokemons.map(pokemon => pokemon.name);
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

function strongPokemons(pokemons) {
    const filteredPokemons = pokemons.filter(pokemon => pokemon.weaknesses.length === 1).slice(0, 15);

    return filteredPokemons.map(pokemon => pokemon.name);
}