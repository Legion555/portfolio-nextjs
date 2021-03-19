//redux
import {useSelector} from 'react-redux';
//icons
import { DiMongodb } from 'react-icons/di'
import { FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaNodeJs, FaGithub, FaGitAlt, FaInfinity } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { IoLogoVercel } from 'react-icons/io5'
import { RiLayoutMasonryLine } from 'react-icons/ri'
import { SiTailwindcss, SiNextDotJs, SiHeroku, SiRedux, SiTensorflow } from 'react-icons/si'



export default function About() {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <div className={`about w-full py-8 transition ease-in duration-150 ${darkMode ? 'text-gray-100 bg-gray-800' : 'text-gray-800 bg-gray-100'}`} id="about">
            <div className="mb-8 text-center">
                <div className="text-center text-6xl font-bold">
                    <div className="w-56 h-8 mx-auto bg-green-400 relative top-16 z-0"></div>
                    <h1 className="relative z-1">About</h1>
                </div>
                <p className="w-11/12 md:w-9/12 lg:6/12 mt-4 mx-auto text-xl">I am a rationalist with a love for technology, people, and adventure.
                    I see myself as a piece of clay, capable of adapting to any environment.
                    I believe that adaptation is one of the defining features of humanity.</p>
            </div>
            <div className="about_card w-full md:w-11/12 lg:w-9/12 xl:w-7/12 h-max m-auto p-4">
                <div className="w-full mb-8 flex flex-col md:flex-row text-center">
                    <div className="w-full md:w-64 h-max mr-0 md:mr-4">
                        <div className="relative pb-2 text-gray-100 z-10">
                            <RiLayoutMasonryLine className="text-8xl m-auto" />
                            <h1 className="text-center text-4xl font-bold">Frontend</h1>
                        </div>
                        <div className="w-full h-full relative bottom-full p-2 rounded bg-green-600 z-0" />
                    </div>
                    <div className="w-full flex flex-wrap justify-center md:justify-start items-start">
                        <TechCard iconName={FaHtml5} iconColor={'text-yellow-600'} techName={'HTML'} />
                        <TechCard iconName={FaCss3Alt} iconColor={'text-blue-400'} techName={'CSS + Sass'} />
                        <TechCard iconName={SiTailwindcss} iconColor={'text-blue-200'} techName={'TailwindCSS'} />
                        <TechCard iconName={IoLogoJavascript} iconColor={'text-yellow-400'} techName={'Javascript'} />
                        <TechCard iconName={FaReact} iconColor={'text-blue-600'} techName={'React.js'} />
                        <TechCard iconName={SiRedux} iconColor={'text-purple-600'} techName={'Redux'} />
                        <TechCard iconName={SiNextDotJs} iconColor={'text-gray-800'} techName={'Next.js'} />
                        <TechCard iconName={SiTensorflow} iconColor={'text-yellow-400'} techName={'TensorFlow.js'} />
                    </div>
                </div>
                <div className="w-full mb-8 flex flex-col md:flex-row text-center">
                    <div className="w-full md:w-64 mr-0 md:mr-4">
                        <div className="relative pb-2 text-gray-100 z-10">
                            <FaDatabase className="text-8xl m-auto" />
                            <h1 className="text-center text-4xl font-bold">Backend</h1>
                        </div>
                        <div className="w-full h-full relative bottom-full p-2 rounded bg-blue-600 z-0" />
                    </div>
                    <div className="w-full flex flex-wrap justify-center md:justify-start items-start">
                        <TechCard iconName={FaNodeJs} iconColor={'text-green-400'} techName={'Node.js'} />
                        <TechCard iconName={DiMongodb} iconColor={'text-green-600'} techName={'MongoDB'} />
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row text-center">
                    <div className="w-full md:w-64 mr-0 md:mr-4">
                        <div className="relative pb-2 text-gray-100 z-10">
                            <FaInfinity className="text-8xl m-auto" />
                            <h1 className="text-center text-4xl font-bold">Dev-ops</h1>
                        </div>
                        <div className="w-full h-full relative bottom-full p-2 rounded bg-yellow-600 z-0" />
                    </div>
                    <div className="w-full flex flex-wrap justify-center md:justify-start items-start">
                        <TechCard iconName={FaGithub} iconColor={'text-gray-800'} techName={'Github'} />
                        <TechCard iconName={FaGitAlt} iconColor={'text-yellow-600'} techName={'Git'} />
                        <TechCard iconName={SiHeroku} iconColor={'text-purple-600'} techName={'Heroku'} />
                        <TechCard iconName={IoLogoVercel} iconColor={'text-gray-800'} techName={'Vercel'} />
                    </div>
                </div>
                <a href="https://1drv.ms/b/s!AnD_4HQ6Caqsk8ckR_AZjjZ744Y-EQ?e=PZXgc9" target="_blank">
                <div className={`w-max mt-8 p-2 mx-auto rounded-xl border transition ease-in duration-150
                    ${darkMode ? 'border-white hover:bg-gray-100 hover:text-gray-800' : 'border-black hover:bg-gray-800 hover:text-gray-100' }`} >
                    <p className="text-xl md:text-2xl">View resume</p>
                </div>
                </a>
            </div>
        </div>
    )
}

function TechCard({iconName, iconColor, techName}) {
    const darkMode = useSelector(state => state.darkMode);
    const Icon = iconName;

    return (
        <p className={`w-max m-2 px-2 py-1 text-xl rounded shadow ${darkMode ? 'text-gray-100 bg-gray-600' : 'text-gray-800 bg-gray-200' }`}>
            <Icon className={`inline-block ${iconColor}`} /> {techName}
        </p>
    )
}