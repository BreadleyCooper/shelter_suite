import React from "react";
import MenuCard from "./MenuCard";

export default function HomeComponent() {

    return (
        <div>
            <MenuCard cardTitle="Matches"
                      cardDescription="Check For New Matches"
                      buttonText = "Go to Matches"  
            />
        </div>
    )
}