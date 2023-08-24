//import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit';
import { Link, useLocation } from 'react-router-dom';

import capitalize from './capitalize';

import SearchPokemon from './SearchPokemon';

function SinglePokemon() {
  const {pokemon} = (useLocation()).state;
  return (
    <>
    <MDBContainer className="mt-2 text-center">
      <SearchPokemon />
      <hr />
      <h1> {capitalize(pokemon.name)}</h1>
      <h3><Link to='/'> Home </Link></h3>
    </MDBContainer>
  </>
  )
}

export default SinglePokemon