import React from "react"

export default function Contact(props) {
    return (
        <div className="card">
            <img src={props.img} alt="contact" className="contact-card--image" />
            <h3>{props.name}</h3>
            <div className="info-group">
               <b><i class="fi fi-sr-phone-call"></i></b>
                <p> {props.phone}</p>
            </div>
            <div className="info-group">
                <b><i class="fi fi-sr-envelope"></i></b>
                <p> {props.email}</p>
            </div>
        </div>
    )
}