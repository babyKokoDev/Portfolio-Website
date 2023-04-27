import React from 'react'
import fintech from '../public/assets/Bank/one.png'
import twitch from '../public/assets/twitch/one.png'
import Restaurant from '../public/assets/Restaurant/four.png'
import dashboard from '../public/assets/dashboard/one.png'
import todo from '../public/assets/Todo/one.png'
import weekaway from '../public/assets/weekaway/one.png'
import ProjectItems from './ProjectItems'

const Projects = () => {
  return (
    <div className='w-full'>
     <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] font-semibold text-center'>Projects</p>
        <h2 className='py-4 text-center'>What I have Built</h2>
        <div className='grid md:grid-cols-2 gap-8 2xl:grid-cols-3'>
          <ProjectItems title='Bank Application' image={fintech
        } url='/Bank' software='Vanilla JS' />
          <ProjectItems title='Restaurant Application' image={Restaurant
        } url='/Restaurant' software='React JS' />
          <ProjectItems title='Twitch Gaming App' image={twitch
        } url='/Twitch' software='Next JS'/>
          <ProjectItems title='Admin Dashboard' image={dashboard
        } url='/Dashboard' software='Next JS' />
          <ProjectItems title='Todo Application' image={todo
        } url='/Todo' software='React JS' />
          <ProjectItems title='Travel Booking' image={weekaway
        } url='/Weekaway' software='React JS' />
        </div>
     </div>
    </div>
  )
}

export default Projects