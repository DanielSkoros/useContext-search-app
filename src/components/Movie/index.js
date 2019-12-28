import React from "react";
import './index.css';
const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className="container" style={{
            backgroundImage: `url(${movie.Poster})`
        }}>
            <div className="overlay">
                <div className="items"></div>
                <div className="items head">
                    <p>{movie.Title}</p>
                    <hr />
                </div>
                <div className="items price">
                    <p className="new">{movie.Year}</p>
                </div>
                <div className="items cart">
                    <span>ADD TO FAVOURITES</span>
                </div>
            </div>
        </div>
    );
};


export default Movie;
