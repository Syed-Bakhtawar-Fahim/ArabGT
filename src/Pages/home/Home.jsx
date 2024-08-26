import React from 'react'
import Navbar from '../../Componets/navbar/Navbar'
import { News, Specs, Agents, Videos, Programs, Brands } from '../../Componets/index'
import './Home.css'

const Home = () => {
  return (
    <>
      <div id='home'>
        <Navbar />
        <div className='herocontent'>
          <h1 className='heading'>
            Your <span className='red'>Auto World</span> Starts Here
          </h1>
          <p className="p">Discover the latest with ArabGT.</p>
        </div>
      </div>

      <Brands />
      <News />
      <Programs />
      <Videos />
      <Specs />
      <Agents />
    </>
  )
}

export default Home
