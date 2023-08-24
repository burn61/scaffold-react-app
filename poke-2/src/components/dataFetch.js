/*
    Ottiene dati da una API restfull
    url = indirizzo API
    handleData = funzione di assegnazione dei dati restituiti dall'API
    Ritorna response e data
    Se data === null è presente un errore
*/
import validResponse from "./validResponse";

async function dataFetch (url, handleData=null) {
    let data = null;
    const response = await fetch(url);
    if (validResponse(response.status)) {
        data = await response.json();
        handleData && handleData(data) 
    }
    return {response: response}
}

export default dataFetch