import React from "react"
import { db } from "@/firebaseConfig"
import {doc, updateDoc } from "firebase/firestore"

export default function Modal(props) {
    const {setAcceptBtnClicked, currentApplicationID, acceptBtnClicked, rejectBtnClicked, setRejectBtnClicked} = props
    
    const adoptionApplicationRef = doc(db, "adoptionApplications", currentApplicationID)


    const handleConfirmAccept = async () => {
        setAcceptBtnClicked(false)
        // logic for updating db and sending email
        try {
            await updateDoc(adoptionApplicationRef, {
                applicationStatus: "accepted"
            })
        } catch(error) {
            console.log(error)
        }
    }

    const handleConfirmReject = async () => {
        setRejectBtnClicked(false)
        // logic for updating db and sending email
        try {
            await updateDoc(adoptionApplicationRef, {
                applicationStatus: "rejected"
            })
        } catch(error) {
            console.log(error)
        }
    }

    const handleAcceptCancel = () => {
        setAcceptBtnClicked(false)
    }

    const handleRejectCancel = () => {
        setRejectBtnClicked(false)
    }


    if(rejectBtnClicked) {
        return (
            <div className="modal modal-bottom sm:modal-middle modal-open">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to <b>reject</b> this application?</h3>
                    <p className="py-4">Completing this action will send an <b>reject</b> email to the given email address</p>
                    <div className="modal-action">
                        <button className="btn btn-error bg-red-500" onClick={()=>handleConfirmReject()}><b>Reject Application</b></button>
                        <button className="btn" onClick={()=>handleRejectCancel()}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
    
    if(acceptBtnClicked) {
        return (
            <div className="modal modal-bottom sm:modal-middle modal-open">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to <b>accept</b> this application?</h3>
                    <p className="py-4">Completing this action will send an <b>accept</b> email to the given email address</p>
                    <div className="modal-action">
                        <button className="btn btn-success bg-lime-500" onClick={()=>handleConfirmAccept()}><b>Accept Application</b></button>
                        <button className="btn" onClick={()=>handleAcceptCancel()}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}