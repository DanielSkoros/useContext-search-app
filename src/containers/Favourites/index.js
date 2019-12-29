import React, {useContext} from 'react';
import Movie from "../../components/Movie";
import Loader from "../../components/Loading";
import axios from 'axios';
import '../Home/index.css';
import {MoviesContext, API_KEY, MOVIE_API_URL, } from "../../context/MovieContext";

const Favourites = ()  => {
    const appContext = useContext(MoviesContext);
    const { setLoading, loading, fav, setFav, refetch } = appContext;


    const renderBeginScreen = () => (
        <div className={'begin__container'}>
            <div className="begin__image"></div>
        </div>
    );

    const renderResults = () => (
        <div className={'movies__container --flex'}>
            {fav.map((movie, i) => (
                <Movie movie={movie} key={i}/>
            ))}
        </div>
    );

    const renderLoader = () => (
        <div className={'loader__container'}>
            <Loader />
        </div>
    );

    return (
        <main>
            {loading ? renderLoader() : null}
            {fav && fav.length > 0 && !loading > 0 ? renderResults() : renderBeginScreen()}
        </main>
    );
};

export default Favourites;
