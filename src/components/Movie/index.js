import React, {useContext} from "react";
import './index.css';
import { retrieveFromLocal, updateLocal } from "../../storage/localStorage";
import {MoviesContext} from "../../context/MovieContext";

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
    const appContext = useContext(MoviesContext);
    const { refetch, setRefetch, setFav } = appContext;
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    const addToFavourites = (id) => {
        let favourites = [];
        if (localStorage.getItem('favMovies')) {
            favourites = retrieveFromLocal('favMovies');
        }
        const isInFavourites = favourites.find(el => el.imdbID === id.imdbID);
        if(isInFavourites){
            favourites = favourites.filter(el => el.imdbID !== id.imdbID);
        }else {
            favourites.push(id);
        }
        updateLocal('favMovies', favourites);
        setFav(favourites);
        setRefetch(!refetch)
    };

    return (
        <div className="container" style={{
            backgroundImage: `url(${poster})`
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

                    <button onClick={() => addToFavourites(movie)}>
                        <i className="fas fa-heart movie"></i>
                        ADD TO FAVOURITES
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Movie;
