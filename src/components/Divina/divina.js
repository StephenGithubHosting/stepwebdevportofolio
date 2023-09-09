import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter';
import Navbar from "../navbar/navbar";
import './divina.css';

function MyNewCrush() {
    const [confessState, setConfessState] = useState(false);
    const [navbarState, setNavbarState] = useState(false);
    const [btnState, setBtnState] = useState(false);
    const [firstState, setFirstState] = useState(false);
    const [secondState, setSecondState] = useState(false);
    const [answerState, setAnswerstate] = useState(0);
    const [confess] = useTypewriter({
        words: [`Hey Divina, i've been holding my will to confess to you since the 8th grade. I think now is the time`],
        loop:1,
        typeSpeed: 100,
    })
    useEffect(()=>{
        setTimeout(()=>{
            setNavbarState(true);
        },3000);
        setTimeout(()=>{
            setConfessState(true);
        }, 14000)
    },[]);
    const handleDone1 = ()=>{
        setFirstState(true);
        setTimeout(() => {
            setSecondState(true);
        }, 13000);
    };
    const handleDone2 = () => {
        console.log("secondstate");
        setSecondState(true);
    };
    const yes = ()=>{
        setAnswerstate(1);
    };
    const no = () => {
        setAnswerstate(-1);
    };

    const rs1 = ()=>{
        location.href ='https://api.whatsapp.com/send?phone=82124422083&text=LOVE%20YOU%20STEPHEN%20%F0%9F%92%93%F0%9F%92%93%F0%9F%92%93';
    };
    const rs2 = ()=>{
        location.href = 'https://api.whatsapp.com/send?phone=82124422083&text=Sorry...';
    };
    return (
    <>
    <Navbar page="confess.exe"></Navbar>
    { navbarState && (<>
    <div className="wrapper">
    <div className="divinamylove">
        <h1>
            <Typewriter
            words={['Hey, Divina..']}
            onLoopDone={handleDone1}
            ></Typewriter>
        </h1>
        {firstState && 
        (
            
            <h2>
            <Typewriter
            words={[`I've secretly liked you since the eighth grade.. And i think now is the time to confess to you. Would you say yes about being mine?`]}
            onLoopDone={handleDone2}
            ></Typewriter>
        </h2>
        )
    }
    {secondState && (
        
        <div className="buttons">
            <button onClick={yes}>Yes</button>
            <button onClick={no}>No</button>
        </div>
        
    )}
    {answerState === 1 && (
    <>
        <h1>Yay, love you 💓💓</h1>
        <button onClick={rs1}>Respond at whatsapp</button>
        
    </>
    )}
    {answerState === -1 && (
    <>
        <h2>Aww okay :( </h2>
        <button onClick={rs2}>Respond at whatsapp</button>

    </>
    )}
    </div>


    </div>  
    </>)}
    </>
    )
}
export default MyNewCrush;