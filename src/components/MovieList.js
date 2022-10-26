import React from "react";

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
    return (
        <>
            {props.movies.map((movie, index)=> 
            <div key={index} className="image-container d-flex justify-content-start m-3 movie-poster">
                <img src={movie.Poster} alt= "movie"></img>
                <div onClick={()=> props.handleFavoritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                    <FavoriteComponent/>
                </div>
            </div>)}
        </>
    )
}

export default MovieList