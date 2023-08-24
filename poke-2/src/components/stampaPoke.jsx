import getData from "./getdata.js";

const URL_BASE = 'https://pokeapi.co/api/v2/';
const single_pokemon = 'pokemon/ditto'

async function getPoke(url) {
  const pokemon = await getData(url);
  // && ritorna o il primo false o l'ultimo true
  //console.log(x.ok && x.data);
  if (pokemon.ok) {
    //const img = pokemon.data.sprites.front_default;
    const img = 'OKK';
    return img
  }
}

const url = URL_BASE + single_pokemon
return (
    <>
    
        <h4>
            {stampaPoke}
        </h4>
    
    </>
)
