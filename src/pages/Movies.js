import React, { Component } from "react";
import axios from "axios";

import Card from "../components/Card";

class Movies extends Component {
    state = {
        error: false,
        hasMore: true,
        isLoading: false,
        page: 1,
        movies: []
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.fetchData(this.state.page);
    }
    handleScroll = () => {
        const { error, isLoading, hasMore } = this.state;
        if (error || isLoading || !hasMore) return;
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            this.fetchData(this.state.page);
        }
    };

    fetchData = page => {
        this.setState({ isLoading: true }, () => {
            setTimeout(() => {
                axios
                    .get("https://api.themoviedb.org/3/discover/movie", {
                        params: {
                            api_key: "736ab1497c26677617edf2950b83820d",
                            sort_by: "popularity.desc",
                            page: page
                        }
                    })
                    .then(res => {
                        this.setState({
                            hasMore: this.state.page < res.data.total_pages,
                            isLoading: false,
                            page: page + 1,
                            movies: this.state.movies.concat(res.data.results)
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        this.setState({
                            error: err.message,
                            isLoading: false
                        });
                    });
            }, 1500);
        });
    };

    render() {
        const { error, hasMore, isLoading, movies } = this.state;
        return (
            <section className="itme__card__container">
                {movies.map((movie, index) => {
                    return (
                        <Card
                            key={index}
                            img={
                                "https://image.tmdb.org/t/p/w500" +
                                movie.poster_path
                            }
                            name={movie.title}
                            date={movie.release_date}
                            detail={movie.overview}
                        />
                    );
                })}
                {error && <div style={{ color: "#900" }}>{error}</div>}
                {isLoading && <div className="loader">Loading ...</div>}
                {!hasMore && <div>You did it! You reached the end!</div>}
            </section>
        );
    }
}

export default Movies;
