import {useState, useEffect, useRef} from 'react'
import Image from 'next/image';
import Link from 'next/link';
//redux
import {useSelector} from 'react-redux';
//spring
import {useSpring, animated} from 'react-spring'
//icons
import { AiFillGoogleCircle} from 'react-icons/ai';
import {BiDetail} from 'react-icons/bi'
import {BsCodeSlash, BsEyeFill} from 'react-icons/bs'
import { DiMongodb } from 'react-icons/di';
import { FaGithub, FaBitcoin, FaNodeJs } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiTailwindcss, SiNextDotJs, SiTensorflow, SiRedux } from 'react-icons/si';
import { VscGraph } from 'react-icons/vsc';



export default function Work({setViewProjectDetails, setSelectedProject}) {
    const darkMode = useSelector(state => state.darkMode)

    return (
        <section className={`py-8 bg-gradient-to-b transition ease-in duration-150
            ${darkMode ? 'from-blue-900 to-gray-800 text-gray-100' : 'from-blue-200 to-gray-100 text-gray-800'}`} id="work" >
            <div className="text-center text-6xl font-bold">
                <div className="w-64 h-8 mx-auto bg-blue-400 relative top-16 z-0"></div>
                <h1 className="relative z-1">Projects</h1>
            </div>
            <div className="w-full mt-8 flex flex-col md:flex-row justify-evenly items-center flex-wrap">

                <ProjectCard
                    data={{
                        title: 'Cryptocurrency Analytics Platform',
                        overview: 'This web app uses the CoinGecko API for the purpose of displaying cryptocurrency data.',
                        description: `This web app uses the CoinGecko API for the purpose of displaying cryptocurrency data.`,
                        sourceLink: 'https://github.com/Legion555/cryptolytics',
                        liveAppLink: 'https://cryptolytics.vercel.app',
                        frontEndTech: [
                            {name: 'NextJS',icon: <SiNextDotJs className={`inline-block`} />},
                            {name: 'Redux',icon: <SiRedux className={`inline-block text-purple-500`} />},
                            {name: 'TailwindCSS',icon: <SiTailwindcss className={`inline-block text-blue-300`} />},
                            {name: 'ReCharts',icon: <VscGraph className={`inline-block text-blue-300`} />}
                        ],
                        backendTech: [
                            {name: 'CoinGecko API',icon: <FaBitcoin className={`inline-block`} />}
                        ],
                        devopsTech: [
                            {name: 'Github',icon: <FaGithub className={`inline-block`} />},
                            {name: 'Vercel',icon: <IoLogoVercel className={`inline-block`} />}
                        ],
                        images: [
                            '/assets/cryptolytics_1.png',
                            '/assets/cryptolytics_2.png',
                            '/assets/cryptolytics_3.png'
                        ]
                    }}
                    setViewProjectDetails={setViewProjectDetails} setSelectedProject={setSelectedProject}
                />

                <ProjectCard
                    data={{
                        title: 'Bit Tower',
                        overview: 'A web app where users can be assigned floors and furniture. Users can decorate their room by placing their assigned furniture items.',
                        description: `A web app where users can be assigned floors and furniture. Users can decorate their room by placing their assigned furniture items.`,
                        sourceLink: null,
                        liveAppLink: 'https://bit-tower.io',
                        frontEndTech: [
                            {name: 'NextJS',icon: <SiNextDotJs className={`inline-block`} />},
                            {name: 'Redux',icon: <SiRedux className={`inline-block text-purple-500`} />},
                            {name: 'TailwindCSS',icon: <SiTailwindcss className={`inline-block text-blue-300`} />}
                        ],
                        backendTech: [
                            {name: 'NextJS Node API',icon: <SiNextDotJs className={`inline-block`} />},
                            {name: 'MongoDB',icon: <DiMongodb className={`inline-block text-green-600`} />}
                        ],
                        devopsTech: [
                            {name: 'Github',icon: <FaGithub className={`inline-block`} />},
                            {name: 'Vercel',icon: <IoLogoVercel className={`inline-block`} />}
                        ],
                        images: [
                            '/assets/bit_tower_1.png',
                            '/assets/bit_tower_2.png',
                            '/assets/bit_tower_3.png'
                        ]
                    }}
                    setViewProjectDetails={setViewProjectDetails} setSelectedProject={setSelectedProject}
                />

                <ProjectCard 
                    data={{
                        title: 'Coding Victories',
                        overview: `Users can register and create 'coding victories' which are shared with the community.`,
                        description: `This project utilizes the NextJS API feature for backend implementation.
                        The purpose of the project is to allow users to create a 'coding victory' which is an accomplishment that they achieved in coding-related matters. These victories are then shared with visitors of the site and can be liked by other users.`,
                        sourceLink: 'https://github.com/Legion555/coding-victories',
                        liveAppLink: 'https://coding-victories.vercel.app',
                        frontEndTech: [
                            {name: 'NextJS',icon: <SiNextDotJs className={`inline-block`} />},
                            {name: 'Redux',icon: <SiRedux className={`inline-block text-purple-500`} />},
                            {name: 'TailwindCSS',icon: <SiTailwindcss className={`inline-block text-blue-300`} />}
                        ],
                        backendTech: [
                            {name: 'NextJS Node API',icon: <SiNextDotJs className={`inline-block`} />},
                            {name: 'MongoDB',icon: <DiMongodb className={`inline-block text-green-600`} />}
                        ],
                        devopsTech: [
                            {name: 'Github',icon: <FaGithub className={`inline-block`} />},
                            {name: 'Vercel',icon: <IoLogoVercel className={`inline-block`} />}
                        ],
                        images: [
                            '/assets/coding_victories_1.png',
                            '/assets/coding_victories_2.png',
                            '/assets/coding_victories_3.png'
                        ]
                    }}
                    setViewProjectDetails={setViewProjectDetails} setSelectedProject={setSelectedProject}
                />

                <ProjectCard
                    data={{
                        title: 'Speech Recognition Quiz',
                        overview: `I implemented TensorFlow's Speech Recognition model to create a web quiz capable of running off of speech.`,
                        description: `I implemented TensorFlow's Speech Recognition model to create a web quiz capable of running off of speech.
                        The purpose was to enhance my understanding of machine learning models, while creating something enjoyable and innovative.`,
                        sourceLink: 'https://github.com/Legion555/tensorflow-speech-recognizer',
                        liveAppLink: 'https://tensorflow-speech-recognizer.vercel.app',
                        frontEndTech: [
                            {name: 'Next.js',icon: <SiNextDotJs className={`inline-block`} />},
                            {name: 'Redux',icon: <SiRedux className={`inline-block text-purple-500`} />},
                            {name: 'TailwindCSS',icon: <SiTailwindcss className={`inline-block text-blue-300`} />},
                            {name: 'TailwindCSS',icon: <SiTensorflow className={`inline-block text-yellow-400`} />}
                        ],
                        backendTech: null,
                        devopsTech: [
                            {name: 'Github',icon: <FaGithub className={`inline-block`} />},
                            {name: 'Vercel',icon: <IoLogoVercel className={`inline-block`} />}
                        ],
                        images: [
                            '/assets/speech_recognizer.png',
                            '/assets/cryptolytics_2.png',
                            '/assets/cryptolytics_3.png'
                        ]
                    }}
                    setViewProjectDetails={setViewProjectDetails} setSelectedProject={setSelectedProject}
                />

                <ProjectCard
                    data={{
                        title: 'Tempus | Ecommerce Application',
                        overview: `The focus of this project was to create an ecommerce web app using Next JS API.`,
                        description: `The focus of this project was to create an ecommerce web app using Next JS API.
                        In doing so, I managed to create a full stack application hosted entirely on Vercel.`,
                        sourceLink: 'https://github.com/Legion555/ecommerce-tempus',
                        liveAppLink: 'https://tempus-eight.vercel.app',
                        frontEndTech: [
                            {name: 'Next.js',icon: <SiNextDotJs className={`inline-block`} />},
                            {name: 'Redux',icon: <SiRedux className={`inline-block text-purple-500`} />},
                            {name: 'TailwindCSS',icon: <SiTailwindcss className={`inline-block text-blue-300`} />}
                        ],
                        backendTech: [
                            {name: 'NextJS Node API',icon: <IoLogoVercel className={`inline-block`} />},
                            {name: 'MongoDB',icon: <DiMongodb className={`inline-block text-green-500`} />}
                        ],
                        devopsTech: [
                            {name: 'Github',icon: <FaGithub className={`inline-block`} />},
                            {name: 'Vercel',icon: <IoLogoVercel className={`inline-block`} />}
                        ],
                        images: [
                            '/assets/tempus_1.png',
                            '/assets/tempus_2.png',
                            '/assets/tempus_3.png',
                            '/assets/tempus_4.png',
                            '/assets/tempus_5.png'
                        ]
                    }}
                    setViewProjectDetails={setViewProjectDetails} setSelectedProject={setSelectedProject}
                />

            </div>
        </section>
    )
}

const ProjectCard = ({data, setViewProjectDetails, setSelectedProject}) => {
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
        <animated.div className="project-card w-img-mobile md:w-img-desktop relative m-4 md:m-16 shadow border-2 border-gray-300 overflow-hidden"
            ref={cardElem}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: rotation.xys.interpolate(trans) }} >
            <div onClick={() => {
                setSelectedProject(data);
                setViewProjectDetails(true);
            }}>
                <div className="w-img-mobile md:w-img-desktop h-img-mobile md:h-img-desktop relative">
                    <Image className="object-fit" src={`${data.images[0]}`} alt="project image" layout="fill" loading="eager" />
                </div>
                <div className="project-card_overlay w-full h-full absolute top-0 left-0 flex items-end opacity-0 transition-all ease-in duration 300">
                    <div className="w-full h-full md:h-auto px-2 py-4 bg-gray-800 bg-opacity-85">
                        <div className="mb-4 flex justify-between items-center">
                            <h1 className="text-gray-100 text-base md:text-2xl">{data.title}</h1>
                            <div className="flex gap-4">
                                <Link href={`${data.liveAppLink}`} ><a target="_blank" rel="norefferer">
                                    <BsEyeFill className="text-xl md:text-3xl transform transition ease-in duration-300 text-yellow-200 hover:scale-125 hover:text-yellow-400" />
                                    </a></Link>
                                {data.sourceLink &&
                                    <Link href={`${data.sourceLink}`} ><a target="_blank" rel="norefferer">
                                        <BsCodeSlash className="text-xl md:text-3xl transform transition ease-in duration-300 text-yellow-200 hover:scale-125 hover:text-yellow-400 cursor-pointer" />
                                    </a></Link>
                                }
                                <p onClick={() => {
                                    setSelectedProject(data);
                                    setViewProjectDetails(true);
                                }}>
                                    <BiDetail className="text-xl md:text-3xl transform transition ease-in duration-300 text-yellow-200 hover:scale-125 hover:text-yellow-400 cursor-pointer" />
                                </p>
                            </div>
                        </div>
                        <p className="pl-2 border-l-2 border-gray-300 text-sm md:text-base text-justify text-gray-300">{data.overview}</p>
                    </div>
                </div>
            </div>
        </animated.div>
    )
}