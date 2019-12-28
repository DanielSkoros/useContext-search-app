import React from 'react';
import {Link} from "react-router-dom";
import './index.css'
import Search from "../Search";
const Header = () => {
    return (
       <header>
            <nav>
                <ul>
                    <li className="nav__item">
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/favourites'>
                            Favourites
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Search />
                    </li>
                </ul>
            </nav>
       </header>
    );
};

export default Header;
