import React from "react";
import moment from "moment";

const Card = ({ img, name, date, detail }) => {
    return (
        <div className="cards">
            <div className="banner__img">
                <a href="javacript:;">
                    <img src={img} alt="" width="100%" />
                </a>
            </div>
            <div className="card__content__div">
                <div className="name__div">
                    <a href="javascript:;">{name}</a>
                    <p>{moment(date).format("MMMM DD, YYYY")}</p>
                </div>
                <div className="details__div">
                    <p>{detail}</p>
                </div>
                <div className="relating__div">
                    <ul>
                        <li className="profile">
                            <i className="fa fa-clock-o" />
                        </li>
                        <li className="profile">
                            <i className="fa fa-download" />
                        </li>
                        <li className="profile">
                            <i className="fa fa-play" />
                        </li>
                        <li className="profile">
                            <i className="fa fa-ellipsis-h" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
