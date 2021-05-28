import React from "react"
import "./GameSquare.css"

function Square({color, piece}){
    let text = ""
    if (color === "Gray"){
        text = "Roll Again"
    } else if (color === "White"){
        text = "Home"
    } else if (color === "Orchid"){
        text = "You Choose"
    }

    if (!piece){
    return (
        <div className = "square" 
        style = {color ? {background:`${color}`}: {border: ".5px solid navy"}}>
            {text}
            
        </div>
    )
    } else {
        return (
            <div className = "square"style = {color ? {background:`${color}`}: {border: ".5px solid navy"}}>
            <div className = "squarepiece">
                {text}
            </div>
            </div>
        )
    }
}

export default Square