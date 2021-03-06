import Head from 'next/head'
import { useEffect, useState } from 'react'
//components
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let tempDarkMode = localStorage.getItem('darkmode');
    if(tempDarkMode) {
      if(tempDarkMode === "dark") {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    }
  })

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

      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />

      <About darkMode={darkMode} />

      <Work darkMode={darkMode} />

      <Contact />

      <Footer />

    </div>
  )
}
