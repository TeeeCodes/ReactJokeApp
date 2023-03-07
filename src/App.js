import './App.css';
import RandomJoke from './Components/joke_component/joke';
import SearchBar from './Components/SearchBar/search';
import JokeImg from './Components/joke_Img/joke_Img';

function App() {
  
  fetch('https://icanhazdadjoke.com/search',
  {header:{Accept:"application/json"}})

  return (

    <div className="App">
      <RandomJoke/>
      <SearchBar/>
      <JokeImg/>
    </div>
  );
}

export default App;
