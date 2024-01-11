import React from "react"

export default function NewJoke(props) {
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
            <br />
        </div>
    )
}