// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

const getAllFirePokemons = (array) => {

    const filterPoke = array.filter((pokemon) => {
        return pokemon.type.includes('Fire') 
    })
    return filterPoke;
}


// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

const shortestPokemon = (array) => {
    if (!array.length){
        return 0
    }
    
    const newPokeArr = JSON.parse(JSON.stringify(array));
    
    const findShortestPoke = newPokeArr.sort((pokeA, pokeB) => {
      
        // let pokeSize = convertStringToNum(newPokeArr.height)

        if (pokeA.height > pokeB.height){
            return 1
        } else if (pokeA.height < pokeB.height) {
            return -1
        } else {
            return 0
        }
    })

    return findShortestPoke[0].name
}



// Iteration 3: candy_count average - average of `candy_count` for all the pokemons


const candyAverage = (array) => {
    if (!array.length) {
        return 0;
    }

    const candyAverage = array.reduce((acc, candy) => {
        if (candy.candy_count) {
            return acc + candy.candy_count
        } else {
            return acc
        }
    }, 0)
    return Number((candyAverage / array.length).toFixed(2))
}


// Iteration 4: images for the first 10 `Ground`  Pokemons

const getGroundPokeImg = (array) => {
    if(!array.length){
        return 0
    }

    const pokeImage = array
    .filter((pokemon) => {
        if (pokemon.type.includes("Ground")) {
            return pokemon.img
        }
    })
    .slice(0, 9)
    //console.log(pokeImage)
    return pokeImage
}


// Iteration 5: Find all pokemon names heavier than Pikachu

const getHeavyPokemons = (array) => {
    if(!array.length){
        return 0
    }
    const newPokeArr = JSON.parse(JSON.stringify(array));

    // const pikaWeight = 
    // // const convertStringtoNum = (weigthString) => {
    // //     let convertWeight = weightString.split('kg'); 
    // //     return Number(convertWeight[0])
    // //   }

    // //   let pokeWeight = newPokeArr.weight

    
    
    // return newPokeArr
}


// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

const orderAlphabetically = (array) => {

    const newAlphaPokeArr = JSON.parse(JSON.stringify(array));

    const sortedArray = newAlphaPokeArr
    .sort((a, b) => {
        if (a.name > b.name) {
            return 1 
        } else {
            return -1
        }
    })
    
    .map(pokeName => pokeName.name)
    .slice(0, 19);

    return sortedArray
}




// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

const strongPokemons = (array) => {

    const strongPoke = array.filter((poke) => {
        if (poke.weaknesses.length <= 1) {
            return poke.name;
        }  
    })
    return strongPoke;
}