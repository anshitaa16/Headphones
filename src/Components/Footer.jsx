import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLocationArrow, FaPhone, FaTelegram } from 'react-icons/fa'
import cards from '../assets/cards.webp'
import { motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'

const Footer = () => {
     return (
          <>
               <footer className='pt-12 pb-8 bg-[#AC706E] text-white'>
                    <div className='container'>
                         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                              <motion.div
                              initial={{ opacity: 0, y: 100 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                               className='space-y-6'>
                                   <UpdateFollower mouseOptions={{
                                                       backgroundColor: 'white',
                                                       zIndex: 999,
                                                       followSpeed: 1.5,
                                                       scale: 7,
                                                       mixBlendMode: 'difference',
                                                  }}>
                                        
                                   <h1 className='text-3xl font-bold uppercase'>Playing</h1>
                                   </UpdateFollower>

                                                  <UpdateFollower mouseOptions={{
                                                       backgroundColor: 'white',
                                                       zIndex: 999,
                                                       followSpeed: 1.5,
                                                       scale: 4,
                                                       mixBlendMode: 'difference',
                                                  }}>

                                   <p className='text-sm max-w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque qui vel est.
                                   </p>
                                                  </UpdateFollower>

                                   <div>
                                        <p className='flex items-center gap-2'>
                                             <FaPhone />
                                             +1 (123) 456-7890
                                        </p>
                                        <p className='flex items-center gap-2 mt-2'>
                                             {" "}
                                             <FaLocationArrow /> Noida, Uttar Pradesh
                                        </p>
                                   </div>
                              </motion.div>

                              <motion.div initial={{ opacity: 0, y: 100 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.4 }} className='space-y-6'>
                                   <UpdateFollower mouseOptions={{
                                                       backgroundColor: 'white',
                                                       zIndex: 999,
                                                       followSpeed: 1.5,
                                                       scale: 6,
                                                       mixBlendMode: 'difference',
                                                  }}>

                                   <h1 className='text-3xl font-bold'>Quicks Links</h1>
                                   </UpdateFollower>

                                   <UpdateFollower mouseOptions={{
                                                       backgroundColor: 'white',
                                                       zIndex: 999,
                                                       followSpeed: 1.5,
                                                       scale: 4,
                                                       mixBlendMode: 'difference',
                                                  }}>

                                   <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                        <div>
                                             <ul className='space-y-2'>
                                                  <li>Home</li>
                                                  <li>About</li>
                                                  <li>Contact Us</li>
                                                  <li>Privacy Policy</li>
                                             </ul>
                                        </div>
                                        <div>
                                             <ul className='space-y-2'>
                                                  <li>Home</li>
                                                  <li>About</li>
                                                  <li>Contact Us</li>
                                                  <li>Privacy Policy</li>
                                             </ul>
                                        </div>
                                   </div>
                                   </UpdateFollower>



                              </motion.div>


                              <motion.div initial={{ opacity: 0, y: 100 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.6 }} className='space-y-6'>
                                   <UpdateFollower mouseOptions={{
                                                       backgroundColor: 'white',
                                                       zIndex: 999,
                                                       followSpeed: 1.5,
                                                       scale: 6,
                                                       mixBlendMode: 'difference',
                                                  }}>

                                   <h1 className='text-3xl font-bold'>Follow Us</h1>
                                   </UpdateFollower>
                                   <UpdateFollower mouseOptions={{
                                                       backgroundColor: 'white',
                                                       zIndex: 999,
                                                       followSpeed: 1.5,
                                                       scale: 4,
                                                       mixBlendMode: 'difference',
                                                  }}>

                                   <div className='flex items-center gap-3'>
                                   <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                                   <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                                   <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                                   <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                                   </div>
                                   </UpdateFollower>
                                   <div className='space-y-2'>
                                        <p>Payment Methods</p>
                                        <img src={cards} alt="" className='w=[80%]'/>
                                   </div>
                              </motion.div>
                              
                         </div>
                         <p className='text-white text-center mt-8 border-t-2 pt-8'>© 2024. All Rights Reserved</p>
                    </div>
               </footer>
          </>
     )
}

export default Footer