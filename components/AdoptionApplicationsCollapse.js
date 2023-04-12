import React from "react";

export default function AdoptionApplicationsCollapse() {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                <span>Applicant Name</span>
                <span>Application Date</span>
            </div>
            <div className="collapse-content">
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
            </div>
        </div>
    )
}