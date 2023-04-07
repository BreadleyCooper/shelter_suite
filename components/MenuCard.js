import React from "react";

export default function MenuCard(props) {

   const {cardTitle, cardDescription, buttonText} = props
    
    return(
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{cardTitle}</h2>
            <p>{cardDescription}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary" >{buttonText}</button>
        </div>
    </div>
    </div>
    )
}
