import React, { useState, createContext } from 'react';
import axios from 'axios';
const MOVIE_API_URL = "https://www.omdbapi.com/?";
const API_KEY = '&apikey=ba34f40c';

const MoviesContext = createContext();

const MoviesProvider = (props) => {

    const [movies, setMovies] = useState('');
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    const fetchMovies = async (event, query) => {
        try {
            const res = await axios.get(`${MOVIE_API_URL}t=${query}${API_KEY}`);
            const data = await res.data;
            setMovies(data);
            setLoading(false);
            console.log(movies);
        } catch(error) {
            console.log(error)
        }
    };

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
            fetchMovies,
            handleSubmit,
        }}>
            {props.children}
        </MoviesContext.Provider>
    );
};

export { MoviesProvider, MoviesContext };

