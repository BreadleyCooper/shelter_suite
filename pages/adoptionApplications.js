import React, { useState } from "react"
import Header from "@/components/Header"
import AdoptionApplicationsCollapse from "@/components/AdoptionApplicationsCollapse"
import FullInformation from "@/components/FullInformation"
import Filter from "@/components/Filter"
import Modal from "@/components/Modal"
import { app, db } from "@/firebaseConfig"
import { useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Router from "next/router"

import { collection, doc, getDocs , query, where} from "firebase/firestore"
import LoadingScreen from "@/components/LoadingScreen"



export default function AdoptionApplications(props) {

    const [applications, setApplications] = React.useState([])
    const [selectedArea, setSelectedArea] = React.useState("")
    
    const [showFullInfo, setShowFullInfo] = React.useState(false)

    const [acceptBtnClicked, setAcceptBtnClicked] = React.useState(false)
    const [rejectBtnClicked, setRejectBtnClicked] = React.useState(false)

    const[currentApplicationID, setCurrentApplicationID] = React.useState("")

    const [loading, setLoading] = React.useState(true)
    const [authenticated, setAuthenticated] = React.useState(false)    
 
    useEffect(() => {
      const auth = getAuth(app)
      const unsubscribe = onAuthStateChanged(auth, (user)=> {
        if(user) {
          setAuthenticated(true)
        } else {
          Router.push("/signIn")
        }
        setLoading(false)
      })
      return () => unsubscribe
    }, [])
    
    useEffect(()=> 
        {
        const fetchApplications = async () => {
            

            try {
                // Set a reference to the adoptionApplications collection.
                const adoptionApplicationsRef = collection(db, "adoptionApplications")
                // create a query to only match the area selected
                const q = query(adoptionApplicationsRef, where ("area", "==", selectedArea))

                const querySnapshot = await getDocs(q);
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
        // update the request when the selected area changes
    }, [selectedArea])

    if (loading) {
      return <LoadingScreen />
    }
    if (!authenticated) {
      return null
    }


    if(acceptBtnClicked) {
      return (
        <div className="flex justify-center">
          <Modal currentApplicationID={currentApplicationID}
                  setAcceptBtnClicked={setAcceptBtnClicked}
                  acceptBtnClicked={acceptBtnClicked}  
                  />
        </div>
      )
    }

    if(rejectBtnClicked) {
      return (
        <div className="flex justify-center">
          <Modal currentApplicationID={currentApplicationID}
                  setRejectBtnClicked={setRejectBtnClicked}
                  rejectBtnClicked={rejectBtnClicked}
                  />
        </div>
      )
    }
       
    if (showFullInfo) {
      return (
        <div className="flex justify-center">
          <FullInformation currentApplicationID={currentApplicationID}
                            setShowFullInfo={setShowFullInfo}
                            setAcceptBtnClicked={setAcceptBtnClicked}
                            setRejectBtnClicked={setRejectBtnClicked}/>
        </div>
      )
    }

    return (
        <div>
          <Header />

          <Filter selectedArea={selectedArea} setSelectedArea={setSelectedArea} />

          {/* If the no selected area, return choose an area, else return the selected area filtered applications */}
          {selectedArea === "" ? (
            <div className="text-center my-16 text-accent text-4xl font-medium">Select an Area to start</div>
          ) : (
            <>
              <div className="divider before:bg-accent after:bg-accent text-accent">New Applications</div>
              {/* if no applications, show message, else render the list. */}
              {applications.length === 0 && (<div className="text-center my-16 text-accent text-4xl font-medium">No New Applications in {selectedArea}</div>)}
              
              {/* Render the list of applications */}
              {applications.map((application) => (
                <AdoptionApplicationsCollapse 
                  key={application.id}
                  id={application.id}
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
                  date={application.date}
                  setShowFullInfo={setShowFullInfo}
                  setCurrentApplicationID={setCurrentApplicationID}
                  setAcceptBtnClicked={setAcceptBtnClicked}
                  setRejectBtnClicked={setRejectBtnClicked}
                />
              ))}
              <div className="divider before:bg-accent after:bg-accent text-accent">Closed Applications</div>
            </>
          )}
        </div>
      );
}