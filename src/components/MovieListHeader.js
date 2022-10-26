import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieListHeader = (props, {className=``}) =>{
    return (
        <div className={`col ${className}`}>
            <h1>{props.heading}</h1>
        </div>
    )
}

export default MovieListHeader;