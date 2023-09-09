import { Link, Route, Routes } from 'react-router-dom';
import './navbar.css';
import { useEffect, useState } from 'react';
import { useTypewriter, Cursor} from 'react-simple-typewriter';

function Navbar(props) {
        const [linkState, setLinkState] = useState(false);
        useEffect(()=>{
            setTimeout(()=>{
                setLinkState(true);
            }, 3000);
        },[]);
        const [text] = useTypewriter({
            words:[`${props.page == "confess.exe" ? 'bash confess.exe' : `cd ${props.page}`}`, ''],
            loop: 1,
            delaySpeed: 100,
            typeSpeed: 100,
            deleteSpeed: 0
        });

    return (
        <>
            <div className="navbar">
                <div className="rootsh">
                    <h2><span style={{ color: "rgba(255,65,0,0.85)" }}>root</span><span style={{ color: "cyan" }}>@</span><span style={{ color: "rgba(255,220,0,1)" }}>Stephen</span><span style={{ color: "cyan", }}>(/{linkState && props.page})</span>:<span className='typewritter'>{text}</span><span className='blinking'>_</span></h2>
                </div>
                {linkState && (
                    <div className="links">
                    <Link to='/' className='links'>Home</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/contacts'>Contacts</Link>
                </div>
                )}
            </div>
        </>
    );
}
export default Navbar;