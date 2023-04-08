import React from "react";
import MenuCard from "./MenuCard";
import styles from ".//componentStyles/HomeComponent.module.css"

export default function HomeComponent() {

    return (
        <div className={styles.container}>
            <MenuCard cardTitle="Matches"
                      cardDescription="Check for new matches"
                      buttonText = "Enter" 
            />
            <MenuCard cardTitle="Fosterer Applications"
                      cardDescription="Review all fosterer applications"
                      buttonText = "Enter" 
            />
            <MenuCard cardTitle="Adoption Applications"
                      cardDescription="Review all adoption applications"
                      buttonText = "Enter" 
            />
            <MenuCard cardTitle="Adoptee Applications"
                      cardDescription="Review all adotpee applications"
                      buttonText = "Enter" 
            />
            <MenuCard cardTitle="Add New Entity"
                      cardDescription="Manually add a new person or animal"
                      buttonText = "Enter"  
            />
        </div>
    )
}