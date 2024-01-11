import React from "react";

export default function NewCard(props) {
    return (
        <div className="newcontainer">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={props.data.imageUrl} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <h5 className="card-title">{props.data.title}</h5>
                    <span><b>{props.data.startDate} to {props.data.endDate}</b></span>
                    <p className="card-text">{props.data.description}</p>
                </div>
                </div>
            </div>
        </div>
    )
}