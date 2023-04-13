// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(array){
    const firePokemon = array.filter(select => select.type.includes("Fire"))
    return firePokemon;
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(array){
    if(array.length === 0){ return 0}
    let shortest = array[0]
    for(let i=1; i<array.length; i++){
        if(array[i].height < shortest.height){
            shortest = array[i]
        }
    } 
    return shortest.name
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(array){
    if(array.length === 0) return 0;
    let total = 0;
    let pokemons = array.length
    for(let i=0; i< array.length; i++){
        if(array[i].candy_count) 
             total += array[i].candy_count    
    }
    let avg = (total/pokemons)
    return Math.round(avg*100)/100;
}

// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
