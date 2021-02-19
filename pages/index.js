import Head from 'next/head'
//components
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="app w-full">
      <Head>
        <title>Joshua Lausberg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Nav />

      <About />

      <Work />

      <Contact />

      <Footer />

    </div>
  )
}
