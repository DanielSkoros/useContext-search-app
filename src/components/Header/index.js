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
                           <div className="circle">
                               <i className="fas fa-home"></i>
                           </div>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to='/favourites'>
                           <div className="circle">
                               <i className="fas fa-heart"></i>
                           </div>
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
