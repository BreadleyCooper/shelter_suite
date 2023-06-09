import React from "react"
import {doc, getDoc} from "firebase/firestore"
import { useEffect } from "react"
import { db } from "@/firebaseConfig"

export default function FullInformation(props) {
    
    const {currentApplicationID, setShowFullInfo, setAcceptBtnClicked, setRejectBtnClicked} = props
    const [fullDetails, setFullDetails] = React.useState({})

    useEffect(() => {
        console.log("Current ApplicationID => ",currentApplicationID)
        const fetchApplication = async () => {
          try {
            // Set a reference to the Application Document.
            const applicationRef = doc(db, "adoptionApplications", currentApplicationID);
            
            const applicationSnap = await getDoc(applicationRef);
            setFullDetails(applicationSnap.data())
          } catch (e) {
            console.log(e);
          }
          
        };
        fetchApplication();
        // update the request when the selected area changes
      }, []);

    const handleAccept = () => {
         setAcceptBtnClicked(true)
    }

    const handleReject = () => {
        setRejectBtnClicked(true)
    }

    return (
        <div className="grid py-4 max-w-7xl justify-center">
            <div className="grid gap-8">
                <div className="bg-white mx-12 p-8">
                    {/* Header  */}
                    <div className="flex justify-around">
                        <h2 className="text-secondary-content py-5 font-bold text-lg ">Applcation Details</h2>
                        <h2 className="text-secondary-content py-5 font-bold text-lg ">Applcation Date: {fullDetails.date}</h2>
                        <button className="btn" onClick={()=>setShowFullInfo(false)}>Close</button>
                    </div>  

                    {/* Body - Person details and dog details container */}
                    <div>
                        {/* Person Details */}
                        <div>
                            <h2 className="text-secondary-content py-5 font-bold text-lg ">Person Details</h2>
                            <p><b>Name: </b>{fullDetails.firstName + " " + fullDetails.lastName}</p>
                            <p><b>Address: </b>{fullDetails.address + ", " + fullDetails.postCode}</p>
                            <p><b>Phone Number: </b>{fullDetails.phone}</p>
                            <p><b>Email: </b>{fullDetails.email}</p>
                            <p className="my-2"><b>Registered Owner: </b>{fullDetails.registeredOwner}</p>
                            <p><b>If not the registered owner, details: </b></p>
                            <br></br>
                            <p>{fullDetails.notRegisteredOwnerDetails}</p>
                        </div>
                        {/* Reason for rehoming */}
                        <div>
                            <p className="mt-6"><b>Reason for rehoming: </b></p>
                            <br></br>
                            <p>{fullDetails.reasonForRehome}</p>
                        </div>
                    </div>

                </div>
                <div className="bg-white mx-12 p-8">
                    {/* Dog Details */}
                        <h2 className="text-secondary-content py-5 font-bold text-lg ">Dog Details</h2>
                        <div className={"grid grid-cols-3 gap-2" }>
                            <p><b>Dog Name: </b>{fullDetails.dogName}</p>
                            <p><b>Sex: </b>{fullDetails.sex}</p>
                            <p><b>Age: </b>{fullDetails.age}</p>
                            <p><b>Colour: </b>{fullDetails.colour}</p>
                            <p><b>Neutered: </b>{fullDetails.neutered}</p>
                            <p><b>Size: </b>{fullDetails.size}</p>
                            <p><b>Type: </b>{fullDetails.type}</p>
                            <p><b>Microchip Number: </b>{fullDetails.microchip}</p>
                            <p><b>KC Name: </b>{fullDetails.kcName}</p>
                            <p><b>KC Number: </b>{fullDetails.kcNumber}</p>
                            <p><b>Breeder Contacted: </b>{fullDetails.breederContacted}</p>
                            </div>
                        <div className="grid grid-cols-3 gap-2" >
                            <h2 className="text-secondary-content py-5 font-bold text-lg">Health Details</h2>
                            <p className="row-start-2"><b>Vaccinated: </b>{fullDetails.vaccinated}</p>
                            <p className="row-start-2"><b>PRA Status: </b>{fullDetails.praStatus}</p>
                            <p className="row-start-2"><b>Lafora Status: </b>{fullDetails.laforaStatus}</p>
                            <p className="row-start-2"><b>Existing Health Conditions: </b>{fullDetails.existingHealthConditions}</p>
                            <p className="row-start-3 col-start-1 col-end-4"><b>Health Details: </b>{fullDetails.healthDetails}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <h2 className="text-secondary-content py-5 font-bold text-lg">More Details</h2>
                            <p className="row-start-2"><b>House Trained: </b>{fullDetails.houseTrained}</p>
                            <p className="row-start-2"><b>Travel Sick: </b>{fullDetails.travelSick}</p>
                            <p className="row-start-2"><b>Used to Cats: </b>{fullDetails.usedToCats}</p>
                            <p className="row-start-3"><b>Used to a Garden: </b>{fullDetails.usedToGarden}</p>
                            <p className="row-start-3"><b>Used to Children: </b>{fullDetails.usedToChildren}</p>
                            <p className="row-start-3"><b>used to Other Dogs: </b>{fullDetails.usedToOtherDogs}</p>
                            <p className="row-start-4"><b>Guards Food/Toys: </b>{fullDetails.guardsFoodOrToys}</p>
                            <p className="row-start-4"><b>Digs Holes: </b>{fullDetails.digsHoles}</p>
                            <p className="row-start-4"><b>Noisy: </b>{fullDetails.noisy}</p>
                            <p className="row-start-5"><b>Walks on Lead: </b>{fullDetails.walksOnLead}</p>
                            <p className="row-start-5"><b>Comes When Called: </b>{fullDetails.comesWhenCalled}</p>
                            <p className="row-start-5"><b>Crate Trained: </b>{fullDetails.crateTrained}</p>
                            <p className="row-start-6"><b>Escapte Artist: </b>{fullDetails.escapeArtist}</p>
                            <p className="row-start-6"><b>Used to Other Pets: </b>{fullDetails.otherPets}</p>
                            <p className="row-start-7"><b>Ever Bitten: </b>{fullDetails.everBitten}</p>
                            <p className="row-start-8 col-start-1 col-end-4"><b>If yes, details: </b>{fullDetails.bittenDetails}</p>
                            <p className="row-start-10"><b>Afraid of Anything: </b>{fullDetails.afraid}</p>
                            <p className="row-start-11 col-start-1 col-end-4"><b>If yes, details: </b>{fullDetails.afraidDetails}</p>
                            <p className="row-start-12"><b>Permission to contact vet: </b>{fullDetails.vetPermission}</p>
                            <p className="row-start-13 col-start-1 col-end-4"><b>Other Details: </b>{fullDetails.otherDetails}</p>
                        </div>
                        {/* Footer */}
                        <div className="flex flex-row-reverse">
                            <button className="btn m-6" onClick={()=>setShowFullInfo(false) }>Close</button>
                            {fullDetails.applicationStatus === "pending" && (
                                <>
                                    <button className="btn btn-success bg-lime-500 m-6" onClick={()=>handleAccept(true)}>Accept</button>
                                    <button className="btn btn-error bg-red-500 m-6" onClick={()=>handleReject  (true)}>Reject</button>
                                </>
                            )}
                            {fullDetails.applicationStatus === "accepted" && (
                                <>
                                    <button className="btn btn-error bg-red-500 m-6" onClick={()=>handleReject  (true)}>Reject</button>
                                </>
                            )}
                            {fullDetails.applicationStatus === "rejected" && (
                                <>
                                    <button className="btn btn-success bg-lime-500 m-6" onClick={()=>handleAccept(true)}>Accept</button>
                                </>
                            )}
                        </div>
                    </div>
                 </div>  

             </div>
    )

}