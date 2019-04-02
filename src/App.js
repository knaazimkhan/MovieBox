import React, { Component } from "react";
// import logo from './logo.svg';
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Search from "./components/Search";
import Bollywood from "./pages/Bollywood";
import Dubbed from "./pages/Dubbed";
import Hollywood from "./pages/Hollywood";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Home from "./pages/Home";

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Header />
                    <Search />
                    <Route path="/" exact component={Home} />
                    <Route path="/movies" component={Movies} />
                    <Route path="/tv-shows" component={TvShows} />
                    <Route path="/dubbed" component={Dubbed} />
                    <Route path="/bollywood" component={Bollywood} />
                    <Route path="/hollywood" component={Hollywood} />
                </BrowserRouter>
            </>
        );
    }
}

export default App;
