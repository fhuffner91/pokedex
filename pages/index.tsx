import type { NextPage } from 'next'
import LoginInput from '../src/components/LoginInput'
import Navbar from '../src/components/Navbar'
import React from 'react'


const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <LoginInput />  
    </div>

  )
}

export default Home