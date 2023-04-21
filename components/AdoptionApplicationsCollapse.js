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
            <div className="collapse-content grid grid-cols-2">
                <div>
                    <div className="grid">
                        <div className="personDetails">
                            <div>Date Submitted:</div>
                            <div>{firstName + "" + lastName}</div>
                            <div>{address}</div>
                            <div>{postCode}</div>
                            <div>{county}</div>
                            <div>{area}</div>
                            <div>{email}</div>
                            <div>{phone}</div>
                        </div>
                        <div className="dogDetails col-start-2">
                            <div>{dogName}</div>
                            <div>{sex}</div>
                            <div>{age}</div>
                            <div>{colour}</div>
                            <div>{registeredOwner}</div>
                            <div>{neutered}</div>
                            <div>{size}</div>
                            <div>{type}</div>
                            <div>{vaccinated}</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}