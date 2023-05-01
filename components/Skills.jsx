import Image from 'next/image'
import React from 'react'
import htmllogo from '../public/assets/skills/html.png'
import csslogo from '../public/assets/skills/css.png'
import bootstraplogo from '../public/assets/skills/bootstrap.png'
import figmalogo from '../public/assets/skills/figma.png'
import firebaselogo from '../public/assets/skills/firebase.png'
import githublogo from '../public/assets/skills/github1.png'
import javascriptlogo from '../public/assets/skills/javascript.png'
import materiallogo from '../public/assets/skills/material.png'
import mongologo from '../public/assets/skills/mongo.png'
import mysqllogo from '../public/assets/skills/mysql.png'
import nextjslogo from '../public/assets/skills/nextjs.png'
import nodelogo from '../public/assets/skills/node.png'
import reactlogo from '../public/assets/skills/react.png'
import sasslogo from '../public/assets/skills/sass.png'
import tailwindlogo from '../public/assets/skills/tailwind.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
           <p className='text-xl tracking-widest uppercase text-[#5651e5] font-semibold text-center'>Skills</p>
           <h2 className='py-4 text-center'>What I Can Do</h2>
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={htmllogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                 </div>
               </div>
            </div>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={csslogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                 </div>
               </div>
            </div>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={javascriptlogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>JAVASCRIPT</h3>
                 </div>
               </div>
            </div>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={bootstraplogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>BOOTSTRAP</h3>
                 </div>
               </div>
            </div>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={sasslogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>SASS</h3>
                 </div>
               </div>
            </div>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={reactlogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>REACT JS</h3>
                 </div>
               </div>
            </div>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={tailwindlogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>TAILWIND</h3>
                 </div>
               </div>
            </div>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={firebaselogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>FIREBASE</h3>
                 </div>
               </div>
            </div>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={githublogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>GITHUB</h3>
                 </div>
               </div>
            </div>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={materiallogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>MATERIAL UI</h3>
                 </div>
               </div>
            </div>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={nextjslogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>NEXT JS</h3>
                 </div>
               </div>
            </div>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={nodelogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>NODE JS</h3>
                 </div>
               </div>
            </div>

            {/* <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={mongologo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>MONGO DB</h3>
                 </div>
               </div>
            </div>

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={mysqllogo} width={64} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>mySQL</h3>
                 </div>
               </div>
            </div> */}

            <div className='p-2 sm:p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
               <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                 <div className='m-auto'>
                     <Image src={figmalogo} width={80} height={64}  alt='/' />
                 </div>
                 <div className='flex flex-col items-center justify-center'>
                    <h3>FIGMA</h3>
                 </div>
               </div>
            </div>

            

           </div>
        </div>
    </div>
  )
}

export default Skills