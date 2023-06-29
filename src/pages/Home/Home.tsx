import React from 'react'
import Hero from '../../components/Layouts/Hero/Hero'
import About from '../../components/Layouts/About/About'
import Eventos from '../../components/Layouts/Eventos/Eventos'
import Novidade from '../../components/Layouts/Novidade/Novidade'
import { Container } from '../../styles/Home'



const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <Eventos />
        <Novidade />
        <Container />
    </>
  )
}

export default Home