import React, { useState } from "react";
import lupita from "../Data/Lupa.png";
import '../Styles/Searchbar.css'

export default function Searchbar({change}){
    const [input, setInput] = useState('');

    function submitting(e){
        e.preventDefault()
        e.target.input.value = ''
        setInput('')
        change(input)
    }

    function x(e){
        e.nativeEvent.target.previousSibling.value = '';    //Busco el pariente input text y lo limpio.
    }

    return (
        <>
        <div id="searchBar">
            <form onSubmit={submitting}>
            <div id="borderInputSearch">
                    <input id='inputSearch' type='text' name='input' onChange={(e)=>setInput(e.target.value)}/>
                    <button id='x' type="button" onClick={x}>x</button>
            </div>
                <button id='buttonSearch' type="submit" name='buscar' value={'xd'}>
                    <img id='lupita' src={lupita} alt='123'/>Buscar
                </button>
            </form>
        </div>
        </>
    )
}