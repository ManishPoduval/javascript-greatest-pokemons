
// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(myPokemons){
    const arrayOfPPokemons = myPokemons.filter(pokemon => pokemon.type === 'Fire');
    return arrayOfPPokemons;
};
getAllFirePokemons(pokemons);
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons){
    const minPokemon = Math.min(...pokemons.map(o => o.length));
    for(let i = 0; i < pokemons.length; i++){
        if(pokemons.length = 0){
            return pokemons;
        } else{
            return `${minPokemon}`;
        }
    }
}
shortestPokemon(pokemons);
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(){

};
// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
