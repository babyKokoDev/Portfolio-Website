import Image from 'next/image'
import React from 'react'
import twitch from '../public/assets/twitch/one.png'
import {RiRadioButtonFill} from 'react-icons/ri'

const Twitch = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] lg-[50vh] relative'>
       <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/[0.88] z-10'>
          <Image src={twitch} className='absolute z-1 w-full h-full mix-blend-overlay'  />    
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='mb-2 text-gray-400'>Twitch Gaming Application</h2>
              <h3 className='text-gray-400'>Next JS / Tailwind CSS</h3>
          </div>
       </div>
    </div>
    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
              <p className='text-center text-xl text-[#5651e5] font-semibold'>Projects</p>
              <h2 className='text-center'>Overview</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni sequi expedita nihil ratione voluptate rem iste esse architecto, nostrum vitae beatae ut impedit amet animi incidunt ex cumque fugiat voluptatibus repellendus nemo veritatis totam ipsum cupiditate? Commodi quam officiis fuga ducimus a, veniam atque et vero eos debitis quo, optio nemo modi eaque laborum! Porro iusto officia, quaerat dolores commodi illum sapiente necessitatibus dolorum, doloribus recusandae voluptates temporibus exercitationem!</p>
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