import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import Header from "./components/Header";
import {MoviesProvider} from "./context/MovieContext";

ReactDOM.render(
    <HashRouter basename='/'>
        <MoviesProvider>
            <Header />
            <App />
        </MoviesProvider>
    </HashRouter>,
    document.getElementById('root'));
