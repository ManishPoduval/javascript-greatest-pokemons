// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
let getAllFirePokemons = (array) =>
  array.filter((pokemon) => pokemon.type.includes("Fire"));

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

let shortestPokemon = (array) => {
  if (array.length === 0) {
    return 0;
  }
  array.sort((a, b) => {
    return +a.height.match(/\d.\d\d/) - +b.height.match(/\d.\d\d/);
  });
  return array[0].name;
};

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

let candyAverage = (array) => {
  return array.reduce((acc, elem) => {
    if ("candy_count" in elem) {
      acc += +(elem.candy_count / array.length).toFixed(2);
    }
    return acc;
  }, 0);
};

// Iteration 4: images for the first 10 `Ground`  Pokemons

let getGroundPokeImg = (array) => {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((acc, elem) => {
    if (acc.length < 10 && elem.type.includes("Ground")) {
      acc.push(elem.img);
    }
    return acc;
  }, []);
};

// Iteration 5: Find all pokemon names heavier than Pikachu

let getHeavyPokemons = (array) => {
  if (array.length === 0) {
    return 0;
  }
  let pikachuWeight = array.reduce((acc, elem) => {
    if (elem.name === "Pikachu") {
      acc += +elem.weight.match(/\d*.\d*/);
    }
    return acc;
  }, 0);
  let newArray = JSON.parse(JSON.stringify(array));
  let heavierPokemon = newArray.filter((pokemon) => {
    return +pokemon.weight.match(/\d*.\d*/) > pikachuWeight;
  });
  return heavierPokemon.map((pokemon) => pokemon.name);
};

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

let orderAlphabetically = (array) => {
  let newArray = JSON.parse(JSON.stringify(array));
  return newArray
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 20)
    .map((pokemon) => pokemon.name);
};

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them

let strongPokemons = (array) => {
  return array.reduce((acc, elem) => {
    if (acc.length < 15 && elem.weaknesses.length === 1) {
      acc.push(elem.name);
    }
    return acc;
  }, []);
};
