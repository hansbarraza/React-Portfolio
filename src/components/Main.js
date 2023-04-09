import React from 'react'
import '../assets/css/Main.css'
import aboutMeImage from '../assets/images/aboutme2.jpg'

const Main = () => {
  return (
    <div>
        <section id="home">
        <div class="main-intro">
            <h1 class="headings">I AM <br/> Hans Barraza</h1>
        </div>
    </section>
    <section id="about-me">
        <h1 class="headings">ABOUT ME</h1>
        <div id="pic">
            <img src={aboutMeImage}alt="picture of me"/>
            <div id="intro">
                <p>I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things every day. I am dedicated to the quest of developing solutions that leverage on best practice technologies to deliver over the top user experience. Currently, I am looking for new career opportunities my current job position cannot provide.</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Main