import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieListHeader = (props) =>{
    return (
        <div className="col">
            <h1>{props.heading}</h1>
        </div>
    )
}

export default MovieListHeader;