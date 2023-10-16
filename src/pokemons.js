import pokemons from './data' 


const log = console.log;

// Iteration 1: All Fire Pokemons- get the pokemonay of all Fire type pokemons

function getAllFirePokemons(pokemon){
    
    let FirePokemons = pokemon.filter((val) => {
        return val.type.includes('Fire');
    });
    return FirePokemons;
}
const firepokemon = getAllFirePokemons(pokemons)


// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

function shortestPokemon(pokemon){

    if(pokemon.length==0){
       return 0
    }

    let newpokemonay = pokemon.map((val)=>{
        return {
            name:val.name,
            height: parseFloat(val.height)
        }
    })
    let newSortedpokemon = newpokemonay.sort((a,b)=>{

        if(a.height < b.height){
            return -1;
        }else if(a.height > b.height){
            return 1;
        }else{
            return 0;
        }  
    })

    const shortestheight = newSortedpokemon[0].name;
    return shortestheight;

}
const newa = shortestPokemon(pokemons)


// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemon){

    if(pokemon.length==0){
        return 0
     }

    let total = pokemon.reduce((sum,val)=>{

        return sum = sum + val.candy_count
     },0)
    
    let avgCandy_count = Number((total/pokemon.length).toFixed(2)) 

    return avgCandy_count
}
const avg = candyAverage(pokemons)
log(avg)

// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGroundPokeImg(pokemon){

    if(pokemon.length==0){
        return 0
    }
    
    let images = [];
    
    let GroundPokemons = pokemon.filter((val)=>{
        return val.type.includes('Ground');
    })
    for(let i=0; i<10; i++){
        images.push(GroundPokemons[0].img);
    }
    return images;    
      
}
const GroundPokemon = getAllFirePokemons(pokemons)


// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemon){

    if(pokemon.length==0){
        return 0
    }

    let pikachuWeight;

        let Pikachu = pokemon.filter((val)=>{
            return val.name==='Pikachu'
        });

        pikachuWeight = parseFloat(Pikachu[0].weight);
        
        let heavyPokemons = pokemon.filter((val)=>{
            return parseFloat(val.weight) > pikachuWeight;
        })

        let heavierPokemonNames = heavyPokemons.map((val)=>{
            return val.name;
        })
        return heavierPokemonNames;

}


// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemon){
    
    if(pokemon.length==0){
        return 0
    }

    let thepokemon = [...pokemon];

    thepokemon.sort((a, b)=>{

        if(a.name < b.name){
            return -1;
        }else if(a.name > a.name){
            return 1;
        }else{
            return 0;
        }
    });
    let pokemonNames = thepokemon.map((val)=>{
        return val.name;

    }).slice(0,20)
    
    return pokemonNames;
    
}

// Iteration 7: Strong pokemons - return an pokemonay of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemon){

    if(pokemon.length==0){
        return 0
    }

    let pokemonsWeakness = pokemon.filter((val)=>{
        return val.weaknesses.length === 1;
    })

    let pokemonNames = pokemonsWeakness.map((val)=>{
        return val.name;       
    })

    if(pokemonNames.length >= 15){
        return pokemonNames.slice(0,15);
    }
    else{
        return pokemonNames
    }
   
}

