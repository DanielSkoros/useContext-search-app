import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
const MoviesProvider = () => {
    const MoviesContext = createContext();
    const MOVIE_API_URL = "https://www.omdbapi.com/";
    const API_KEY = '&apikey=ba34f40c';
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    const fetchMovies = async (query) => {
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

    return (
        <div>

        </div>
    );
};

export default MoviesProvider;

