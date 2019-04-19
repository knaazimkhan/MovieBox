import React, { Component } from "react";
import { Link } from "react-router-dom";
class Movies extends Component {
    render() {
        return (
            <section className="">
                <div className="row bg-img m-0 p-5">
                    <div className="col-md-4 poster">
                        <Link to="#">
                            <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg" />
                        </Link>
                    </div>
                    <div className="col-md-8 p-4 details-box">
                        <div className="name-box py-2">
                            <a href="#">
                                <h2>Shazam!</h2>
                            </a>
                            <span>(2019)</span>
                        </div>

                        <ul className="mt-2 mb-2">
                            <li className="menu-item">
                                <a href="#">
                                    <i className="fa fa-bars" />
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <i className="fa fa-heart" />
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <i className="fa fa-bookmark" />
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">
                                    <i className="fa fa-star" />
                                </a>
                            </li>
                            <li className="menu-text">
                                <a href="#" className="mt-4">
                                    <i className="fa fa-play mx-1" />
                                    Play Trailer
                                </a>
                            </li>
                        </ul>

                        <div className="info-box">
                            <h3 className="my-1">Overview</h3>
                            <p className="mb-4">
                                A boy is given the ability to become an adult
                                superhero in times of need with a single magic
                                word.
                            </p>
                            <h3>Featured Crew</h3>
                            <ul>
                                <li className="mx-5 my-3">
                                    <h4>Mike Mignola</h4>
                                    <p>Characters, Screenplay</p>
                                </li>
                                <li className="mx-5 my-3">
                                    <h4>Mike Mignola</h4>
                                    <p>Characters, Screenplay</p>
                                </li>
                                <li className="mx-5 my-3">
                                    <h4>Mike Mignola</h4>
                                    <p>Characters, Screenplay</p>
                                </li>
                                <li className="mx-5 my-3">
                                    <h4>Mike Mignola</h4>
                                    <p>Characters, Screenplay</p>
                                </li>
                                <li className="mx-5 my-3">
                                    <h4>Mike Mignola</h4>
                                    <p>Characters, Screenplay</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Movies;
