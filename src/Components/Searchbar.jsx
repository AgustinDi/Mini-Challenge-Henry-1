import React from "react";
import lupita from "../Data/Lupa.png";

export default function Searchbar(){

    return (
        <>
        <input id='inputSearch' type='text'></input><button id='buttonSearch'><img id='lupita' src={lupita} alt='123'/>hola</button>
        </>
    )
}