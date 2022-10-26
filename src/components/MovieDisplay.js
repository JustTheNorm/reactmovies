import react from "react"

const MovieDisplay = (props) => {
    const {movie} = props;
    console.log(movie)
    return (
        <div>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title}/>
            <h3>{movie.Genre}</h3>
            <h3>IMDB Raiting: {movie.imdbRating}</h3>
            <h3>Released: {movie.Year}</h3>
        </div>
    )
}

export default MovieDisplay