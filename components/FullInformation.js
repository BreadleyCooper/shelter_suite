import React from "react"
import {doc, getDoc} from "firebase/firestore"
import { useEffect } from "react"
import { db } from "@/firebaseConfig"

export default function FullInformation(props) {
    
    const {currentApplicationID, setShowFullInfo} = props

    useEffect(() => {
        console.log("Current ApplicationID => ",currentApplicationID)
        const fetchApplication = async () => {
          try {
            // Set a reference to the Application Document.
            const applicationRef = doc(db, "adoptionApplications", currentApplicationID);
      
            const applicationSnap = await getDoc(applicationRef);
            console.log(applicationSnap.data());
          } catch (e) {
            console.log(e);
          }
        };
        fetchApplication();
        // update the request when the selected area changes
      }, []);

    return (
        <div className="bg-white ">
            {/* Header  */}
            <div className="flex justify-around">
                <h2>Applcation Details</h2>
                <button onClick={()=>setShowFullInfo(false)}>Close</button>
            </div>  

            {/* Body - Person details and dog details container */}
            <div>
                <div></div>
                <div></div>
            </div>  

            {/* Footer */}
            <div>
                <button>Accept</button>
                <button>Reject</button>
            </div>
        </div>
    )

}