import {useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {updateDarkMode} from '../../actions';
//icons
import {AiOutlineLink} from 'react-icons/ai';
import {BsSun, BsMoon} from 'react-icons/bs'
import { FaDatabase, FaInfinity } from 'react-icons/fa';
import { RiLayoutMasonryLine } from 'react-icons/ri';



export default function Template(props) {
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.darkMode);

    useEffect(() => {
        let tempDarkMode = localStorage.getItem('darkmode');
        if(tempDarkMode) {
          if(tempDarkMode === "dark") {
            dispatch(updateDarkMode(true));
          } else {
            dispatch(updateDarkMode(false));
          }
        }
    }, [])

    return (
        <div className={`w-full min-h-screen bg-gradient-to-b transition ease-in duration-150 ${darkMode ? 'from-blue-800 to-gray-600' : 'from-blue-200 to-gray-200'}`}>
            <Head>
                <title>{props.title}</title>
            </Head>
            {/* Nav */}
            <header className={`w-full flex justify-between items-center px-8 py-4 transition ease-in duration-150 ${darkMode ? 'text-gray-200 bg-black' : 'text-gray-800 bg-white'}`}>
                <h1 className="text-2xl md:text-4xl">{props.title}</h1>
                {darkMode ?
                    <button className="rounded-full mr-4 p-1 text-2xl md:text-4xl text-gray-100 focus:outline-none" style={{border: '1px solid white'}}
                        onClick={() => {dispatch(updateDarkMode(false)); localStorage.setItem('darkmode', 'light')}}><BsMoon /></button>
                :
                    <button className="rounded-full mr-4 p-1 text-2xl md:text-4xl text-yellow-400 focus:outline-none" style={{border: '1px solid orange'}}
                        onClick={() => {dispatch(updateDarkMode(true)); localStorage.setItem('darkmode', 'dark')}}><BsSun /></button>
                }
            </header>
            {/* Main */}
            <main className="md:max-h-screen flex flex-col md:flex-row p-4">
                <div className="w-full">
                    <section className="mb-16 p-4 rounded-xl shadow text-gray-200 bg-gray-800">
                        <h1 className="mb-4 text-4xl underline">Overview</h1>
                        <p className="mb-8 text-xl text-justify whitespace-pre-line">{props.overview}</p>
                        <div className="flex">
                            <a className="w-full mr-4 p-2 rounded-xl text-center text-xl text-gray-200 bg-yellow-600
                                transition ease-in duration-150 hover:bg-yellow-800"
                                href={props.sourceLink} target="_blank">
                                Source Code</a>
                            <a className="w-full mr-4 p-2 rounded-xl text-center text-xl text-gray-200 bg-blue-600
                                transition ease-in duration-150 hover:bg-blue-800"
                                href={props.liveAppLink} target="_blank">
                                <AiOutlineLink className="inline text-xl" /> Live app</a>
                        </div>
                    </section>
                    <section className="mb-16 md:mb-0 p-4 rounded-xl shadow text-gray-200 bg-gray-800">
                        <h1 className="mb-4 text-4xl underline">Technologies</h1>
                        <div className="flex flex-wrap">
                            <div className="mb-4 mr-8">
                                <div className="flex items-center">
                                    <RiLayoutMasonryLine className="mr-2 text-3xl text-green-600" />
                                    <h1 className="text-3xl">Frontend</h1>
                                </div>
                                <div className="flex flex-wrap">
                                    {props.frontendTech.map(tech => 
                                        <TechCard techName={tech.name} icon={tech.icon} />
                                    )}
                                </div>
                            </div>
                            {props.backendTech &&
                                <div className="mb-4 mr-8">
                                    <div className="flex items-center">
                                        <FaDatabase className="mr-2 text-3xl text-blue-600" />
                                        <h1 className="text-3xl">Backend</h1>
                                    </div>
                                    <div className="flex flex-wrap">
                                        {props.backendTech.map(tech => 
                                            <TechCard techName={tech.name} icon={tech.icon} />
                                        )}
                                    </div>
                                </div>
                            }
                            <div>
                                <div className="flex items-center">
                                    <FaInfinity className="mr-2 text-3xl text-yellow-600" />
                                    <h1 className="text-3xl">Dev-ops</h1>
                                </div>
                                <div className="flex flex-wrap">
                                {props.devopsTech.map(tech => 
                                        <TechCard techName={tech.name} icon={tech.icon} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <aside className="w-max mx-auto md:p-8 flex flex-col gap-y-10">
                    {props.images.map((image, index) => {
                        if (index < 2) {  return(
                        <div className="w-img-mobile h-img-mobile lg:w-img-desktop lg:h-img-desktop relative">
                            <div className='w-full h-full absolute top-0 left-0 rounded transform rotate-6 bg-blue-800'/>
                            <div className='w-full h-full absolute top-0 left-0 rounded transform rotate-3 bg-blue-400'/>
                            <Image className="object-cover rounded shadow" src={image.imageSource} alt="project image" layout="fill" />
                        </div>
                    )}})}
                </aside>
            </main>
            {props.images.length > 2 &&
                <section className="flex gap-10 px-8 py-16">
                    {props.images.map((image, index) => {
                        if (index > 1) {  return(
                        <div className="w-img-mobile h-img-mobile lg:w-img-desktop lg:h-img-desktop relative">
                            <div className='w-full h-full absolute top-0 left-0 rounded transform rotate-6 bg-blue-800'/>
                            <div className='w-full h-full absolute top-0 left-0 rounded transform rotate-3 bg-blue-400'/>
                            <Image className="object-cover rounded shadow" src={image.imageSource} alt="project image" layout="fill" />
                        </div>
                    )}})}
                </section>
            }
        </div>
    )
}

function TechCard({icon, techName}) {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <p className={`w-max m-2 px-2 py-1 text-xl rounded shadow text-gray-100 bg-gray-600`}>
            {icon} {techName}
        </p>
    )
}