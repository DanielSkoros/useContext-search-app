import React, {useContext} from 'react';
import {MoviesContext} from "../../context/MovieContext";
import Loader from "../../components/Loading";
import './index.css';
import Movie from "../../components/Movie";
const Home = () => {
    const appContext = useContext(MoviesContext);
    const { movies, loading } = appContext;

    const renderBeginScreen = () => (
        <div className={'begin__container'}>
            <div className="begin__image"></div>
        </div>
    );

    const renderResults = () => (
      <div className={'movies__container --flex'}>
          {console.log(movies)}
          {movies.map(movie => (
              <Movie movie={movie} key={movie.imdbID}/>
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
            {movies && movies.length && !loading > 0 ? renderResults() : renderBeginScreen()}
        </main>
    );
};

export default Home;
