
function dataPokemon(data) {

    const response = {
        id: data.id, 
        name: data.name,
        ability: data.abilities[0].ability.name,
        abilityUrl: data.abilities[0].ability.Url,
        imageUrl: data.sprites.front_default,
    }
    return response
}

export default dataPokemon