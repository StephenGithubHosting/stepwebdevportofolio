import { Route, Routes } from 'react-router-dom';
import './home.css';
import self from './myselfobviously.png';
import Navbar from '../navbar/navbar';
import { useEffect, useState } from 'react';
function Home(props) {
    const [homeState, setHomeState] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setHomeState(true);
            console.log('called');
        }, 3000)
    },[])
    return (
        <>
            <Navbar page="home" />
       {homeState && (     
        <div className="home">
            <div className="leftSide">
                <div className="texts">
                <div className="image">
                    <img src={self} alt="" style={{width:"100px"}}/>
                </div>
                <h2>Hello!</h2>
                <h1>I'm <span style={{color:"rgba(255,205,0,1)"}}>Stephen.</span></h1>
                <p>
                        I'm a self thought <span style={{color:"Magenta"}}>programmer.</span> Started back then in 2020 until now: ({new Date().getFullYear()}). I started to code when i was 11, I am quite good at making websites. You can see my projects at <span style={{ color: "lime" }}>the top right of the screen.</span> I have alot of friends and i usually play games such as <span style={{ color: "Orange" }}>CS:GO, Valorant, Roblox, and Minecraft</span>. I live in <span style={{ color: "red" }}>Indo</span>nesia, I speak English, Indonesian, And a little bit of Russian (Don't roast my russian please...). Also you can reach me at the Contacts at <span style={{ color: "lime" }}>the top right of the screen.</span>
                </p>

                </div>
            </div>
            <div className="rightSide">
                <div 
                className="image">
                     <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="c" gradientTransform="rotate(-45 .5 .5)"><stop offset="0%" stop-color="#0093E9" /><stop offset="100%" stop-color="#80D0C7" /></linearGradient><clipPath id="b"><path fill="currentColor" d="M861 602.5Q782 705 715.5 832T535 850.5Q421 742 259.5 767t-170-121Q81 500 153 400t144.5-200q72.5-100 198-86.5t214 92Q798 284 869 392t-8 210.5Z" /></clipPath><filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh"><feFlood flood-color="#fff" result="neutral-gray" /><feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="100" stitchTiles="stitch" result="noise" /><feColorMatrix in="noise" type="saturate" values="0" result="destaturatedNoise" /><feComponentTransfer in="desaturatedNoise" result="theNoise"><feFuncA type="table" tableValues="0 0 0.25 0" /></feComponentTransfer><feBlend in="SourceGraphic" in2="theNoise" mode="soft-light" result="noisy-image" /></filter></defs><g filter="url(#a)" clip-path="url(#b)"><path fill="url(#c)" d="M861 602.5Q782 705 715.5 832T535 850.5Q421 742 259.5 767t-170-121Q81 500 153 400t144.5-200q72.5-100 198-86.5t214 92Q798 284 869 392t-8 210.5Z" /></g></svg>
                     <img src={self} alt="" />
                </div>
            </div>
        </div>
       )}
        </>
    );
}
export default Home;