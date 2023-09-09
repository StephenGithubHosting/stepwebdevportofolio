import { Route, Routes } from 'react-router-dom';
import './projects.css';
import Navbar from '../navbar/navbar';
import Card from './card';
import PostMe from './images/postme.jpg';
import Buaran from './images/buaran.jpg';
import Privatengl from './images/privatengl.jpg';
import Lovecounter from './images/lovecounter.jpg';
import Sentiong from './images/sentiong.jpg';
import { useEffect, useState } from 'react';
function Projects() {
    const [projectState, setProjectState] =  useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setProjectState(true);
        }, 3000)
    },[]);
    return (
        <>
            <Navbar page="projects" />
        {projectState && (

            <div className="projects">
            <div className="title">
                <h1>My projects: </h1>
            </div>
                <div className="projects">
                    <div className="cardContainer">
                        <Card name="PostMe" file={PostMe} time="01/01/2023" visitLink="https://postmeapp.netlify.app">
                        </Card>
                        <Card name="Kos Buaran website" file={Buaran} time="12/03/2023" visitLink="https://kosmurahbuaranraya.netlify.app">
                        </Card>
                        <Card name="My Private NGL" file={Privatengl} time="09/06/2023" visitLink="https://stephen-private-ngl.netlify.app">
                        </Card>
                        <Card name="Love Counter" file={Lovecounter} time="23/11/2022" visitLink="https://your-love-counter.netlify.app/">
                        </Card>
                        <Card name="Kos Sentiong Website" file={Sentiong} time="13/02/2023" visitLink="https://kosmurahsentiong.netlify.app">
                        </Card>
                    </div>
                </div>
        </div>
        )}    
        </>
    );
}
export default Projects;