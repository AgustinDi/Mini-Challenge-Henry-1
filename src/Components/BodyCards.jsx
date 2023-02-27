import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import SearchBar from "./Searchbar";
import data from "../Data/Data.json";
import Searched from "./Searched";
import '../Styles/BodyCards.css';


export default function BodyCards(){
    const [text, setText] = useState();
    const [stock] = useState(data.array);
    const [showed, setShowed] = useState(false)
    //text: es el texto buscado que se muestra en searched, con el que se va a filtrar para hacer la busqueda, con metodos se cambia desde los otros componentes.

    function search(){
        setTimeout(() => {
            console.log(text)
            setShowed([])
        }, 3000);
    }

    return (
        <>
            <SearchBar change={value=>{setText(value);search()}}/>
            <Searched text={text} clear={()=>setText('')}/>
            <Cards data={showed?showed:stock}></Cards>
            <div className="line"></div>
            <p>{12} Resultados</p>
        </>
    )
}