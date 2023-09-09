import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Undefined() {
    const [undefinedWord] = useTypewriter({
        words: ['Wrong path buddy...', 'Scroll down.'],
        typeSpeed: 100,
        loop: 0,

    });
    return(
        <>
            <div className="undefined" style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1 style={{color:"white", fontFamily:"monospace",fontWeight:"900",fontSize:"5vw"}}>
                    {undefinedWord}
                <Cursor cursorBlinking={true} cursorStyle="_"/>
                    </h1>
                    
            </div>
            <Link to="/">GO HOME</Link>
        </>
    )
}
export default Undefined