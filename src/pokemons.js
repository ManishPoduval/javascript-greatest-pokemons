import pokemons from './data'
// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(Array) {
    const d = Array.filter((pok)=> pok.type.includes("Fire"))
    return d;
}
let res = pokemons.filter(getAllFirePokemons);
console.log(res);
//-----------------------------------------------------------------------------------------------------------------------------------------------------

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(ar){                                
    return ar.reduce((x,y) => {
      if(x== undefined || y.length< x.length) {
        x = y;
      }
      return x;
    } , undefined);                                 
}
let al= shortestPokemon(pokemon);
console.log(al);
//-------------------------------------------------------------------------------------------------------------------------------------------

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons 

function candyAverage(da)
{
    if(da.length==0)
       return 0;
    let avgr=0;
    avgr=da.reduce((acc,pok)=> {
        if(pok.hasOwnProperty('candy_count'))
           return acc+pok.candy_count
        else 
           return acc 
    },0)/da.length
    return parseFloat((avgr).toFixed(2))
}
//----------------------------------------------------------------------------------------------------------------------------------------

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(arra)
{
    if(arra.length==0)
      return 0
    const groundPoks=arra.filter((pok)=> pok.type.includes('Ground'))
    const im=[]
    const array2=groundPoks.map((pok)=> pok.im).slice(0,10)
    return array2
}
//--------------------------------------------------------------------------------------------------------------------------------------------
// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(datt)
{
    if(datt.length==0)
       return 0
    let pi = 0
    datt.forEach((pok)=>{
        if(pok.name=="Pikachu")
        {
            pi=pok.weight 
            return;
        }
    })
    pi=parseFloat(pi.slice(0,pi.indexOf(' ')))
    const h=datt.filter((pok)=> {
        let wei=pok.weight
        wg=parseFloat(wei.slice(0,wei.indexOf(' ')))
        if(wei>pi)
           return true
    })
    return h.map((pok)=> pok.name)
}
//----------------------------------------------------------------------------------------------------------------------------------------------

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(ar5)
{
    const cl=JSON.parse(JSON.stringify(ar5)).sort((x,y)=> {
        if(x.name>y.name)
          return 1
        else 
          return -1
    });
    return cl.map((pok)=> pok.name).slice(0,20)
}
//---------------------------------------------------------------------------------------------------------------------------------------------

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(arr6)
{
    const w=arr6.filter((pok)=> {
        if(pok.hasOwnProperty('weaknesses'))
          return pok.weaknesses.length==1
    })
    return w.map((pok)=> pok.name).slice(0,15)
}
//----------------------------------------------------------------------------------------------------------------------------------------
