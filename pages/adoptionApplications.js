import React from "react"
import Header from "@/components/Header"
import AdoptionApplicationsCollapse from "@/components/AdoptionApplicationsCollapse"
import Filter from "@/components/Filter"

export default function AdoptionApplications() {

    return (
        <div>
            <Header />
            
            <Filter />
            <div className="divider before:bg-accent after:bg-accent text-accent">New Applications</div>
            <AdoptionApplicationsCollapse />
            <div className="divider before:bg-accent after:bg-accent text-accent">Closed Applications</div>

        </div>
    )
}