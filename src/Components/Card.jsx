import React from "react";
import '../Styles/Card.css'

export default function Card({info}){
    const {code,img,price,title} = info
    
    return (
        <div className="parent">
            <img src={img}></img>
            <div className="child">
                <h4>{title}</h4>
                <h5>{code}</h5>
                <p>Precio: <b>{`$${price}`}</b></p>
            </div>
        </div>
    )
}