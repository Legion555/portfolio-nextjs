import { useState } from "react"
//icons
import { DiMongodb } from 'react-icons/di'
import { FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaNodeJs, FaGithub, FaGitAlt, FaInfinity } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { IoLogoVercel } from 'react-icons/io5'
import { RiLayoutMasonryLine } from 'react-icons/ri'
import { SiTailwindcss, SiNextDotJs, SiHeroku, SiRedux } from 'react-icons/si'



export default function About() {
    const [view, setView] = useState('techstack')

    return (
        <div className="about w-full min-h-screen py-16 bg-black" id="about">
            <div className="w-max m-auto mb-8 flex justify-center">
                <div className="w-30 md:w-40 flex flex-col items-center" onClick={() => setView('personal')}>
                    <div className={view === 'personal' ? "w-20 h-20 mb-4 bg-yellow-400" : "w-12 h-12 mb-4 hover:w-20 hover:h-20 hover:bg-yellow-400"}
                        style={{border: '2px solid white' , borderRadius: '50%', transition: '1.5s cubic-bezier(0.075, 0.82, 0.165, 1)'}} />
                    <p className="text-xl md:text-2xl text-gray-200">Who I am</p>
                </div>
                <div className="w-30 md:w-40 flex flex-col items-center" onClick={() => setView('techstack')}>
                    <div className={view === 'techstack' ? "w-20 h-20 mb-4 bg-yellow-400" : "w-12 h-12 mb-4 hover:w-20 hover:h-20 hover:bg-yellow-400"}
                        style={{border: '2px solid white' , borderRadius: '50%', transition: '1.5s cubic-bezier(0.075, 0.82, 0.165, 1)'}} />
                    <p className="text-xl md:text-2xl text-gray-200">My tech stack</p>
                </div>
                <a href="https://1drv.ms/b/s!AnD_4HQ6Caqsk8ckR_AZjjZ744Y-EQ?e=HauwOX" target="_blank">
                <div className="w-30 md:w-40 flex flex-col items-center">
                    <div className="w-12 h-12 mb-4 hover:w-20 hover:h-20 hover:bg-yellow-400"
                        style={{border: '2px solid white' , borderRadius: '50%', transition: '1.5s cubic-bezier(0.075, 0.82, 0.165, 1)'}} />
                    <p className="text-xl md:text-2xl text-gray-200">My resume</p>
                </div>
                </a>
            </div>
            
            {view === 'personal' &&
                <Personal />
            }
            {view === 'techstack' &&
                <TechStack />
            }
        </div>
    )
}

function Personal() {
    return (
        <div className="about_card about_card-personal w-full md:w-10/12 xl:w-7/12 h-max m-auto p-8 rounded-xl shadow bg-yellow-500">
            <div className="flex justify-center mb-8">
                <p className="text-xl md:text-3xl p-2 font-bold bg-gray-400 bg-opacity-50" style={{borderTop: '2px solid black'}}>Ambitious</p>
            </div>
            <div className="flex justify-evenly mb-8">
                <p className="text-xl md:text-3xl p-2 font-bold bg-gray-400 bg-opacity-50" style={{borderLeft: '2px solid black'}}>Innovative</p>
                <p className="text-xl md:text-3xl p-2 font-bold bg-gray-400 bg-opacity-50" style={{borderRight: '2px solid black'}}>Patient</p>
            </div>
            <div className="flex justify-evenly">
                <p className="text-xl md:text-3xl p-2 font-bold bg-gray-400 bg-opacity-50" style={{borderLeft: '2px solid black', borderBottom: '2px solid black'}}>Analytical</p>
                <p className="text-xl md:text-3xl p-2 font-bold bg-gray-400 bg-opacity-50" style={{borderBottom: '2px solid black'}}>Sociable</p>
                <p className="text-xl md:text-3xl p-2 font-bold bg-gray-400 bg-opacity-50" style={{borderRight: '2px solid black', borderBottom: '2px solid black'}}>Accurate</p>
            </div>
        </div>
    )
}

function TechStack() {
    return (
        <div className="about_card flex flex-col md:flex-row w-full md:w-11/12 xl:w-6/12 h-max m-auto p-8 rounded-xl shadow bg-gray-200">
            <div className="w-full md:w-4/12 mb-8 md:mb-0 text-center">
                <RiLayoutMasonryLine className="text-8xl m-auto text-green-600" />
                <h1 className="mb-8 text-center text-4xl font-bold">Frontend</h1>
                <p className="text-2xl"><FaHtml5 className="inline-block text-yellow-800" /> HTML</p>
                <p className="text-2xl"><FaCss3Alt className="inline-block text-blue-600" /> CSS + Sass</p>
                <p className="text-2xl"><SiTailwindcss className="inline-block text-blue-300" /> TailwindCSS</p>
                <p className="text-2xl"><IoLogoJavascript className="inline-block text-yellow-400" /> Javascript</p>
                <p className="text-2xl"><FaReact className="inline-block text-blue-600" /> React.js</p>
                <p className="text-2xl"><SiRedux className="inline-block text-purple-500" /> Redux</p>
                <p className="text-2xl"><SiNextDotJs className="inline-block" /> Next.js</p>
            </div>
            <div className="w-full md:w-4/12 mb-8 md:mb-0 text-center">
                <FaDatabase className="text-8xl m-auto text-blue-600" />
                <h1 className="mb-8 text-center text-4xl font-bold">Backend</h1>
                <p className="text-2xl"><FaNodeJs className="inline-block text-green-400" /> Node.js</p>
                <p className="text-2xl"><DiMongodb className="inline-block text-green-500" /> MongoDB</p>
            </div>
            <div className="w-full md:w-4/12 mb-8 md:mb-0 text-center">
                <FaInfinity className="text-8xl m-auto text-yellow-600" />
                <h1 className="mb-8 text-center text-4xl font-bold">Dev-ops</h1>
                <p className="text-2xl"><FaGithub className="inline-block" /> Github</p>
                <p className="text-2xl"><FaGitAlt className="inline-block text-yellow-600" /> Git</p>
                <p className="text-2xl"><SiHeroku className="inline-block text-purple-500" /> Heroku</p>
                <p className="text-2xl"><IoLogoVercel className="inline-block" /> Vercel</p>
            </div>
        </div>
    )
}