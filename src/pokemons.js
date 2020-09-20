/*  Iteration 1: Get the array of all Fire type pokemons.  */
const getAllFirePokemons = (pokedex) => {
  const onlyFire = JSON.parse(JSON.stringify(pokedex));
  return onlyFire.filter((pokemon) => pokemon.type.includes("Fire"));
};

/*  Iteration 2: Find the `name` of the shortest pokemon.  */
const shortestPokemon = (pokedex) => {
  return pokedex.sort((poke_a, poke_b) => {
    if (poke_a.height > poke_b.height) {
      return 1;
    } else if (poke_a.height < poke_b.height) {
      return -1;
    } else {
      return 0;
    }
  })[0].name;
};

/*  Iteration 3: Average of `candy_count` for all the pokemons.  */
const candyAverage = (pokedex) => {
  const avg = pokedex.reduce((acc, pokemon, _, src) => {
    return acc + (pokemon.candy_count || 0) / src.length;
  }, 0);
  return Math.round(100 * avg) / 100;
};

/*  Iteration 4: Images for the first 10 `Ground` pokemons.  */
const getGroundPokeImg = (pokedex) => {
  const groundImages = JSON.parse(JSON.stringify(pokedex));
  return groundImages
    .filter((pokemon) => {
      return pokemon.type.includes("Ground");
    })
    .map((pokemon) => {
      return pokemon.img;
    })
    .slice(0, 10);
};

/*  Iteration 5: Find all pokemon names heavier than Pikachu.  */
const getHeavyPokemons = (pokedex) => {};

/*  Iteration 6: Order by name and print the first 20 names.  */
const orderAlphabetically = (pokedex) => {
  const newPokedex = JSON.parse(JSON.stringify(pokedex));

  const sortedNames = newPokedex
    .map((pokemon) => {
      return pokemon.name;
    })
    .sort();

  if (sortedNames.length > 21) {
    return sortedNames.slice(0, 20);
  } else {
    return sortedNames;
  }
};

/*  Iteration 7: Return an array of first 15 pokemons, that have just one `weakness`.
    If there are less that 15, return all of them.  */
const strongPokemons = (pokedex) => {
  return pokedex
    .filter((pokemon) => {
      return pokemon["weaknesses"].length === 1;
    })
    .map((pokemon) => {
      return pokemon.name;
    })
    .slice(0, 15);
};
