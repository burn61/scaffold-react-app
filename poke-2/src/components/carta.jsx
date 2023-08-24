import { useState, useEffect, useRef } from "react";

import CartaLayout from "./cartaLayout";

import dataPokemon from "./dataPokemon";
import URL_BASE from './baseUrl';
import dataFetch from "./dataFetch";
import objectIsEmpty from "./objectIsEmpty";


export default function Carta(props) {
  const { id, url:pokeUrl } = props;

  const response = useRef({});
  const [data, setData] = useState("");
  const url = pokeUrl ? pokeUrl : URL_BASE + id;

  const setDataPokemon = (data) => {
    setData(dataPokemon(data))
  }

  useEffect(() => {
    if (url) response.current = dataFetch(url, setDataPokemon)
  }, [url]);

  if (!objectIsEmpty(data)) {
    return <CartaLayout id={data.id} pokemon={data}/>;
  } else if (data === null) {
      const errore = `Errore caricamento dati ${response.current.statusText}`
      return <>{errore}</>
  }
}