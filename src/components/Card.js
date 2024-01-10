import React from "react";
import star from "../images/Star 1.png"
import ellipse from "../images/Ellipse 6.png"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.img} alt="athlete" className="card--image" />
            <div className="card--stats">
                <span><img src={star} className="card--star"/></span>
                <span>{props.rating}</span>
                <span className="grey"> <img src={ellipse} /> ({props.reviewCount})</span>
                <span className="grey"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price} /</b> person</p>
        </div>
    )
}
 
