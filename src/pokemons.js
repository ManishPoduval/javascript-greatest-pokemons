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
    if(array.length === 0){return 0}
  const candiesSum = array.reduce((a,b) => {
    if(b.candy_count){
     return a + b.candy_count
    } else {
      return a;
    }
  }, 0);
  
   let avg = candiesSum/array.length;
   return Math.round(avg*100)/100;
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(array){
    if(array.length === 0){return 0}
    
    const groundPoke = array.filter(select => select.type.includes("Ground"))
    const slicedArray = groundPoke.slice(0, 10);
    const imgArr = slicedArray.map(img => img.img)
    return imgArr

}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(array){
    if(array.length === 0){return 0}  
    const pikachu = array.find(item => item.name === "Pikachu")
    const heaviest = ["a", "b", "c", "d", "e", "f"]
    array.forEach(item => {
      if(parseInt(item.weight) > parseInt(pikachu.weight)) heaviest.push(item.name)
    })
                
    return heaviest;
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(array){
    const newArr = array.map(elem => elem).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    
    const firstTwenty = newArr.slice(0,20).map(elem => elem.name)
                                                
     return firstTwenty
  } 


// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(array){
    const strongests = array.filter(item => item.weaknesses.length === 1 )
    
    const strNames = strongests.slice(0,15).map(elem => elem.name)
    
    return strNames
}