import { useState, useEffect, useRef } from 'react';

import { MDBRow, MDBInput } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom';

import URL_BASE from './baseUrl';
import objectIsEmpty from './objectIsEmpty';
import dataFetch from './dataFetch';


function SearchPokemon() {

  const inputRef = useRef('');
  const [data, setData] = useState({});
  const [url, setUrl] = useState('');
  const response = useRef({});
  const navigate = useNavigate();
  
  const detectEnterKey = e => {
    const value = e.key;
    if (value === 'Enter') handleOnClick('')
  }

const handleOnClick = (e) =>{
  const searchString = (inputRef.current.value).trim().toLowerCase();
  inputRef.current.value = '';
  if (searchString === '') return;
  setUrl(URL_BASE+searchString);
}

useEffect(() => {
  if (url) response.current = dataFetch(url, setData);
}, [url]);

useEffect(() => {
  if (!objectIsEmpty(data)) {
    navigate('/pokemon', { state: { pokemon: data } })
  }
},[data, navigate])

  return (
    <>
        <MDBRow>
          <div className="d-md-flex align-items-center">
            <span className='mx-2'>Search Pokemon</span>
            <div className='w-25'>
              <MDBInput label='Digita nome o id del pokemon' id='typeText' type='text' ref={inputRef} onKeyDown={detectEnterKey} />
            </div>
            <span className='ms-3 w-auto'>
              <MDBInput type="button" value="Cerca" onClick={(e)=>handleOnClick(e)}/>
            </span>
          </div>
        </MDBRow>
    </>
  )
}

export default SearchPokemon