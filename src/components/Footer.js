import React from 'react'
import './FooterStyle.css';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone,} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem", }} />
                        <div>
                            <p>2 Yasin Khan Street</p>
                            <p>Chennai, Tamil Nadu, India</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem", }} />
                            7358578877</h4>
                    </div>
                    <div className='email'>
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem", }} />
                            mohammedsiddique1510@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About</h4>
                    <p>This is Mohammed Siddique Front End Developer.</p>
                    <div className='social'>
                        <NavLink to="https://github.com/mohammedsiddique15" target='_blank'><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem", }} /></NavLink>
                        <NavLink to="https://www.linkedin.com/in/mohammed-siddique-a1a0a9209/" target='_blank'><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem", }} /></NavLink>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer