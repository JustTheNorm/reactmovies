import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import MovieList from "./components/MovieList";
import MovieListHeader from "./components/MovieListHeader";
import SearchBox from "./components/SearchBox";
import AddFavorites from "./components/AddFavorites";
import RemoveFavorites from "./components/RemoveFavorites";

function App() {
  // state to hold the movie data
  const [movie, setMovie] = useState(null);

  const [movies, setMovies] = useState([]);

  const [favorites, setFavorites] = useState([]);

  const [searchValue, setSearchValue] = useState(``);

  // Function to fetch movie data using async await
  const getMovie = async (searchTerm) => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=658ac9d6&t=${searchTerm}`
      );
      const data = await res.json();
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?apikey=658ac9d6&s=${searchValue}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(()=>{
    const movieFavorites = JSON.parse(
      localStorage.getItem(`react-movie-app-favorites`)
    );

    setFavorites(movieFavorites)
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem(`react-movie-app-favorites`, JSON.stringify(items))
  }

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList)
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
      )
      setFavorites(newFavoriteList)
      saveToLocalStorage(newFavoriteList)
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="N.P Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          favoriteComponent={AddFavorites}
          handleFavoritesClick={addFavoriteMovie}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Favorites" />
      </div>
      <div className="row">
        <MovieList
          movies={favorites}
          handleFavoritesClick={removeFavoriteMovie}
          favoriteComponent={RemoveFavorites}
        />
      </div>
      {/* <h1>React Movies</h1> */}
      {/* <Form movieSearch={getMovie} /> */}
      {/* {movie && <MovieDisplay movie={movie}/>} */}
    </div>
  );
}

export default App;
