import About from '@/components/About'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'

export default function Home() {
  return (
   <>
   <Head>
    <title>Elijah Aremu</title>
   </Head>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Projects />
   </>
  )
}
