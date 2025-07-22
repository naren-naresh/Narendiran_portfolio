import React from 'react'
import Header from './Components/Header/Header'
import Body from './Pages/PortFolio Body/Body'
import Footer from './Pages/PorFolio Footer/Footer'
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills'

const Container = () => {
  return (
    <>
    <Header />
    <About />
    <Skills />
    <Body/>
    <Footer/>
    </>
  )
}

export default Container