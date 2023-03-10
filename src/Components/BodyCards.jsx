import React, { useState } from "react";
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

    function search(value){
        console.log(stock)
        setTimeout(() => {
            let filtered = stock.filter(item=>item.title.toUpperCase().includes(value.toUpperCase()));
            setShowed(filtered)
        }, 1000);
    }

    return (
        <>
            <SearchBar change={value=>{setText(value);search(value)}}/>
            <Searched text={text} clear={()=>{setText('');setShowed(false)}}/>
            <Cards data={showed?showed:stock}></Cards>
            <div className="line"></div>
            <h5>{showed ? showed.length : stock.length} Resultados</h5>
        </>
    )
}