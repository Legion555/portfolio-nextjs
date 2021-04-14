import {useState, useEffect, useRef} from 'react'
import Image from 'next/image';
import Link from 'next/link';
//redux
import {useSelector} from 'react-redux';
//spring
import {useSpring, animated} from 'react-spring'
//icons
import {BiDetail} from 'react-icons/bi'
import {BsCodeSlash, BsEyeFill} from 'react-icons/bs'



export default function Work() {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <section className={`py-8 bg-gradient-to-b transition ease-in duration-150
            ${darkMode ? 'from-blue-900 to-gray-800 text-gray-100' : 'from-blue-200 to-gray-100 text-gray-800'}`} id="work" >
            <div className="text-center text-6xl font-bold">
                <div className="w-64 h-8 mx-auto bg-blue-400 relative top-16 z-0"></div>
                <h1 className="relative z-1">Projects</h1>
            </div>
            <div className="w-full mt-8 flex flex-col md:flex-row justify-evenly items-center flex-wrap">

                <ProjectCard imageName={'coding_victories_1'} name={'Coding Victories'} descr={'This project utilizes the NEXT API feature for backend implementation. I connected it with MongoDB as its database.'}
                    detailsLink={'coding-victories'} githubLink={'https://github.com/Legion555/coding-victories'} appLink={'https://coding-victories.vercel.app/main'} />

                <ProjectCard imageName={'cryptolytics_1'} name={'Cryptocurrency Analytics Platform'} descr={'This web app uses the CoinGecko API for the purpose of displaying cryptocurrency data.'}
                    detailsLink={'cryptolytics'} githubLink={'https://github.com/Legion555/cryptolytics'} appLink={'https://cryptolytics.vercel.app/'} />

                <ProjectCard imageName={'tempus_1'} name={'Tempus'} descr={'The focus of this project was to create an ecommerce web app using Next JS API.'}
                    detailsLink={'tempus'} githubLink={'https://github.com/Legion555/ecommerce-tempus'} appLink={'https://tempus-eight.vercel.app'} />

                <ProjectCard imageName={'speech_recognizer'} name={'Speech recognition quiz'} descr={"I implemented TensorFlow's Speech Recognition model to create a web quiz capable of running off of speech."}
                    detailsLink={'speech-quiz'} githubLink={'https://github.com/Legion555/tensorflow-speech-recognizer'} appLink={'https://tensorflow-speech-recognizer.vercel.app'} />
            </div>
        </section>
    )
}

const ProjectCard = ({imageName, name, descr, detailsLink, githubLink, appLink}) => {
    const [rotation, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 3, tension: 400, friction: 40 } }))
    const cardElem = useRef(null);

    let rect; let calc; let trans;
    useEffect(() => {
        rect = cardElem.current.getBoundingClientRect();
        window.addEventListener('scroll', getRect);
    })

    const getRect = () => {
        rect = cardElem.current.getBoundingClientRect();
    }

    calc = (x, y) => [-(y - (rect.y + rect.height/2)) / 40, (x - (rect.x + rect.width/2)) / 60, 1.1];
    trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    return (
        <Link href={`/projects/${detailsLink}`} ><a target="_blank" rel="norefferer">
        <animated.div className="project-card w-img-mobile md:w-img-desktop relative m-4 md:m-16 shadow border-2 border-gray-300 overflow-hidden"
            ref={cardElem}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: rotation.xys.interpolate(trans) }} >
            <div className="w-img-mobile md:w-img-desktop h-img-mobile md:h-img-desktop relative">
                <Image className="object-fit" src={`/assets/${imageName}.png`} alt="project image" layout="fill" />
            </div>
            <div className="project-card_overlay w-full h-full absolute top-0 left-0 flex items-end opacity-0 transition-all ease-in duration 300">
                <div className="w-full h-full md:h-auto px-2 py-4 bg-gray-800 bg-opacity-85">
                    <div className="mb-4 flex justify-between items-center">
                        <h1 className="text-base md:text-2xl">{name}</h1>
                        <div className="flex gap-4">
                            <Link href={`${appLink}`} ><a target="_blank" rel="norefferer">
                                <BsEyeFill className="text-xl md:text-3xl transform transition ease-in duration-300 text-yellow-200 hover:scale-125 hover:text-yellow-400" />
                                </a></Link>
                            <Link href={`${githubLink}`} ><a target="_blank" rel="norefferer">
                                <BsCodeSlash className="text-xl md:text-3xl transform transition ease-in duration-300 text-yellow-200 hover:scale-125 hover:text-yellow-400 cursor-pointer" />
                            </a></Link>
                            <Link href={`/projects/${detailsLink}`} ><a target="_blank" rel="norefferer">
                                <BiDetail className="text-xl md:text-3xl transform transition ease-in duration-300 text-yellow-200 hover:scale-125 hover:text-yellow-400 cursor-pointer" />
                            </a></Link>
                        </div>
                    </div>
                    <p className="pl-2 border-l-2 border-gray-300 text-sm md:text-base text-justify text-gray-300">{descr}</p>
                </div>
            </div>
        </animated.div>
        </a></Link>
    )
}