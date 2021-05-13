import {useState} from 'react'
import Head from 'next/head'
//components
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import ProjectDetailsModal from '../components/projects/ProjectDetailsModal'
import Contact from '../components/Contact'
import Footer from '../components/Footer'



export default function Home() {
  const [viewProjectDetails, setViewProjectDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  return (
    <div className="app w-full">
      <Head>
        <title>Joshua Lausberg</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property='og:title' content='Joshua Lausberg | Portfolio'/>
        <meta property='og:image' content='https://joshlausberg.com/assets/portfolio.png'/>
        <meta property='og:description' content='Discover my projects and abilities...'/>
        <meta property='og:url' content='https://joshlausberg.com/'/>
      </Head>

      <Hero />

      <Nav />

      <About />

      <Work setViewProjectDetails={setViewProjectDetails} setSelectedProject={setSelectedProject} />
      {viewProjectDetails && 
        <ProjectDetailsModal data={selectedProject} setSelectedProject={setSelectedProject} setViewProjectDetails={setViewProjectDetails} />
      }

      <Contact />

      <Footer />

    </div>
  )
}
