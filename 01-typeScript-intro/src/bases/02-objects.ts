export const pokemonsIDs = [1, 2, 8, 3, 4, 5, 6, 9];

pokemonsIDs.push(80);
pokemonsIDs.sort();

console.log(pokemonsIDs);

export const pikachu: Pokemon = {
    id: 1,
    name: 'pikachu',
    age: 30
}

interface Pokemon{
    id: number,
    name: string
    age?: number
}