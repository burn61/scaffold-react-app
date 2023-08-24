/*  
    In index.js window.$maxResource c'è il max risorse nel DB
    viene aggiornato in fetchManyPoke
*/

//import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SinglePokemon from "./components/SinglePokemon";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<SinglePokemon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
