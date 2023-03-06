import './App.css';
import RandomJoke from './Components/joke_component/joke';
import SearchBar from './Components/SearchBar/search';

function App() {
  const { joke, data } = RandomJoke(
    'https://icanhazdadjoke.com/',{header:{Accept:"application/json"}}
  );

  if (joke) return <p>Joke</p>;

  return (

    <div className="App">
      <RandomJoke/>
      <SearchBar/>
        <div>
          <h1>Data Fetched.</h1>
          {JSON.stringify(data)}
        </div>
    </div>
  );
}

export default App;
