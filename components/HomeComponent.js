import React from "react";
import MenuCard from "./MenuCard";
import styles from ".//componentStyles/HomeComponent.module.css"

export default function HomeComponent() {

    return (
        <div className={styles.container}>
            <MenuCard cardTitle="Matches"
                      cardDescription="Check for new matches"
                      buttonText = "Enter" 
                      linkLocation="/matches"
            />
            <MenuCard cardTitle="Fosterer Applications"
                      cardDescription="Review all fosterer applications"
                      buttonText = "Enter" 
                      linkLocation="/"
            />
            <MenuCard cardTitle="Adoption Applications"
                      cardDescription="Review all adoption applications"
                      buttonText = "Enter"
                      linkLocation="/adoptionApplications"
            />
            <MenuCard cardTitle="Adoptee Applications"
                      cardDescription="Review all adotpee applications"
                      buttonText = "Enter" 
                      linkLocation="/"
            />
            <MenuCard cardTitle="Adoption Application Form"
                      cardDescription="Go to adoption application form"
                      buttonText = "Enter"
                      linkLocation="/adoptionForm"  
            />
        </div>
    )
}