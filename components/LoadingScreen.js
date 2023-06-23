import React from "react"


export default function LoadingScreen() {
    return (
        <div className="flex justify-center items-center">
        <div className="min-h-screen text-center">Loading...
            <span className="loading loading-spinner loading-lg"></span>
        </div>
        </div>
    )
}