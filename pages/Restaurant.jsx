import Image from 'next/image'
import React from 'react'
import Res from '../public/assets/Restaurant/four.png'
import {RiRadioButtonFill} from 'react-icons/ri'

const Restaurant = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-[50vh] lg-[50vh] relative'>
         <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/[0.88] z-10'>
            <Image src={Res} className='absolute z-1 w-full h-full mix-blend-overlay'  />    
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='mb-2 text-gray-400'>Food Delivery Application</h2>
                <h3 className='text-gray-400'>React JS / Tailwind CSS</h3>
            </div>
         </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 mb-10'>
            <div className='col-span-4'>
                <p className='text-center text-xl text-[#5651e5] font-semibold'>Projects</p>
                <h2 className='text-center'>Overview</h2>
                <p className='tracking-widest mt-3'>This is typically an African food delivery application built to be a user-friendly and efficient platform designed to provide customers with a seamless and convenient food delivery experience. The application allows customers to browse menus, place orders, and make payments online using paystack, all from the comfort of their homes or workplaces. Overall, this food delivery application was built to be a powerful tool for enhancing the food delivery experience for customers and optimizing delivery operations for food delivery companies. It provides a user-friendly, efficient, and innovative platform that caters to the evolving needs of today's customers.</p>
                <a href="https://eli-restaurant-app.netlify.app/" target='blank'><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
                <a href="https://github.com/babyKokoDev/Food-Delivery-Website" target='blank'><button className='px-8 py-2 mt-4'>Code</button></a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
               <div className='p-2'>
                  <p className='text-center font-bold pb-2'>Technologies</p>
                  <div>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> React JS</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Tailwind CSS</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Paystack</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> API</p>
                  </div>
               </div>
            </div>
          </div>

    </div>
  )
}

export default Restaurant