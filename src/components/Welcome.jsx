import React from 'react'
import 'w3-css/w3.css';

export default function Welcome() {

    return (
        <div className='welcome'>
            <img className='welcome-logo' src='https://i.postimg.cc/Ss6Gjhp8/f70f1547173320dce7d9fe0c6b30efc69d46eaa0da39a3ee5e6b4b0d3255bfef95601890afd80709da39a3ee5e6b4b0d3255.png'/>
            <br/>
            <div className="w3-spin">
                <img style={{ width: 30 }} src='https://i.postimg.cc/cJZvS9S9/Poke-Ball-icon-svg.png'/>    
                <img style={{ width: 80 }} src='https://i.postimg.cc/cJZvS9S9/Poke-Ball-icon-svg.png'/>    
                <img style={{ width: 30 }} src='https://i.postimg.cc/cJZvS9S9/Poke-Ball-icon-svg.png'/>    
            </div>
        </div>
    )
}

