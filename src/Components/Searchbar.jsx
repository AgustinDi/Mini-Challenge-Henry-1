import React from "react";
import lupita from "../Data/Lupa.png";

export default function Searchbar(){

    return (
        <>
        <div id="searchBar">
            <div id="borderInputSearch">
                <input id='inputSearch' type='text'/>
            </div>
            <button id='buttonSearch'>
                <img id='lupita' src={lupita} alt='123'/>Buscar
            </button>
        </div>
        </>
    )
}