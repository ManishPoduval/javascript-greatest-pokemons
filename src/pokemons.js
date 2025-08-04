// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
	const type = pokemons.filter((pokemon) => pokemon.type.includes("Fire"));

	return type;
}
getAllFirePokemons(pokemons);

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
	if (pokemons.length === 0) return 0;

	const shortestPok = pokemons.reduce((acc, pokemon) => {
		if (parseFloat(pokemon.height) < parseFloat(acc.height)) {
			return pokemon;
		}
		return acc;
	}, pokemons[0]);

	return shortestPok.name;
}
shortestPokemon(pokemons);

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
	if (pokemons.length === 0) return 0;

	const sumCandy = pokemons.reduce((acc, pokemon) => {
		if (typeof pokemon.candy_count === "number") {
			return acc + pokemon.candy_count;
		} else {
			return acc;
		}
	}, 0);

	const averageCandy = sumCandy / pokemons.length;
	return parseFloat(averageCandy.toFixed(2));
}
candyAverage(pokemons);

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
	if (pokemons.length === 0) return 0;

	const filterGroundType = pokemons.filter((pokemon) => pokemon.type.includes("Ground"));

	const first10 = filterGroundType.slice(0, 10);

	const imgs = first10.map((pokemon) => pokemon.img);

	return imgs;
}
getGroundPokeImg(pokemons);

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
	if (pokemons.length === 0) return 0;

    let namesHeavierThanPikachu = []

    const pikachu = pokemons.find(pokemon => pokemon.name === 'Pikachu')
	const pikachuWeight = parseFloat(pikachu.weight)

    pokemons.forEach(pokemon => {
        if (parseFloat(pokemon.weight) > pikachuWeight) {
            namesHeavierThanPikachu.push(pokemon.name)
        }
    })

    return namesHeavierThanPikachu
}
getHeavyPokemons(pokemons);

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
	if (pokemons.length === 0) return []

	const pokemonsName = pokemons.map(pokemon => pokemon.name).sort().slice(0, 20)

	return pokemonsName
}
orderAlphabetically(pokemons)


// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
function strongPokemons(pokemons) {
	if (pokemons.length === 0) return []

	const strongest = pokemons.filter(pokemon => {
		return pokemon.weaknesses.length === 1
	}).slice(0, 15).map(pokemon => pokemon.name)

	return strongest

}
strongPokemons(pokemons)