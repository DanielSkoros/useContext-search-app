import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {MoviesContext} from "../../components/context/MovieContext";

const Home = () => {
    const appContext = useContext(MoviesContext);
    const { movies } = appContext;
    return (
        <main>
            
        </main>
    );
};

export default Home;
