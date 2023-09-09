import React from "react";
import './card.css';

function Card(props){
    return(
        <>
            <div className="card" id={props.name}>
                <img src={props.file}></img>
                <h1 style={{fontSize:"150%"}}>{props.name}</h1>
                <p>Created at: {props.time}</p>
                <div className="button">
                <a href={props.visitLink}>
                    <button>Visit</button>
                </a>
                </div>
            </div>
        </>
    )
}
export default Card;