// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(arr){
 return arr.filter(a=>a.type.includes("Fire"))
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(arr){
    if (arr.length === 0) {
        return 0; 
      }
      //i didn't use map here 
let short = arr[0];
for(let i = 0 ; i < arr.length ; i++){
if(arr[i].name.length > short.name.length){
    short = arr[i];
}
}
return short.name;
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(arr){
    const pokemonwithcount = arr.filter(c => typeof c.candy_count === 'number');
    const averge = pokemonwithcount.reduce((p,v)=>(p+v.candy_count),0);
    const realAverge = averge/pokemonwithcount.length;
    return Math.round(realAverge * 100) / 100;
}
// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const filtered = arr.filter(p => p.type.includes("Ground"));
    const realFiltered = filtered.slice(0, 10).map(pokemon => pokemon.img);
    return realFiltered;
}
// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(arr) {
    
    const pikachu = arr.find(pokemon => pokemon.name === "Pikachu");
    if (!pikachu) {
        console.log("Pikachu not found in the array.");
        return 0;
    }

    // Filtering the array to get the names of Pokémon heavier than Pika
    const heavyPokemons = arr.filter(pokemon => parseFloat(pokemon.weight) > parseFloat(pikachu.weight));
    const heavyPokemonNames = heavyPokemons.map(pokemon => pokemon.name);
    return heavyPokemonNames;
}



// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(arr){
    const clonedArray = [...arr];
    const sortedArray = clonedArray.sort((a, b) => a.name.localeCompare(b.name));
    const top20 = sortedArray.slice(0, 20);
    const top20Names = top20.map(pokemon => pokemon.name);
    return top20Names;
}




// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(arr) {
    const singleWeaknessPokemons = arr.filter(pokemon => pokemon.weaknesses.length === 1);
    const top15Names = singleWeaknessPokemons.slice(0, 15).map(pokemon => pokemon.name);
    return top15Names;
}
