import React, { useState } from "react";
import Cards from "./Cards";
import SearchBar from "./Searchbar";
import data from "../Data/Data.json";
import Searched from "./Searched";
import '../Styles/BodyCards.css';


export default function BodyCards(){
    const [text, setText] = useState('');
    const [stock, setStock] = useState(data.array)

    return (
        <>
            <SearchBar change={value=>{
                    setText(value);
                }}/>
            <Searched text={text} clear={()=>setText('')}/>
            <Cards data={data}></Cards>
            <div className="line"></div>
            <p>{12} Resultados</p>
        </>
    )
}