import React from "react"
import {doc, getDoc} from "firebase/firestore"
import { useEffect } from "react"
import { db } from "@/firebaseConfig"

export default function FullInformation(props) {
    
    const {currentApplicationID, setShowFullInfo} = props
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

    return (
        <div className="grid">
            <div className="grid gap-8">
                <div className="bg-white mx-12 py-8">
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
                            <p className="my-6"><b>Reason for rehoming: </b></p>
                            <br></br>
                            <p>{fullDetails.reasonForRehome}</p>
                        </div>
                    </div>

                </div>
                <div className="bg-white mx-12 py-8">
                    {/* Dog Details */}
                    <div >
                        <h2 className="text-secondary-content py-5 font-bold text-lg ">Dog Details</h2>
                        <p><b>Dog Name: </b>{fullDetails.dogName}</p>
                        <p><b>Sex: </b>{fullDetails.sex}</p>
                        <p><b>Age: </b>{fullDetails.age}</p>
                        <p><b>Colour: </b>{fullDetails.colour}</p>
                        <p><b>Neutered: </b>{fullDetails.neutered}</p>
                        <p><b>Email: </b>{fullDetails.email}</p>
                        <p><b>Size: </b>{fullDetails.size}</p>
                        <p><b>Type: </b>{fullDetails.type}</p>
                        <p><b>Microchip Number: </b>{fullDetails.microchip}</p>
                        <p><b>KC Name: </b>{fullDetails.kcName}</p>
                        <p><b>KC Number: </b>{fullDetails.kcNumber}</p>
                        <p><b>Breeder Contacted: </b>{fullDetails.breederContacted}</p>
                        <p><b>Vaccinated: </b>{fullDetails.vaccinated}</p>
                        <p><b>PRA Status: </b>{fullDetails.praStatus}</p>
                        <p><b>Lafora Status: </b>{fullDetails.laforaStatus}</p>
                        <p><b>Existing Health Conditions: </b>{fullDetails.existingHealthConditions}</p>
                        <p><b>Health Details: </b>{fullDetails.healthDetails}</p>
                        <p><b>House Trained: </b>{fullDetails.houseTrained}</p>
                        <p><b>Travel Sick: </b>{fullDetails.travelSick}</p>
                        <p><b>Used to Cats: </b>{fullDetails.usedToCats}</p>
                        <p><b>Used to a Garden: </b>{fullDetails.usedToGarden}</p>
                        <p><b>Used to Children: </b>{fullDetails.usedToChildren}</p>
                        <p><b>used to Other Dogs: </b>{fullDetails.usedToOtherDogs}</p>
                        <p><b>Guards Food/Toys: </b>{fullDetails.guardsFoodOrToys}</p>
                        <p><b>Digs Holes: </b>{fullDetails.digsHoles}</p>
                        <p><b>Noisy: </b>{fullDetails.noisy}</p>
                        <p><b>Walks on Lead: </b>{fullDetails.walksOnLead}</p>
                        <p><b>Comes When Called: </b>{fullDetails.comesWhenCalled}</p>
                        <p><b>Crate Trained: </b>{fullDetails.crateTrained}</p>
                        <p><b>Escapte Artist: </b>{fullDetails.escapeArtist}</p>
                        <p><b>Ever Bitten: </b>{fullDetails.everBitten}</p>
                        <p><b>If yes, details: </b>{fullDetails.bittenDetails}</p>
                        <p><b>Used to Other Pets: </b>{fullDetails.otherPets}</p>
                        <p><b>Afraid of Anything: </b>{fullDetails.afraid}</p>
                        <p><b>If yes, details: </b>{fullDetails.afraidDetails}</p>
                        <p><b>Permission to contact vet: </b>{fullDetails.vetPermission}</p>
                        <p><b>Other Details: </b>{fullDetails.otherDetails}</p>
                    </div>
                </div>
            </div>  

            {/* Footer */}
            <div>
                <button className="btn btn-success bg-lime-500">Accept</button>
                <button className="btn btn-error bg-red-500">Reject</button>
            </div>
        </div>
    )

}