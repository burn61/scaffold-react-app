import { useState, useEffect } from "react";
import { MDBCol } from "mdb-react-ui-kit";

import URL_BASE from './baseUrl';
import Carta from './carta';
import dataFetch from "./dataFetch";

function FetchManyPoke(props) {
  const { limit, offset } = props;

  const url = URL_BASE + `?limit=${limit}&offset=${offset}`
  const [data, setData] = useState([]);

  const setDataPokemon = (data) => {
    window.$maxResource = data.count;
    let pokemon = data.results;
    if (pokemon) {
      pokemon = pokemon.map((poke)=> poke.url)
      setData(pokemon);
    }
  }

  useEffect(() => {
    if (url) dataFetch(url, setDataPokemon)
  }, [url]);

  let x = data.map((dato, i)=> (<MDBCol key={i+""} md="4"><Carta id="" key={i+""} url={dato} /></MDBCol>))

  return (<> {x} </>);
}

export default FetchManyPoke;
