// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons){
    const firePokemons = pokemons.filter((pokemon)=>pokemon.type.includes('Fire'))
    if(firePokemons.length===0){
        return null
    }
    else{
        return firePokemons
    }
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    if (pokemons.length === 0) return 0;
    if (pokemons.length === 1) return pokemons[0].name;

    const data = pokemons.map((pokemon) => [
        pokemon.name,
        parseInt(pokemon.height.replace(/[^0-9.]/g, "")),
    ]);

    let lowest = data[0][1];
    let lowestName = data[0][0];

    for (const item of data) {
        if (item[1] < lowest) {
        lowest = item[1];
        lowestName = item[0];
        }
    }

    return lowestName;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
  let candy_count_arr = pokemons
    .map((pokemon) => pokemon.candy_count)
    .filter((item) => item !== undefined);
  let totalCount = candy_count_arr.reduce((acc, sum) => acc + sum, 0);
  let average = (totalCount / pokemons.length).toFixed(2);
  return average;
}
// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
  let groundPokemons = pokemons.filter((pokemon) =>
    pokemon.type.includes("Ground")
  );
  let filteredTen = groundPokemons.map((pokemon) => pokemon.img);

  return filteredTen;
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons){
    const pikachuWeight=6;
    let heavierThanPikachu = pokemons.filter(
      (pokemon) =>
        parseInt(pokemon.weight.replace(/[^0-9.]/g, "")) > pikachuWeight
    );
    let names = heavierThanPikachu.map((pokemon)=>pokemon.name)
    return names
}
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons){
    let nameList = pokemons.map((pokemon)=>pokemon.name)
    let nameListSorted = nameList.sort((a, b) => a.localeCompare(b)) 
    if(pokemons.length<20){
        return nameListSorted
    }
    else{
        return nameListSorted.slice(0,20)
    }


}
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
function strongPokemons(pokemons){
    let strongPokemons = pokemons.filter((pokemon) =>
      pokemon.weaknesses.length===1
    );
    let filteredStrong = strongPokemons.map((pokemon)=>pokemon.name).slice(0,15)
    return filteredStrong
}