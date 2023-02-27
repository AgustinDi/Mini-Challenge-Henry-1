import React from "react";
import '../Styles/Card.css'

export default function Card({info}){
    const {code,img,price,title} = info
    
    return (
        <div className="parent">
            <img src={img}></img>
            <div>
                <h4>{title}</h4>
                <h6>{code}</h6>
                <p>Precio: {`$${price}`}</p>
            </div>
        </div>
    )
}