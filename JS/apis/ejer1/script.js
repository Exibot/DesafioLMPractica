async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data);
    
}
getRandomUser();

async function getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const data = await response.json();
    console.log(data);
}
getPokemon();