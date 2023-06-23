import React from "react";

export default function MatchesDogCard() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>Match 1 of 3</p>
                    <h2 className="card-title">Person Name</h2>
                    <p>Match Rating: 100/100</p>
                <div className="flex card-actions ">
                    <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg m-1">Full Details</button>
                    <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg m-1">Next Person</button>
                    <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg m-1">Start Match</button>
                </div>
                </div>
            </div>
        </div>
    )
}