import React from "react"
import Header from "@/components/Header"
import AdoptionApplicationsCollapse from "@/components/AdoptionApplicationsCollapse"
import Filter from "@/components/Filter"
import { app, db } from "@/firebaseConfig"
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
                            firstName={application.firstName} 
                            lastName={application.lastName} 
                            address={application.address}
                            postCode={application.postCode} 
                            area={application.area} 
                            county={application.county} 
                            email={application.email} 
                            phone={application.phone}
                            sex={application.sex}
                            age={application.age}
                            colour={application.colour}
                            registeredOwner={application.registeredOwner}
                            neutered={application.neutered}
                            size={application.size}
                            type={application.type}
                            vaccinated={application.vaccinated}
                            // timeStamp = {application.timeStamp}                        
                        />
            })}

            
            <div className="divider before:bg-accent after:bg-accent text-accent">Closed Applications</div>

        </div>
    )
}