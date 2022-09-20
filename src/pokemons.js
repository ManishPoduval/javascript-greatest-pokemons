
// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(arr){
    let allFirePokemons = arr.filter((eachElement) => {
        return eachElement.type.indexOf('Fire') != -1;
    });
    return allFirePokemons;
}
// console.log(getAllFirePokemons(pokemons))
// Iteration-1----------------------complete




// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(arr){
    if(arr.length > 0){
        let nameHeightArr = arr.map((eachElement)=>{
            return {name:eachElement.name, height: parseFloat(eachElement.height)}
        })
        let nameHeightArrSorted = nameHeightArr.sort((elem1,elem2)=>{
            if(elem1.height < elem2.height){
                return -1;
            }else if(elem1.height > elem2.height){
                return 1;
            }else{
                return 0;
            }        
        });
        return nameHeightArrSorted[0].name;
    }else {
        return 0;
    }    
}
// console.log(shortestPokemon(pokemons))
// Iteration-2-----------------------complete




// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(arr){
    if(arr.length > 0){
        let total = arr.reduce((sum, eachElement)=>{
            if(eachElement.candy_count){
                sum = sum+eachElement.candy_count;
            }else{
                sum = sum + 0;
            }
            return sum;
        },0);
        return Number((total/arr.length).toFixed(2))
    }else {
        return 0;
    }    
}
// console.log(candyAverage(pokemons))
// Iteration-3-----------------------complete




// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(arr){
    
    let images = [];
    let count = 0;
    if(arr.length > 0){
    let allGroundPokemons = arr.filter((eachElement)=>{
        return eachElement.type.indexOf("Ground") != -1;
    })
    for(let i=0; i<10; i++){
        images.push(allGroundPokemons[0].img);
    }
    return images;    
    }else{
        return 0;
    }    
}
// console.log(getGroundPokeImg(pokemons))
// Iteration-4-----------------------complete




// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(arr){
    let pikachuWeight;
    if(arr.length > 0){
        let Pikachu = arr.filter((eachElement)=>{
            return eachElement.name==='Pikachu'
        });
        pikachuWeight = parseFloat(Pikachu[0].weight);
        
        let heavyPokemons = arr.filter((eachElement)=>{
            return parseFloat(eachElement.weight) > pikachuWeight;
        })
        let heavierPokemonNames = heavyPokemons.map((eachElement)=>{
            return eachElement.name;
        })
        return heavierPokemonNames;

    }else{
        return 0;
    }   
}
// console.log(getHeavyPokemons(pokemons))
// Iteration-5-----------------------complete




// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(arr){
    let theArr = JSON.parse(JSON.stringify(arr));
    theArr.sort((elem1, elem2)=>{
        if(elem1.name < elem2.name){
            return -1;
        }else if(elem1.name > elem2.name){
            return 1;
        }else{
            return 0;
        }
    });
    let pokemonNames = theArr.map((eachElement)=>{
        return eachElement.name;
    })
    if(pokemonNames.length >= 20){
        return pokemonNames.slice(0,20);
    }else{
        return pokemonNames;
    }
}
// console.log(orderAlphabetically(pokemons))
// Iteration-6-----------------------complete



// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

function strongPokemons(arr){
    let pokemonsSingleWeakness = arr.filter((eachElement)=>{
        return eachElement.weaknesses.length === 1;
    })
    let pokemonNames = pokemonsSingleWeakness.map((eachElement)=>{
        return eachElement.name;       
    })
    return pokemonNames.slice(0,15);
}
// console.log(strongPokemons(pokemons))
// Iteration-7-----------------------complete


