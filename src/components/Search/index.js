import React, { useContext } from 'react';
import {MoviesContext} from "../context/MovieContext";

const Search = () => {
    const appContext = useContext(MoviesContext);
    const { handleSubmit, handleSearchChange, search } = appContext;

    return (
        <form className="search" onSubmit={e => handleSubmit(e)}>
            <input
                onChange={handleSearchChange}
                type="text"
                id="search"
                placeholder="Titles, tags etc..."
                name="search"
                value={search}
            />
            <input type="submit" value="SEARCH" />
        </form>
    );
};

export default Search;
