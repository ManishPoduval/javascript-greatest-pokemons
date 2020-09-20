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
    console.log(findShortestPoke)
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
        return (pokemon.type.includes("Ground")) 
    })
    .map((pokemon) => {
        return pokemon.img
    })

    .slice(0, 10)
    //console.log(pokeImage)
    return pokeImage
}


// Iteration 5: Find all pokemon names heavier than Pikachu

const getHeavyPokemons = (array) => {
    if(!array.length){
        return 0
    }
    const newPokeArr = JSON.parse(JSON.stringify(array));
    
    const findHeavyPoke = newPokeArr
    
    // You’ll need to filter the pokemons, find pikachu and store the weight in a variable rather than hardcoding it.
    // Once you find pikachu’s weight, loop over the array again and filter based on the ones heavier than pikachu
    let pikaWeight = "";
    const findPika = findHeavyPoke.filter((pokemon) => {
        if (pokemon.name === "Pikachu")
        //console.log(Number(pokemon.height.split(" ")[0]))
        pikaWeight = Number(pokemon.weight.split(" ")[0])
    })

    console.log(pikaWeight)

    const otherPokeWeight = findHeavyPoke
    
    .filter((poke) => {
        let allOtherPokeWeight = Number(poke.weight.split(" ")[0]);
        //console.log(allOtherPokeWeight)
        return allOtherPokeWeight > pikaWeight
    })
    //console.log(otherPokeWeight)

    .map((poke) => {
        return poke.name
    })

  

    console.log(otherPokeWeight.toString())
    return otherPokeWeight
}


// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

const orderAlphabetically = (array) => {

    const newAlphaPokeArr = JSON.parse(JSON.stringify(array));

    const sortedArray = newAlphaPokeArr
    
    .sort((pokeA, pokeB) => {
        if (pokeA.name > pokeB.name) {
            return 1 
        } else if (pokeA.name < pokeB.name) {
            return -1
        } else {
            return 0
        }
    })

    .map(pokeName => pokeName.name)
    .slice(0, 20);

    console.log(sortedArray);
    return sortedArray
}




// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

const strongPokemons = (array) => {

    const strongPoke = array
    
    .filter((poke) => {
        return poke.weaknesses.length <= 1
    })

    .map((poke) => {
        return poke.name
    })

    .slice(0, 15)

    console.log(strongPoke)
    return strongPoke;
}