import React from "react";
import img1 from "./../img/1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <h3 className="ml-5">Popular Movies</h3>
            <div className="card-deck ml-5 my-3">
                <div className="card mb-3" id="cards_box">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <Link to="/moviesPage">
                                <img src={img1} alt="..." />
                            </Link>
                        </div>
                        <div className="col-md-7">
                            <div className="">
                                <h5 className="card-title my-1">Card title</h5>
                                <h6 class="card-subtitle pb-1  text-muted">
                                    Card subtitle
                                </h6>
                                <p className="card-text py-3">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" id="cards_box">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={img1} alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="">
                                <h5 className="card-title my-1">Card title</h5>
                                <h6 class="card-subtitle pb-1  text-muted">
                                    Card subtitle
                                </h6>
                                <p className="card-text py-3">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-deck ml-5 my-3">
                <div className="card mb-3" id="cards_box">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={img1} alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="">
                                <h5 className="card-title my-1">Card title</h5>
                                <h6 class="card-subtitle pb-1  text-muted">
                                    Card subtitle
                                </h6>
                                <p className="card-text py-3">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" id="cards_box">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={img1} alt="..." />
                        </div>
                        <div className="col-md-7">
                            <div className="">
                                <h5 className="card-title my-1">Card title</h5>
                                <h6 class="card-subtitle pb-1  text-muted">
                                    Card subtitle
                                </h6>
                                <p className="card-text py-3">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
