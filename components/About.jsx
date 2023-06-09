import React from 'react'

const About = () => {
  return (
    <div id='about'  className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
              <p className='tracking-widest uppercase text-[#5651e5] font-semibold text-center text-2xl'>About</p>
              <h2 className='py-4 text-center'>Who I am</h2>
              <p className='py-2 text-gray-600 text-center text-xl'>🔴🟠🟡🟢🔵🟣🟤⚫</p>
              <p className='py-2 text-gray-600 text-center sm:text-justify mx-3'>My experience as a front-end web developer has been one of constant learning, growth, and evolution. My adventure began in college, where I discovered my love of coding and web development. I then plunged headfirst into studying HTML, CSS, and JavaScript and started constructing websites and web applications. I began to specialize in front-end development as my experience grew, focused on creating engaging user experiences and visually stunning interfaces. I kept learning and honing my talents by taking on hard projects that pushed me to try new technologies and ideas.</p>
              <p className='py-2 text-gray-600 text-center sm:text-justify mx-3'>As my work evolved, I grew increasingly concerned with accessibility and ensuring that all people could access and enjoy the websites I created. I started incorporating accessibility guidelines and responsive design into all of my projects, building websites that were optimized for all devices and accessible to all people. Today, as a front-end web developer, I continue to learn and grow, staying up-to-date with the latest technologies and techniques and pushing myself to build innovative solutions that exceed customer expectations. My journey has been difficult but extremely gratifying, and I look forward to continue to grow and expand as a developer in the years ahead.</p>
            </div>
            <div className='w-[350px] sm:w-full h-[300px] sm:h-[400px] m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center'>
                <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='rounded-xl w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default About