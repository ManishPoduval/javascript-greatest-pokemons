// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

const getAllFirePokemons = (pokemons) => {
    
    return firePoke = pokemons.filter((pokemon) => {
        if (pokemon.type.includes('Fire')) {
            return pokemon
        }   
    })
    
} 

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

const shortestPokemon = (pokemons) => {
    if (!pokemons.length) return 0
    let shortestPokeHeight = '10 m'
    let shortestPokeName = ''
    pokemons.forEach((pokemon) => {
        if (pokemon.height < shortestPokeHeight) {
            shortestPokeHeight = pokemon.height
            shortestPokeName = pokemon.name
        }
    })
    return shortestPokeName
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

const candyAverage = (pokemons) => {
    if (!pokemons.length) return 0
    let allCandy = pokemons.reduce((candy, pokemon) => {
        if (pokemon.candy_count == undefined){
            return candy
        } else {
            return candy + pokemon.candy_count
        }
    },0)
    let candyAvg = allCandy / pokemons.length
    return Number(candyAvg.toFixed(2))
}



// Iteration 4: images for the first 10 `Ground`  Pokemons

const getGroundPokeImg = (pokemons) => {
    if (!pokemons.length) return 0
    let groundPoke = pokemons.filter((pokemon) => {
        if (pokemon.type.includes('Ground')) {
            return pokemon
        }
    }).map((pokemon) => {
        return pokemon.img
    })
    return groundPoke.splice(0, 10)
}

// Iteration 5: Find all pokemon names heavier than Pikachu

const getHeavyPokemons = (pokemons) => {
    let copyPoke = JSON.parse(JSON.stringify(pokemons))
    if (!pokemons.length) return 0
    let pikachu = copyPoke.filter((pokemon) => {
        return pokemon.name === 'Pikachu'
    })
    if (pikachu.weight == undefined) {
        pikachu.weight = '6.0 kg'
    }
    let pokemonHeavier = copyPoke.filter((pokemon) => {
        return Number(pokemon.weight.split(' ')[0]) > Number(pikachu.weight.split(' ')[0])
    }).map((pokemon) => {
        if (pokemon.name === undefined) {
            pokemon.name = ' '
        } else {
            return pokemon.name
        }
    })
    console.log(pokemonHeavier)
    return pokemonHeavier
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names



const orderAlphabetically = (pokemons) => {
    if (!pokemons.length) return 0
    let copyPoke = JSON.parse(JSON.stringify(pokemons))
    return copyPoke.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        } else if (a.name < b.name) {
            return -1
        } else {
            return 0
        }
    }).map((pokemon) => {
        return String(pokemon.name)
    }).splice(0, 20)
}
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

const strongPokemons = (pokemons) => {
    return pokemons.filter((pokemon) => {
        return pokemon.weaknesses.length <= 1
    }).map((pokemon) => {
        return pokemon.name
    }).splice(0, 15)
}