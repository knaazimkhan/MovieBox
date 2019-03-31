import React from "react";

const Header = () => {
    return (
        <header className="page__header">
            <div className="brand__name">
                <h1>Movie</h1>
            </div>
            <div className="menu__div">
                <ul>
                    <li>
                        <a href="javascript">Movies</a>
                    </li>
                    <li>
                        <a href="javascript">TV Show</a>
                    </li>
                    <li>
                        <a href="javascript">Dubbed</a>
                    </li>
                    <li>
                        <a href="javascript">Bollywood</a>
                    </li>
                    <li>
                        <a href="javascript">Hollywood</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
