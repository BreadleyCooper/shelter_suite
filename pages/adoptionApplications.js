import React from "react"
import Header from "@/components/Header"
import AdoptionApplicationsCollapse from "@/components/AdoptionApplicationsCollapse"
import Filter from "@/components/Filter"
import { db } from "@/firebaseConfig"
import { useEffect } from "react"

import { collection, doc, getDocs } from "firebase/firestore"


export default function AdoptionApplications() {

    const [applications, setApplications] = React.useState([])
        

    
    useEffect(()=> 
        {
        const fetchApplications = async () => {
            
    
            try {
                const querySnapshot = await getDocs(collection(db, "adoptionApplications"));
                const newData = [];
                querySnapshot.forEach((doc) => {
                    newData.push({...doc.data(), id: doc.id});
                });
                setApplications(newData);
            } catch(e) {
                console.log(e);
            }
        };
        fetchApplications();
        
    }, [])
       

    return (
        <div>
            <Header />
            
            <Filter />
            <div className="divider before:bg-accent after:bg-accent text-accent">New Applications</div>

            {
            applications.map((application) => {
                return <AdoptionApplicationsCollapse 
                            key={application.id}
                            applicantName={application.firstName + " " + application.lastName} 
                            dogName={application.dogName}                             
                        />
            })}

            
            <div className="divider before:bg-accent after:bg-accent text-accent">Closed Applications</div>

        </div>
    )
}