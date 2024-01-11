import React from "react"

export default function Contact(props) {
    return (
        <div className="card">
            <img src={props.img} alt="contact" className="card--image" />
            <h3>{props.name}</h3>
            <div className="card--stats">
               <span>
                 <b><i class="fi fi-sr-phone-call"></i></b> {props.phone}
               </span>
            </div>
            <div className="card--stats">
                <span>
                    <b><i class="fi fi-sr-envelope"></i></b> {props.email}
                </span>
            </div>
        </div>
    )
}