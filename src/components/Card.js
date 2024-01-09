import React from "react"
import athlete from "../images/image 12.png"
import star from "../images/Star 1.png"
import ellipse from "../images/Ellipse 6.png"

export default function Card() {
    return (
        <div className="card">
            <img src={athlete} alt="athlete" className="card--image" />
            <div className="card--stats">
                <span><img src={star} className="card--star"/></span>
                <span>5.0</span>
                <span className="grey"> <img src={ellipse} /> (6)</span>
                <span className="grey"> USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136 /</b> person</p>
        </div>
    )
}