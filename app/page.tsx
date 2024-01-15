import dynamic from 'next/dynamic'
import Navbar from './components/layout/Navbar'

const Hero = dynamic(() => import('./components/sections/Hero'))
const Projects = dynamic(() => import('./components/sections/Projects'))
const Experience = dynamic(() => import('./components/sections/Experience'))
const Contact = dynamic(() => import('./components/sections/Contact'))

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}