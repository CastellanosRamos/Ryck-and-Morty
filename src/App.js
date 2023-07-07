import imageRyckandMorty from './img/rick-morty.png'
import './App.css';
import { useState } from 'react';
import Character from './Components/Character';


function App() {

  const [characters, setCharacters] = useState(null);


  const reqAPI = async () => {
     const api = await fetch('https://rickandmortyapi.com/api/character');
     const characterApi = await api.json();

     setCharacters(characterApi.results);
  }




  return (
    <div className="App">
      <header className="App-header">
          <h1 className='tittle'>Rick & Morty</h1>
          {characters ? (
             <Character  characters = {characters}/>
          ): (
            <>
            <img src={imageRyckandMorty} alt='Rick&Morty' className='img-home' />
            <button onClick={reqAPI}  className='btn-search'>Buscar Personajes</button>
            </>
          )}
      </header>
    </div>
  );
}

export default App;
