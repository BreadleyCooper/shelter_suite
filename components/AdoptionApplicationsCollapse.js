import { Timestamp } from "firebase/firestore";
import React from "react";

export default function AdoptionApplicationsCollapse(props) {

    const {applicantName, dogName, firstName, lastName, address, postCode, county, email, phone, sex, age, colour, registeredOwner, neutered, size, type, vaccinated, date} = props

    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5 mx-5">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium flex justify-around">
                <span>Applicant: {applicantName}</span>
                <span>Dog: {dogName}</span>
                <span>Date: {date}</span>
            </div>
            <div className="collapse-content grid grid-cols- justify-around min-w-full">
                
                    
                <div className="personDetails p-4 ">
                    <h2 className="text-secondary-content py-5 font-bold text-lg ">Person Details</h2>
                    <div><b>Date Submitted: </b></div>
                    <div><b>Name: </b>{firstName + " " + lastName}</div>
                    <div> <b>Address:</b></div>
                    <div>{address}</div>
                    <div>{postCode}</div>
                    <div>{county}</div>
                    <div><b>Contact Details: </b></div>
                    <div>{email}</div>
                    <div>{phone}</div>
                </div>
                <div className=" dogDetails col-start-2 p-4">
                    <h2 className="text-secondary-content py-5 font-bold text-lg ">Dog Details</h2>
                    <div><b>Name:</b> {dogName}</div>
                    <div><b>Sex: </b>{sex}</div>
                    <div><b>Age: </b> {age}</div>
                    <div><b>Colour: </b>{colour}</div>
                    <div><b>Register owner?: </b>{registeredOwner}</div>
                    <div><b>Neutered: </b>{neutered}</div>
                    <div><b>Size: </b>{size}</div>
                    <div><b>Type: </b>{type}</div>
                    <div><b>Vaccinated: </b>{vaccinated}</div>
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