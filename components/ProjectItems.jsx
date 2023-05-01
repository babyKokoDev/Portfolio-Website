import React from 'react'
import fintech from '../public/assets/Bank/one.png'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItems = ({title, image, url, software}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-[350px] m-auto sm:w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10 ease-in duration-300' src={image} alt='/' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-sm sm:text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className=' p-1 sm:pb-4 sm:pt-2 text-white text-center'>{software}</p>
        <Link href={url}>
             <p className='text-sm text-center py-3 rounded-lg bg-white text-gray-700 font-bold sm:text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectItems