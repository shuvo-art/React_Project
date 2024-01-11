import React from "react";
import star from "../images/Star 1.png"
import ellipse from "../images/Ellipse 6.png"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if(props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
              {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.img} alt="athlete" className="card--image" />
            <div className="card--stats">
                <span><img src={star} className="card--star"/></span>
                <span>{props.rating}</span>
                <span className="grey"> <img src={ellipse} /> ({props.reviewCount})</span>
                <span className="grey"> {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price} /</b> person</p>
        </div>
    )
}
 
