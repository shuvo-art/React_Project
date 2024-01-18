import React from "react"
import airbnb from "../images/airbnb 1.png"

export default function Navbar(props) {

    return (
            <nav className={props.isToggled ? 'dark-mode-navbar' : 'light-mode'}>
                <img src={ airbnb } alt="airbnb logo" className="navbar_logo"/>

                <div className="toggle-container">
                    <button className={props.isToggled ? 'toggle-button active' : 'toggle-button'} onClick={props.onToggle}>
                    Dark
                    </button>
                    <button className={!props.isToggled ? 'toggle-button active' : 'toggle-button'} onClick={props.onToggle}>
                    Light
                    </button>
                </div>
            </nav>
    )
}