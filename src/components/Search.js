import React from "react";

const Search = () => {
    return (
        <section className="search__div">
            <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                    <span className="input-group-text purple lighten-3">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
                <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
            </div>
        </section>
    );
};

export default Search;
