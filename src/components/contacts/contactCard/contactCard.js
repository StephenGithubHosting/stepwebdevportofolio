import React from "react";
import contactCard from './contactCard.css';

function ContactCard(props) {
    return (
        <>
        <div className="contactCard">
            <div className="imagePlatform">
                <img src={props.image} alt="" />
            </div>
            <div className="titlePlatform">
                <h1>{props.platform}</h1>
            </div>
            <div className="buttonPlatform">
                
                <a href={props.link}>
                    <button>Visit</button>
                </a>
            </div>
        </div>
        </>
    )
}
export default ContactCard;