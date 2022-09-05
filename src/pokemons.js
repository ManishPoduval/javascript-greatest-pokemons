// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
  return pokemons.filter((ele) => {
    return ele.type.includes("Fire");
  });
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
// "0.71 m"
// ["0.71", "m"]
// "0.71"
// 0.71
function shortestPokemon(pokemons) {
  if (pokemons.length == 0) {
    return 0;
  }
  let alwaysShortest = 999;
  let result = "";
  pokemons.forEach((ele) => {
    let height = Number(ele.height.split(" ")[0]);
    if (height < alwaysShortest) {
      alwaysShortest = height;
      result = ele.name;
    }
  });
  return result;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
  if (pokemons.length == 0) {
    return 0;
  }
  let sumCandy = pokemons.reduce((sum, ele) => {
    if (ele.candy_count) {
      return (sum += ele.candy_count);
    } else {
      return sum;
    }
  }, 0);
  return Number((sumCandy / pokemons.length).toFixed(2));
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
  if (pokemons.length == 0) {
    return 0;
  }
  let groundPoke = pokemons.filter((ele) => {
    return ele.type.includes("Ground");
  });
  let ans = groundPoke.slice(0, 10);
  return ans.map((ele) => {
    return ele.img;
  });
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
  if (pokemons.length === 0) return 0;

  const pikachu = pokemons.find((pokemon) => pokemon.name === "Pikachu");
  const pikachuWeight = Number(pikachu.weight.split(" ")[0]);

  const filteredPokemons = pokemons.filter(
    (pokemon) => Number(pokemon.weight.split(" ")[0]) > pikachuWeight
  );

  return filteredPokemons.map((pokemon) => pokemon.name);
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
  let sortArr = pokemons.slice().sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else return 0;
  });
  return sortArr.slice(0, 20).map((ele) => {
    return ele.name;
  });
}
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
function strongPokemons(pokemons) {
  // filter an array with pokemons with just 1 weakness
  let filteredArr = pokemons.filter((ele) => {
    return ele.weaknesses.length === 1;
  });
  console.log(filteredArr);
  // grab and display the first 15 pokemons names from the above array
  return filteredArr.slice(0, 15).map((ele) => {
    return ele.name;
  });
}
