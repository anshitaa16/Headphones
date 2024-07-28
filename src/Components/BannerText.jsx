import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'

const BannerText = () => {
  return (
    <section className='py-12 text-center font-varela'>
     <div className="container">
          <div className='bg-gradient-to-t from-[#C19493] to-[#AC706E] text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl'>
               <UpdateFollower mouseOptions={{
                    backgroundColor: "#C19493",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    mixBlendMode: "screen",
                    scale: 10,
               }}>

               <p className='font-bold text-4xl max-w-[700px] mx-auto leading-normal'>Headphone With Good quality And Affordable Price</p>
               </UpdateFollower>
          </div>
     </div>
    </section>
  )
}

export default BannerText