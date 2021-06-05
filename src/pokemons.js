
// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {

   return pokemons.filter((pokemon) => {
       return pokemon.type.includes("Fire")
   })
}
    
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    if (!pokemons.length) {return 0};

    const pokeClone = JSON.parse(JSON.stringify(pokemons));
    
    pokeClone.sort((a,b) => {
        if (a.height < b.height) { return -1}
        else if (a.height > b.height) {return 1 } 
        else {return 0};
    })
    let short = pokeClone[0].name;
    return short;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
    if (!pokemons.length) {return 0};

    candyClone = JSON.parse(JSON.stringify(pokemons));
    
   let candySum = candyClone.reduce((acc, pokemon) => {   
      if (pokemon.candy_count) {
        return acc + pokemon.candy_count
        } else {
            return acc 
        } 
   },0)
  return +((candySum / candyClone.length).toFixed(2))   
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
    if (!pokemons.length) {return 0};
    groundPokemons = pokemons.filter((pokemon) => {
        return pokemon.type.includes("Ground")
    })
    let groundImg = groundPokemons.map((pokemon) => {
        return pokemon.img
    })
    return groundImg.slice(0,10)
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
    if (!pokemons.length) { return 0 };
  
    let pkWt = '';
    pokemons.filter((pokemon) => {
        if (pokemon.name === "Pikachu") {
        pkWt = +pokemon.weight.slice(0,-2)
        }
    })

    let heavyPokemons = [];
    pokemons.filter((pokemon) => {
        if (+(pokemon.weight.slice(0,-2)) > pkWt) {
        heavyPokemons.push(pokemon.name)
        }
    });
    return heavyPokemons
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
    const pokeClone = JSON.parse(JSON.stringify(pokemons));

    const sortedArray = pokeClone.sort((a,b) => {
        if (a.name < b.name) {return -1}
        else if (a.name > b.name) {return +1}
        else {return 0};
})
    return sortedArray.map( pokemon => pokemon.name ).slice(0,20);
    }
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons) {

    const strongPokemons = pokemons.filter((pokemon) => {
        return pokemon.weaknesses.length === 1
    })
    
    let strongNames = strongPokemons.map( pokemon => {
        return pokemon.name
    })
    return strongNames.slice(0,15);
}