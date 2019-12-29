import React, { useContext } from 'react';
import {MoviesContext} from "../../context/MovieContext";
import './index.css';

const Search = () => {
    const appContext = useContext(MoviesContext);
    const { handleSubmit, handleSearchChange, search } = appContext;

    return (
        <form className="search demo-2" onSubmit={e => handleSubmit(e)}>
            <input
                onChange={handleSearchChange}
                type="text"
                id="search"
                placeholder="Titles, tags etc..."
                name="search"
                value={search}
            />
        </form>
    );
};

export default Search;
