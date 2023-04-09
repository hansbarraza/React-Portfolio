import React from 'react'
import {Link} from 'react-scroll'
import '../assets/css/Navagation.css'

const Navigation = () => {
  return (
        <nav className='main-nav'>
            <ul>
                <li>
                <Link activeClass="" to="home" spy={true} smooth={true}>Home</Link>
                </li>
                <li>
                <Link activeClass="" to="about-me" spy={true} smooth={true}>About</Link>
                </li>
                <li>
                <Link activeClass="" to="projects" spy={true} smooth={true}>Projects</Link>
                </li>
                <li>
                <Link activeClass="" to="contact" spy={true} smooth={true}>Contact</Link>
                </li>
            </ul>
        </nav>
         )
}

export default Navigation