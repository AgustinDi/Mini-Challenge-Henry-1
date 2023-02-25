import React from "react";
import '../Styles/Searched.css'

export default function Searched({text, clear}){

    return (
        <>
        {
            text ? 
            <p id='searched' onClick={clear}>{text} <button>x</button></p> 
            : null
        }
        </>
    )
}