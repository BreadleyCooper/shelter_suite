import React from "react";

export default function AdoptionApplicationsCollapse() {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                <span>Applicant Name</span>
                <span>Dog Name</span>
                <span>Application Date</span>
            </div>
            <div className="collapse-content">
                <div>
                    Grid with Person and application details
                </div>
            </div>
            </div>
        </div>
    )
}