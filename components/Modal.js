import React from "react"


export default function Modal(props) {

    const {setAcceptBtnClicked, currentApplicationID} = props

    const handleConfirmAccept = () => {
        setAcceptBtnClicked(false)
        // logic for updating db and sending email
    }

    const handleCancel = () => {
        setAcceptBtnClicked(false)
    }

    return (
        <div className="modal modal-bottom sm:modal-middle modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are you sure you want to accept this application?</h3>
                <p className="py-4">Completing this action will send an accept email to the given email address</p>
                <div className="modal-action">
                    <button className="btn" onClick={()=>handleConfirmAccept()}>Confirm Accept</button>
                    <button className="btn" onClick={()=>handleCancel()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}