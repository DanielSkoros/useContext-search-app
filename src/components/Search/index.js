import React, { useState } from 'react';

const Search = ({search}) => {
    const {searchValue, setSearchValue} = useState('');

    const handleInput = event => {
      setSearchValue(event.target.value);
    };

    const resetInput = () => {
        setSearchValue('');
    };

    const handleSubmit = event => {
        event.preventDefault();
        search(searchValue);
        resetInput();
    };

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleInput}
                type="text"
            />
            <input onClick={handleSubmit} type="submit" value="SEARCH" />
        </form>
    );
};

export default Search;
