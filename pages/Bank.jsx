import Image from 'next/image'
import React from 'react'
import fintech from '../public/assets/Bank/one.png'
import {RiRadioButtonFill} from 'react-icons/ri'

const Bank = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-[50vh] lg-[50vh] relative'>
         <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10'>
            <Image src={fintech} className='absolute z-1 w-full h-full mix-blend-overlay'  />    
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='mb-2 text-pink-600'>Fintech Bank Application</h2>
                <h3 className='text-purple-600'>Vanilla JS / Bootstrap / CSS</h3>
            </div>
         </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 mb-10'>
            <div className='col-span-4 text-center sm:text-justify px-2'>
                <p className='text-center text-xl text-[#5651e5] font-semibold'>Projects</p>
                <h2 className='text-center'>Overview</h2>
                <p className='tracking-widest mt-3'>This bank application was built to be user-friendly and intuitive, allowing customers to access a variety of banking services easily. These services include the ability to open and manage accounts, transfer funds, pay bills, add cards, exchange currency and add saving goals. For every transaction made, a receipt is generated that will allow the user to download and print the transaction details. I made it possible for two or more users to tranfer money to one another if created within the same local storage. I implemented local storage to store users information. The settings section is also there where a user can update or change his original information. I made use of currency exchange API for fetching the current rates of currency pairs.</p>
                <a href="https://elijah-bank-app.netlify.app/" target='blank'><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
                <a href="https://github.com/babyKokoDev/Fintech-Bank-Application" target='blank'><button className='px-8 py-2 mt-4'>Code</button></a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
               <div className='p-2'>
                  <p className='text-center font-bold pb-2'>Technologies</p>
                  <div>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Vanilla JS</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Material UI</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Bootstrap</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Currency API</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> CSS</p>
                  </div>
               </div>
            </div>
          </div>

    </div>
  )
}

export default Bank