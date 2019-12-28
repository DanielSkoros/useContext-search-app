import React, { useState, createContext } from 'react';
import axios from 'axios/index';
const MOVIE_API_URL = "https://www.omdbapi.com/?";
const API_KEY = '&apikey=ba34f40c';

const MoviesContext = createContext();

const MoviesProvider = (props) => {

    const [movies, setMovies] = useState('');
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');


    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
            setLoading(true);
            const res = axios.get(`${MOVIE_API_URL}s=${search}${API_KEY}`)
                .then(res => {
                    setMovies(res.data.Search);
                    setLoading(false);
                });
    };

    return (
        <MoviesContext.Provider value={{
            loading,
            search,
            movies,
            handleSearchChange,
            handleSubmit,
        }}>
            {props.children}
        </MoviesContext.Provider>
    );
};

export { MoviesProvider, MoviesContext };

