import React from 'react'
import Banner from '../components/Banner'
import Experts from '../components/Experts'
import Newletter from '../components/Newletter'
import Plans from '../components/Plans'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Banner/>
        <Experts/>
        <Newletter/>
        <Plans/>
        <Footer/>
    </>
  )
}

export default Home