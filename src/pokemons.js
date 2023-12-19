// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
 const firePokemons = pokemons.filter(
    (pokemon)=>{
        return pokemon.type.includes('Fire')

    }
 )
 console.log(firePokemons)
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
  const names = pokemons.map(
    (pokemon)=>{
        return pokemon.name
       
    }

    )
    let len = names[0].length
    let name = ''

    for(let i=1;i<names.length;i++){
        if(names[i].length<len){
            len = names[i].length
            name = names[i]
           
        }
    }

  console.log(name)


// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
const candyCounts = pokemons.map(
  (pokemon)=>{
    if(pokemon.candy_count == undefined )
    {
      pokemon.candy_count = 0
    }
    return pokemon.candy_count

  }
)
 let sumOfCandy = candyCounts.reduce(
  (prev,curr)=>{
    return prev+curr

  }
 )


console.log(candyCounts)
console.log(sumOfCandy/candyCounts.length)




// Iteration 4: images for the first 10 `Ground`  Pokemons
const groundPokemons = pokemons.filter(
  (pokemon)=>{
    let isGround = false
      for(let i=0;i<pokemon.weaknesses.length;i++){
        if(pokemon.weaknesses[i]=='Ground'){
          isGround=true
        
        }
      }
      return isGround == true
  }
)
let tempPokemon = groundPokemons.slice(0,10)
const pokemonImages = tempPokemon.map(
  (pokemon)=>{
      return pokemon.img
  }
)

console.log(pokemonImages)
console.log(groundPokemons)




 

// Iteration 5: Find all pokemon names heavier than Pikachu
const pikachu = pokemons.find(
  (pokemon)=>{
    return pokemon.name == 'Pikachu'

  }
)
const heavierPokemons = pokemons.filter(
  (pokemon)=>{
       return pokemon.weight>pikachu.weight
  }
)
const pokemonNames = heavierPokemons.map(
  (pokemon)=>{
  return pokemon.name
  }
)
console.log(pokemonNames)
// console.log(pikachu)


// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
const tempNames = pokemons.map(
  (pokemon)=>{
    return pokemon.name

  }
)
const sortTempNames = tempNames.sort()
const alphabeticalOrder = sortTempNames.slice(0,20) 
console.log(alphabeticalOrder)


// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
   const oneWeakness = pokemons.filter(
    (pokemon)=>{
          return pokemon.weaknesses.length === 1
    }
   )
   const strongPokemons = oneWeakness.slice(0,15)
   console.log(strongPokemons)