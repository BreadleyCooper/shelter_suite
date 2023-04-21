import { Timestamp } from "firebase/firestore";
import React from "react";

export default function AdoptionApplicationsCollapse(props) {

    const {applicantName, dogName, firstName, lastName, address, postCode, area, county, email, phone, sex, age, colour, registeredOwner, neutered, size, type, vaccinated, timeStamp} = props

    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex justify-around">
                <span>Applicant: {applicantName}</span>
                <span>Dog: {dogName}</span>
                <span>{timeStamp}</span>
            </div>
            <div className="collapse-content grid grid-cols- justify-around min-w-full">
                
                    
                <div className="personDetails p-4 ">
                    <h2 className="text-secondary-content py-5 font-bold text-lg ">Person Details</h2>
                    <div>Date Submitted:</div>
                    <div>{firstName + " " + lastName}</div>
                    <div>{address}</div>
                    <div>{postCode}</div>
                    <div>{county}</div>
                    <div>{area}</div>
                    <div>{email}</div>
                    <div>{phone}</div>
                </div>
                <div className=" dogDetails col-start-2 p-4">
                    <h2 className="text-secondary-content py-5 font-bold text-lg ">Dog Details</h2>
                    <div>Name: {dogName}</div>
                    <div>Sex: {sex}</div>
                    <div>Age: {age}</div>
                    <div>Colour: {colour}</div>
                    <div>Is the person the registered owner?: {registeredOwner}</div>
                    <div>Neuetered: {neutered}</div>
                    <div>Size: {size}</div>
                    <div>Type: {type}</div>
                    <div>Reported as Vaccinated: {vaccinated}</div>
                </div>
                <div className="col-start-3 p-4 flex flex-col justify-around">
                    <button className="btn btn-primary ">Full Information</button>
                    <button className="btn btn-success bg-lime-500">Accept</button>
                    <button className="btn btn-error bg-red-500">Reject</button>
                </div>
                    
            </div>
            </div>
        </div>
    )
}