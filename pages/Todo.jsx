import Image from 'next/image'
import React from 'react'
import tod from '../public/assets/Todo/one.png'
import {RiRadioButtonFill} from 'react-icons/ri'

const Todo = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] lg-[50vh] relative'>
       <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/[0.8] z-10'>
          <Image src={tod} className='absolute z-1 w-full h-full mix-blend-overlay'  />    
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='mb-2 text-gray-400'>Todo Application</h2>
              <h3 className='text-gray-400'>React JS / Tailwind CSS</h3>
          </div>
       </div>
    </div>
    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
              <p className='text-center text-xl text-[#5651e5] font-semibold'>Projects</p>
              <h2 className='text-center'>Overview</h2>
              <p className='tracking-widest mt-3'>This todo application was built to be a simple and intuitive platform designed to help users manage their tasks and prioritize their work. The application incorporates a range of features and tools to help users organize and track their tasks, ensuring that they stay on top of their work and meet their deadlines. The todo application offers users the ability to create, edit, and delete tasks, as well as set priorities for each task making it easier to manage multiple tasks at once. Overall, this todo application was built to be a powerful tool for anyone looking to manage their tasks and prioritize their work. It provides a simple, efficient, and innovative platform that caters to the evolving needs of today's busy professionals and students.</p>
              <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
              <button className='px-8 py-2 mt-4'>Code</button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
             <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' /> React JS</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1 mr-2' />CSS</p>
                </div>
             </div>
          </div>
        </div>

  </div>
  )
}

export default Todo