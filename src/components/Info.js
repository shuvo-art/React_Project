import React from "react"
import shuvo from "../images/shuvo_300x300.jpg"

export default function Info() {
    return (
    <div className="card" style={{ width: '18rem' }}>
        <img src= {shuvo} className="card-img-top" alt="Shuvo" />
        <div className="card-body">
            <h5 className="card-title">Mehedi Hassan</h5>
            <h3 className="card-sub-title">Frontend Developer</h3>
            <p className="card-text">
            Frontend developers craft engaging user experiences through code and design.
            </p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
            <div className="social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
    )
}