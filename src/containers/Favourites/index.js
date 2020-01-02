import React, {useContext} from 'react';
import Movie from "../../components/Movie";
import Loader from "../../components/Loading";
import '../Home/index.css';
import {MoviesContext } from "../../context/MovieContext";

const Favourites = ()  => {
    const appContext = useContext(MoviesContext);
    const { loading, fav, searchedFav } = appContext;


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

    const renderSearchResults = () => (
        <div className={'movies__container --flex'}>
            {searchedFav.map((movie, i) => (
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
            {fav && fav.length > 0 && !loading > 0
                ? searchedFav && searchedFav.length > 0 ?
                    renderSearchResults() : renderResults()
                : renderBeginScreen()}
        </main>
    );
};

export default Favourites;
