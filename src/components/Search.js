import React from "react";

const Search = () => {
    return (
        <header className="search__div">
            <div className="search__content">
                <i className="fa fa-search" aria-hidden="true" />
                <form>
                    <input
                        type="search"
                        placeholder="Search for a movie, tv show, person"
                    />
                </form>
            </div>
        </header>
    );
};

export default Search;
