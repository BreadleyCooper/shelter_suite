import React from "react"
import Header from "@/components/Header"
import AdoptionApplicationsCollapse from "@/components/AdoptionApplicationsCollapse"
import Filter from "@/components/Filter"
import { db } from "@/firebaseConfig"
import { useEffect } from "react"

import { collection, getDocs } from "firebase/firestore"


export default function AdoptionApplications() {

    const [applications, SetApplications] = React.useState([])

    const fetchApplications = async () => {

        try { 
            const querySnapshot = await getDocs(collection(db, "adoptionApplications"))
            querySnapshot.forEach((doc) => {SetApplications([...applications,doc.data()])})
        }catch(e) {console.log(e)}
    }

    useEffect(()=> {
        fetchApplications()
    })
       

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