import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="page__header">
            <div className="brand__name">
                <Link to="/">
                    <h1>MovieBox</h1>
                </Link>
            </div>
            <div className="menu__div">
                <ul>
                    <li>
                        <NavLink to="/movies">Movies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tv-shows">TV Shows</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dubbed">Dubbed</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bollywood">Bollywood</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hollywood">Hollywood</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
