import React from "react";
import star from "../images/Star 1.png"
import ellipse from "../images/Ellipse 6.png"

export default function Card(props) {
    console.log(props)
    let badgeText
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else if(props.data.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
              {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.data.coverImg} alt="athlete" className="card--image" />
            <div className="card--stats">
                <span><img src={star} className="card--star"/></span>
                <span>{props.data.status.rating}</span>
                <span className="grey"> <img src={ellipse} /> ({props.data.status.reviewCount})</span>
                <span className="grey"> {props.data.location}</span>
            </div>
            <p>{props.data.title}</p>
            <p><b>From ${props.data.price} /</b> person</p>
        </div>
    )
}
 
