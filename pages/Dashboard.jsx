import Image from 'next/image'
import React from 'react'
import dash from '../public/assets/dashboard/one.png'
import {RiRadioButtonFill} from 'react-icons/ri'

const Dashboard = () => {
  return (
    <div className='w-full'>
    <div className='w-full h-[50vh] lg-[50vh] relative'>
       <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/[0.88] z-10'>
          <Image src={dash} className='absolute z-1 w-full h-full mix-blend-overlay'  />    
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='mb-2 text-pink-600'>Admin Dashboard</h2>
              <h3 className='text-purple-600'>Next JS / Tailwind CSS</h3>
          </div>
       </div>
    </div>
    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 mb-10'>
          <div className='col-span-4 text-center sm:text-justify px-2'>
              <p className='text-center text-xl text-[#5651e5] font-semibold'>Projects</p>
              <h2 className='text-center'>Overview</h2>
              <p className='tracking-widest mt-3'>This Admin dashboard page was built to be a user-friendly and efficient platform designed to help administrators manage their operations and make informed decisions based on data insights. The dashboard incorporates a range of features and tools to help administrators monitor key metrics and track progress towards their goals. The dashboard displays data and analytics on a range of metrics, such as revenues, user engagement, and orders. This could help administrators to identify trends and patterns, and make data-driven decisions to optimize their operations and performance. To enhance security and privacy, I made use of NextJS for authentication purposes. Overall, the admin dashboard page was built to be a powerful tool for administrators to monitor their operations and make data-driven decisions. It would provide a user-friendly, efficient, and innovative platform that caters to the evolving needs of today's businesses and organizations.</p>
              <a href="https://admin-dashboard-babykokodev.vercel.app/" target='blank'><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
                <a href="https://github.com/babyKokoDev/Admin-Dashboard" target='blank'><button className='px-8 py-2 mt-4'>Code</button></a>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
             <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Next JS</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Tailwind CSS</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Next Auth</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> API</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> ChartJs</p>
                </div>
             </div>
          </div>
        </div>

  </div>
  )
}

export default Dashboard