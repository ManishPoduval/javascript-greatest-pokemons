
// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
   return pokemons.filter(pokemon => pokemon.type.includes("Fire"))
}
    
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    if (!pokemons.length) {return 0};
    const pokeClone = JSON.parse(JSON.stringify(pokemons));
    pokeClone.sort((a,b) => a.height < b.height ? -1 : +1)
    return pokeClone[0].name; 
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
    if (!pokemons.length) {return 0};
    const pokeClone = JSON.parse(JSON.stringify(pokemons));
    let candySum = pokeClone.reduce((acc, pokemon) => (pokemon.candy_count ? acc + pokemon.candy_count : acc), 0)
    return +((candySum / pokeClone.length).toFixed(2))   
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
    if (!pokemons.length) {return 0};
    groundPokemons = pokemons.filter(pokemon => pokemon.type.includes("Ground"))
    return groundPokemons.map(pokemon => pokemon.img).slice(0,10)
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
        if (!pokemons.length) { return 0 };
        const pikachuWeight = pokemons.reduce((acc, pokemon) => (pokemon.name === "Pikachu") ?  acc + pokemon.weight :  acc, 0);
        const heavyPokemons  = pokemons.filter(pokemon => +pokemon.weight.slice(0,-2) > +pikachuWeight.slice(0,-2));
        return heavyPokemons.map(pokemon => pokemon.name)
    }

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
    const pokeClone = JSON.parse(JSON.stringify(pokemons));
    const sortedArray = pokeClone.sort((a,b) => a.name < b.name ? -1 : +1)
    return sortedArray.map( pokemon => pokemon.name ).slice(0,20);
    }
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons) {
    const strongPokemons = pokemons.filter(pokemon => pokemon.weaknesses.length === 1)
    return strongPokemons.map(pokemon => pokemon.name).slice(0,15);
}