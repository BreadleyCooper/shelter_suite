import React from "react";

export default function Filter() {
    return (
        <div className="filterContainer flex justify-evenly my-6">
            <select className="select max-w-xs flex flex-inital" defaultValue={""}>
                <option disabled value="">Area</option>
                <option>London</option>
                <option>South East</option>
                <option>East of England</option>
                <option>South West</option>
                <option>Midlands</option>
                <option>North West</option>
                <option>North East</option>
                <option>Scotland</option>
                <option>Wales</option>
            </select>

            <select className="select max-w-xs flex flex-inital" defaultValue={""}>
                <option disabled value={""}>Status</option>
                <option>New</option>
                <option>Closed</option>

            </select>

            <select className="select min-w-fit max-w-xs flex flex-inital" defaultValue={""}>
                <option disabled value={""}>Filter</option>
                <option>Example</option>
                <option>Example</option>
                <option>Example</option>
                <option>Example</option>
                <option>Example</option>
                <option>Example</option>
            </select>
        </div>
    )
}