//icons
import {AiOutlineLink} from 'react-icons/ai'
import { FaGithub, FaInfinity } from 'react-icons/fa'
import { IoLogoVercel } from 'react-icons/io5'
import { SiTailwindcss, SiNextDotJs, SiRedux } from 'react-icons/si'
import { RiLayoutMasonryLine } from 'react-icons/ri'
import { VscGraph } from 'react-icons/vsc'
//images
import Image from 'next/image'

export default function Work({darkMode}) {
    return (
        <div className={`w-full md:w-9/12 relative mb-8 mt-8 mx-auto p-8 pt-16 rounded shadow-2xl ${darkMode ? 'text-gray-100 bg-gray-800' : 'text-gray-800 bg-gray-100'}`} id='project-details'>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="w-full lg:flex-6/12 mr-8">
                    <h1 className="mb-8 text-3xl">Simple Cryptocurrency Analytics Platform</h1>
                    <h1 className="mb-4 text-xl underline">Synopsis</h1>
                    <p className="mb-8 text-justify">This is a basic implementation of the CoinGecko API with the purpose of displaying trending cryptocurrency data.<br/><br/>
                        The purpose was to implement data visualization using React-vis.</p>
                    <a href="https://github.com/Legion555/crypto-analytics" target="_blank"><button className="mr-4 p-2 rounded-xl text-gray-200 bg-yellow-600 hover:text-gray-600 hover:bg-yellow-400"
                        style={{transition: '1s cubic-bezier(0.075, 0.80, 0.165, 1)'}}>Source code</button></a>
                    <a href="https://crypto-analytics-legion555.vercel.app/" target="_blank"><button className="p-2 rounded-xl text-gray-200 bg-blue-600 hover:text-gray-600 hover:bg-blue-400"
                        style={{transition: '1s cubic-bezier(0.075, 0.80, 0.165, 1)'}}><AiOutlineLink className="inline text-xl" /> Live app</button></a>
                </div>
                <div className="w-full lg:flex-6/12 mt-8 lg:mt-0 relative rounded-xl shadow">
                    <div className="w-full h-full absolute top-0 left-0 rounded bg-yellow-600" style={{transform: 'rotate(3deg)'}} />
                    <div className="w-full h-full absolute top-0 left-0 rounded bg-blue-600" style={{transform: 'rotate(-3deg)'}} />
                    <Image className="object-cover rounded shadow" src="/assets/crypto_analytics.png" alt="project image" width={1280} height={720} />
                </div>
            </div>
            <h1 className="my-8 text-center text-4xl">Technologies</h1>
            <div className="w-full flex flex-col lg:flex-row justify-evenly">
                <div className="mb-6 lg:mb-0">
                    <RiLayoutMasonryLine className="text-8xl m-auto text-green-600" />
                    <h1 className="text-center text-2xl font-bold">Frontend</h1>
                    <p className="text-xl"><SiNextDotJs className="inline-block" /> Next.js</p>
                    <p className="text-xl"><SiRedux className="inline-block text-purple-500" /> Redux</p>
                    <p className="text-xl"><SiTailwindcss className="inline-block text-blue-300" /> TailwindCSS</p>
                    <p className="text-xl"><VscGraph className="inline-block text-blue-300" /> React-vis</p>
                </div>
                <div>
                    <FaInfinity className="text-8xl m-auto text-yellow-600" />
                    <h1 className="text-center text-2xl font-bold">Dev-ops</h1>
                    <p className="text-xl"><FaGithub className="inline-block" /> Github (version control)</p>
                    <p className="text-xl"><IoLogoVercel className="inline-block" /> Vercel (client)</p>
                </div>
            </div>
        </div>
    )
}