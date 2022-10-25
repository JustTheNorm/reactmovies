import './App.css';
import {useState} from "react"
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
// state to hold the movie data
const [movie, setMovie] = useState(null)

// Function to fetch movie data
const getMovie = async (searchTerm) => {
  const res = fetch (`https://www.omdbapi.com/?apikey=658ac9d6&t=${searchTerm}`)
  const data = await res.json()
  console.log(data)
  setMovie(data)
  
}

  return (
    <div className="App">
      <h1>React Movies</h1>
      <Form movieSearch={getMovie}/>
      <MovieDisplay />
    </div>
  );
}

export default App;
