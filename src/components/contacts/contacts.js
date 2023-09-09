import { Route, Routes } from 'react-router-dom';
import './contacts.css';
import Navbar from '../navbar/navbar';
import { useEffect, useState } from 'react';
import ContactCard from './contactCard/contactCard';

// images
import Discord from './images/discord.png';
import Github from './images/github.png';
import Spotify from './images/spotify.png';
import Twitch from './images/twitch.png';
import WhyTheHellElonMuskChangedTwitterToTheLetterXMaybeTheyLikeXXXLOL from './images/x_Twitter.png'


function Contacts() {
    const [contactState, setContactState] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setContactState(true);
        }, 3000);
    },[]);
    return (
        <>
            <Navbar page="contacts"/>
            {contactState && (
            <div className="contacts">   
                <div className="title">
                    <h1>My contacts: </h1>
                </div>
                    <div className="contactsContainer">
                        <ContactCard platform="Discord Server" image={Discord} link="https://discord.gg/g7VUsFWgqe"></ContactCard>
                        <ContactCard platform="X (Twitter)" image={WhyTheHellElonMuskChangedTwitterToTheLetterXMaybeTheyLikeXXXLOL} link="https://twitter.com/Stephen84487298"></ContactCard>
                        <ContactCard platform="Github" image={Github} link="https://github.com/StephenGithubHosting"></ContactCard>
                        <ContactCard platform="Spotify" image={Spotify} link="https://github.com/StephenGithubHosting"></ContactCard>
                        <ContactCard platform="Twitch" image={Twitch} link="https://www.twitch.tv/stephen_streams123"></ContactCard>
                    </div>
            </div>
            )}
        </>
    );
}
export default Contacts;