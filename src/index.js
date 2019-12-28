import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import {MoviesProvider} from "./context/MovieContext";

ReactDOM.render(
    <BrowserRouter>
        <MoviesProvider>
            <Header />
            <App />
        </MoviesProvider>
    </BrowserRouter>,
    document.getElementById('root'));
