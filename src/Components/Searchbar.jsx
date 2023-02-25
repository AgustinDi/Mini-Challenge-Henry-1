import React, { useState } from "react";
import lupita from "../Data/Lupa.png";
import '../Styles/Searchbar.css'

export default function Searchbar({change}){
    const [input, setInput] = useState('');

    return (
        <>
        <div id="searchBar">
            <div id="borderInputSearch">
                <input id='inputSearch' type='text' onChange={(e)=>setInput(e.target.value) }/><button id='x'>x</button>
            </div>
            <button id='buttonSearch' onClick={()=>change(input)}>
                <img id='lupita' src={lupita} alt='123'/>Buscar
            </button>
        </div>
        </>
    )
}