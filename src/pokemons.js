// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(arr){
 return arr.filter(a=>a.type.includes("Fire"))
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(arr){
    if (arr.length === 0) {
        return 0; 
      }
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




// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
