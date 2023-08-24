import { MDBContainer } from "mdb-react-ui-kit";
import PokemonGallery from "./pokemonGallery";
import SearchPokemon from "./SearchPokemon";

function Home() {
  const limit = 6;
  const offset = 0;

  return (
    <>
      <MDBContainer className="mt-2">
        <SearchPokemon />
        <hr />
        <PokemonGallery limit={limit} offset={offset} />
      </MDBContainer>
    </>
  );
}
export default Home;
