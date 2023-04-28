import Image from 'next/image'
import React from 'react'
import twitch from '../public/assets/twitch/one.png'
import {RiRadioButtonFill} from 'react-icons/ri'

const Twitch = () => {
  return (
    <div className='w-full'>
    <div className='w-full h-[50vh] lg-[50vh] relative'>
       <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/[0.88] z-10'>
          <Image src={twitch} className='absolute z-1 w-full h-full mix-blend-overlay'  />    
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='mb-2 text-gray-400'>Twitch Gaming Application</h2>
              <h3 className='text-gray-400'>Next JS / Tailwind CSS</h3>
          </div>
       </div>
    </div>
    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 mb-10'>
          <div className='col-span-4'>
              <p className='text-center text-xl text-[#5651e5] font-semibold'>Projects</p>
              <h2 className='text-center'>Overview</h2>
              <p className='tracking-widest mt-3'>This twitch gaming application was built using Next Js and tailwind css. It was built in such a way that any user that wants to access it must sign up. I implemented Next Auth for sign up by providing two authentication providers which are Google and Github. Subsequently, I might add other providers like Facebook and Twitter. I embedded a youtube video to the application and created a lot of dummy API's for user data</p>
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
              <button className='px-8 py-2 mt-4'>Code</button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
             <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Next JS</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Tailwind CSS</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> Next Auth</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> API</p>
                </div>
             </div>
          </div>
        </div>

  </div>
  )
}

export default Twitch