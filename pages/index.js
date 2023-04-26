import About from '@/components/About'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
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
   </>
  )
}
