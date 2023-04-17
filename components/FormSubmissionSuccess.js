import { React } from "react"

export default function FormSubmissionSuccess(props) {

    const {cardTitle, cardDescription, buttonText} = props

    return (
        <div className="flex justify-center items-center min-h-screen min-w-full">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{cardDescription}</p>
                    <div className="card-actions justify-end">
                    <button onClick={() => { window.location.href = "https://dachshundrescue.org.uk/"; }} className="btn btn-primary">{buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
