import React from 'react'
import Appbar from './Appbar'
import HeroSection from './HeroSection'

const Banner = () => {
  return (
    <div className='w-full h-50vh border-b-2'>
        <Appbar/>
        <HeroSection/>
    </div>
  )
}

export default Banner