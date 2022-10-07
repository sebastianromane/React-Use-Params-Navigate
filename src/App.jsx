import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './layouts/NavBar';

import Home from './views/Home';
import SearchPokemon from './views/SearchPokemon';
import DetailsPokemon from './views/DetailsPokemon';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/pokemones" element={ <SearchPokemon />}/>
        <Route path="/pokemones/:name" element={ <DetailsPokemon />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;