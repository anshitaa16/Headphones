import React from 'react'
import Nav from './Components/Nav'
import { UpdateFollower } from 'react-mouse-follower'
import Hero from './Components/Hero'
import Services from './Components/services'
import Banner from './Components/Banner'
import BannerText from './Components/BannerText'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower mouseOptions = {{
          backgroundColor: 'white',
          zIndex: 999,
          followSpeed: 1.5,
        }}
        >
        
      <Nav/>
      <Hero/>
      </UpdateFollower>
      <UpdateFollower mouseOptions = {{
          backgroundColor: 'black',
          zIndex: 999,
          followSpeed: 1.5,
        }}>
        
      <Services/>
      <Banner/>
      <BannerText/>
      <Blogs/>
      <Footer/>
      </UpdateFollower>
      
    </main>
  )
}

export default App