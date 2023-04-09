import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Main from './components/Main'
import './assets/css/App.css'

const App = () => {
  return (
    <div>
    <Header/>
    <Main/>
    <Projects/>
    <Footer/>
    </div>
  )
}

export default App
