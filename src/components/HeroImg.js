import './HeroStyle.css';
import {Link} from 'react-router-dom';
import React from 'react';

const HeroImg = ()=>{
    return(
        <div className='hero'>
            <div className='mask'>
               <img className='into-img' src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="intro-Image" /> 
            </div>
            <div className="content">
                <p>Hi, I'm Mohammed Siddique</p>
                <h1>Front End Developer</h1>
                <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
                </div>
            </div>
            
            
        </div>
    )
}

export default HeroImg;