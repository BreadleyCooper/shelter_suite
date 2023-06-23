import React from "react";

export default function MatchesDogCard() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="card w-80 bg-base-100 shadow-xl mb-6">
                <div className="card-body">
                    <h2 className="card-title">Animal Name</h2>
                    <p>Summary of needs</p>
                <div className="flex card-actions ">
                    <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg m-1">Full Details</button>
                    <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg m-1">Next Animal</button>
                </div>
                </div>
            </div>
        </div>
    )
}