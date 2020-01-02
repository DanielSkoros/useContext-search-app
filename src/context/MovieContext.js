import React, { useState, createContext } from 'react';
import axios from 'axios/index';
import {retrieveFromLocal} from "../storage/localStorage";
export const MOVIE_API_URL = "https://www.omdbapi.com/?";
export const API_KEY = '&apikey=ba34f40c';

const MoviesContext = createContext();

const MoviesProvider = (props) => {

    const [movies, setMovies] = useState('');
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [refetch, setRefetch] = useState(false);
    const [fav, setFav] = useState(retrieveFromLocal('favMovies') || []);
    const [searchedFav, setSearchedFav] = useState([]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
            setLoading(true);
            axios.get(`${MOVIE_API_URL}s=${search}${API_KEY}`)
                .then(res => {
                    setMovies(res.data.Search);
                    setLoading(false);
                    setSearch('');
                });
    };

    const handleFavouritesSearch = (e) => {
        e.preventDefault();
        const query = search.toLowerCase();
        const searched = fav.filter(el => el.Title.toLowerCase().includes(query));
        setSearchedFav(searched);
        setSearch('');
    };

    return (
        <MoviesContext.Provider value={{
            loading,
            setLoading,
            search,
            movies,
            fav,
            setFav,
            searchedFav,
            refetch, setRefetch,
            handleSearchChange,
            handleSubmit,
            handleFavouritesSearch,
        }}>
            {props.children}
        </MoviesContext.Provider>
    );
};

export { MoviesProvider, MoviesContext };

