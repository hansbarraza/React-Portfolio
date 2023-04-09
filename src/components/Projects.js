import React from 'react'
import '../assets/css/Projects.css'
import comingSoon from '../assets/images/comingsoon.jpg'
import exerciseTrackerImg from '../assets/images/exercisetrackerimg.png'

const Project = () => {
  return (
    <div>
      <section id="projects">
        <h1 class="headings">PROJECTS</h1>
        <div class="gallery">
            <a href="https://azurelo.github.io/exercise-tracker/">
                <div class="text-center">
                    <img src={exerciseTrackerImg} alt="coming soon"/>
                    Project 1 - Exercise Tracker
                </div>
            </a>
            <a href=""><img src={comingSoon} alt="coming soon"/></a>
            <a href=""><img src={comingSoon} alt="coming soon"/></a>
            <a href=""><img src={comingSoon} alt="coming soon"/></a>
            <a href=""><img src={comingSoon} alt="coming soon"/></a>
            <a href=""><img src={comingSoon} alt="coming soon"/></a>
        </div>
    </section>
    </div>
  )
}

export default Project