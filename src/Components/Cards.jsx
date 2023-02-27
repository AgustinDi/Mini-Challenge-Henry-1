import React from "react";
import Card from "./Card.jsx"

export default function Cards({data}){
    console.log(data)
    return (
        <>
            {data.map(item=><Card key={item.code} info={item}></Card>)}
        </>
    )
}