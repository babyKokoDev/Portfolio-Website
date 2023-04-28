import React from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center relative top-[80px]'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
               <p className='uppercase text-sm tracking-widest text-gray-600'>LETS BUILD SOMETHING TOGETHER</p>
               <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Elijah</span></h1>
               <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
               <p className='py-4 text-gray-600 max-w-[90%] sm:max-w-[70%] m-auto'>I'm a front-end web developer with a passion for creating dynamic and responsive websites. I enjoy working collaboratively with designers and back-end developers to ensure seamless functionality and a visually appealing end product. I strive to stay up-to-date with the latest industry trends and technologies to deliver innovative solutions and exceed client expectations. I am also currently learning back-end technologies</p>
               <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <Link href='https://www.linkedin.com/in/elijah-aremu-445806151/'>
               <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                </Link>
                <Link href='https://github.com/babyKokoDev'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                </Link>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Main