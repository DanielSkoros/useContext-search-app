import React, { useContext } from 'react';
import {MoviesContext} from "../../context/MovieContext";
import { withRouter } from "react-router";
import './index.css';

const Search = ({location}) => {
    const appContext = useContext(MoviesContext);
    const { handleSubmit, handleSearchChange, search, handleFavouritesSearch  } = appContext;

    return (
        <form className="search demo-2"
              onSubmit={location.pathname === '/'
                  ? e => handleSubmit(e)
                  : e => handleFavouritesSearch(e)}>
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

export default withRouter(Search);
