import React from "react";
import img1 from "./../img/1.jpg";

const Home = () => {
    return <div className="container" id="cards_box">
    <h3>Popular Movies</h3>
<div className="card-deck">
    <div className="card ml-4">
      <div className="col-5 p-0">
        <a href="javascript:;">
            <img src={img1} />
        </a>
      </div>
      <div className="col-6 p-0">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card ml-4">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
    </div>
    ;
};

export default Home;
