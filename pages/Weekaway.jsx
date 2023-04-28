import Image from 'next/image'
import React from 'react'
import week from '../public/assets/weekaway/one.png'
import {RiRadioButtonFill} from 'react-icons/ri'

const Weekaway = () => {
  return (
    <div className='w-full'>
    <div className='w-full h-[50vh] lg-[50vh] relative'>
       <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/[0.87] z-10'>
          <Image src={week} className='absolute z-1 w-full h-full mix-blend-overlay'  />    
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='mb-2 text-gray-400'>Vacation Booking Website</h2>
              <h3 className='text-gray-400'>React JS / Tailwind CSS</h3>
          </div>
       </div>
    </div>
    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 mb-10'>
          <div className='col-span-4'>
              <p className='text-center text-xl text-[#5651e5] font-semibold'>Projects</p>
              <h2 className='text-center'>Overview</h2>
              <p className='tracking-widest mt-3'>This vacation booking website was built to  be a comprehensive and user-friendly platform designed to help users plan and book their vacations. The website incorporates a range of features and tools to help users find the perfect destination, book their travel, and plan their itinerary. Subsequently, the vacation booking website will be built to offer users a range of search filters and criteria, such as destination, travel dates, budget, and accommodation type, allowing users to easily find the best vacation options based on their preferences and needs. The website will also offer reviews and ratings from other users, providing valuable insights and recommendations to help users make informed decisions. Overall, the vacation booking website was built to be a powerful tool for anyone looking to plan and book their next vacation by providing a simple, efficient, and innovative platform that caters to the evolving needs of today's travelers.</p>
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
              <button className='px-8 py-2 mt-4'>Code</button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
             <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> React JS</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Tailwind CSS</p>
                </div>
             </div>
          </div>
        </div>

  </div>
  )
}

export default Weekaway