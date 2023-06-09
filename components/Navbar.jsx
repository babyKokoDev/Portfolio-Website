import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub, FaTwitter} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useRouter } from 'next/router';
import logoImg from '../public/assets/logo.png'
// import { Link, animateScroll as scroll } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()
  

  useEffect(()=>{
     if (
        router.asPath === '/Bank' ||
        router.asPath === '/Dashboard' ||
        router.asPath === '/Restaurant' ||
        router.asPath === '/Todo' ||
        router.asPath === '/Twitch' ||
        router.asPath === '/Weekaway'
     ) {
           setNavBg('#ecf0f3')
           setLinkColor('#1f2937')

     }else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
     }
  }, [router])

//  const handleScroll = () => {
     
//  }

//   window.addEventListener('scroll', handleScroll)


  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(()=>{
    const handleShadow = () => {
      if (window.scrollY >= 70){
        setShadow(true)
      }else {
        setShadow(false)
      }
    }
      window.addEventListener('scroll', handleShadow)
  }, [])
  return (
    <div
       style={{backgroundColor: `${navBg}`}}
    className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
         <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
           <Link href='/'>
           <Image src={logoImg} width={125} height={50} alt='/' className='md:ms-5 cursor-pointer' />
           </Link>
           <div>
            <ul style={{color: `${linkColor}`}} className='hidden md:flex mr-5'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/#about'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/#skills'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/#projects'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href='/#contact'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden cursor-pointer'>
                <AiOutlineMenu size={30} className='text-purple-600'/>
            </div>
           </div>
         </div>

         <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] py-5 px-3 ease-in duration-500' : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] py-5 px-3 ease-in duration-500'}>
             <div>
                <div className='flex w-full items-center justify-between'>
                  <Link href='/'>
                    <Image src={logoImg} alt='/' width={87} height={45} />
                  </Link>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2'>
                          <AiOutlineClose className='text-purple-600' />
                    </div>
                </div>
               <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>Lets build something legendary together</p>
               </div>
             </div>
             <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                    <Link href='/'>
                      <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
                    </Link>
                    <Link href='/#about'>
                      <li onClick={()=>setNav(false)} className='py-4 text-sm'>About</li>
                    </Link>
                    <Link href='/#skills'>
                      <li onClick={()=>setNav(false)} className='py-4 text-sm'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                      <li onClick={()=>setNav(false)} className='py-4 text-sm'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                      <li onClick={()=>setNav(false)} className='py-4 text-sm'>Contact</li>
                    </Link>
                </ul>
                <div className='pt-[40px]'>
                   <p className='uppercase tracking-widest text-[#5651e5]'>Lets connect</p>
                </div>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <Link  href='https://www.linkedin.com/in/elijah-aremu-445806151/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href='https://github.com/babyKokoDev'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                    </div>
                  </Link>
                  <Link href='mailto:aremuelija@gmail.com'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href='https://twitter.com/Adebay0nle'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaTwitter />
                    </div>
                  </Link>
                </div>
             </div>
            </div>
         </div>
    </div>
  )
}

export default Navbar