import './AboutContentStyle.css';

import React from 'react'
import { Link } from 'react-router-dom';

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I'm a React Front End Developer, I create responsive secure websites.</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className='right'>
                <div className='Img-container'>
                    <div className='img-stack top'>
                        <img src='https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='img' alt='True' />
                    </div>
                    <div className='img-stack bottom'>
                        <img src='https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='img' alt='True' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent