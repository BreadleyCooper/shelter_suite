import React from "react";

export default function Filter(props) {

    const {selectedArea, setSelectedArea} = props

    return (
        <div className="filterContainer flex justify-evenly my-6">
            <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)} className="select max-w-xs flex flex-inital" defaultValue={""}>
                <option disabled value="">Area</option>
                <option value={"London"}>London</option>
                <option value={"South East"}>South East</option>
                <option value={"East of England"}>East of England</option>
                <option value={"South West"}>South West</option>
                <option value={"Midlands"}>Midlands</option>
                <option value={"North West"}>North West</option>
                <option value={"North East"}>North East</option>
                <option value={"Scotland"}>Scotland</option>
                <option value={"Wales"}>Wales</option>
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