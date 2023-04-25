import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
         <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
           <Image src='/../public/assets/logo.png' width={125} height={50} alt='/' className='md:ms-5' />
           <div>
            <ul className='hidden md:flex mr-5'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div className='md:hidden'>
                <AiOutlineMenu size={25} className='text-purple-600'/>
            </div>
           </div>
         </div>

         <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>
            <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] py-5 px-3 ease-in duration-500'>
             <div>
                <div className='flex w-full items-center justify-between'>
                    <Image src="/../public/assets/logo.png" alt='/' width={87} height={35} />
                    <div>
                          <AiOutlineClose className='text-purple-600' />
                    </div>
                </div>

             </div>
            </div>

         </div>
    </div>
  )
}

export default Navbar