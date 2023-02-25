import React from "react";
import Cards from "./Cards";
import '../Styles/BodyCards.css'

export default function BodyCards(){

    return (
        <>
            <Cards></Cards>
            <div className="line"></div>
            <p>{12} Resultados</p>
        </>
    )
}