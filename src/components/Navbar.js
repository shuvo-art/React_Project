import React from "react"
import airbnb from "../images/airbnb 1.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={ airbnb } alt="airbnb logo" className="navbar_logo"/>
        </nav>
    )
}