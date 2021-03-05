//icons
import {AiOutlineLink, AiFillGoogleCircle} from 'react-icons/ai'
import { DiMongodb } from 'react-icons/di'
import { FaNodeJs, FaGithub, FaDatabase, FaInfinity } from 'react-icons/fa'
import { IoLogoVercel } from 'react-icons/io5'
import { SiTailwindcss, SiNextDotJs, SiRedux, SiTensorflow } from 'react-icons/si'
import { RiLayoutMasonryLine } from 'react-icons/ri'
import { VscGraph } from 'react-icons/vsc'
//components
import ProjectOne from './projects/ProjectOne'
import ProjectTwo from './projects/ProjectTwo'
import ProjectThree from './projects/ProjectThree'
//images
import Image from 'next/image'
import { useState } from 'react'

export default function Work() {
    const [projectModal, setProjectModal] = useState(null);

    return (
        <div className="py-8" id="work">
            <div className="w-max m-auto px-4 text-4xl">
                <h1>Projects</h1>
                <div className="w-full h-0.5 bg-yellow-600" />
            </div>
            <div className="w-full mt-8 flex flex-col md:flex-row justify-evenly items-center flex-wrap">
                <ProjectCard imageName={'project_cms'} name={'Portfolio/Blog with custom CMS'}
                    projectModal={projectModal} setProjectModal={setProjectModal}
                    projectId={'ProjectOne'}
                    githubLink={'https://github.com/Legion555/nextjs-sandbox-client'} appLink={'https://nextjs-sandbox-client.vercel.app'} />
                {projectModal === 'ProjectOne' &&
                    <ProjectOne />
                }
                <ProjectCard imageName={'crypto_analytics'} name={'Crytocurrency Analytics Platform'}
                    projectModal={projectModal} setProjectModal={setProjectModal}
                    projectId={'ProjectTwo'}
                    githubLink={'https://github.com/Legion555/crypto-analytics'} appLink={'https://crypto-analytics-legion555.vercel.app'} />
                {projectModal === 'ProjectTwo' &&
                    <ProjectTwo />
                }
                <ProjectCard imageName={'speech_recognizer'} name={'Speech recognition quiz'}
                    projectModal={projectModal} setProjectModal={setProjectModal}
                    projectId={'ProjectThree'}
                    githubLink={'https://github.com/Legion555/tensorflow-speech-recognizer'} appLink={'https://tensorflow-speech-recognizer.vercel.app'} />
                {projectModal === 'ProjectThree' &&
                    <ProjectThree />
                }
            </div>
        </div>
    )
}

const ProjectCard = ({imageName, name, projectModal, setProjectModal, projectId, githubLink, appLink}) => {
    return (
        <div className="w-img-mobile md:w-img-desktop shadow m-4 md:m-16">
            <div className="w-img-mobile md:w-img-desktop h-img-mobile md:h-img-desktop relative">
                <Image className="object-fit" src={`/assets/${imageName}.png`} alt="project image" layout="fill" />
            </div>
            <div>
                <h1 className="p-2 text-center text-xl md:text-3xl text-gray-200 bg-gray-800">{name}</h1>
                <div className="flex flex-col md:flex-row text-center text-xl ">
                    <button className="w-full md:w-4/12 py-2 text-gray-100 bg-blue-600 outline-none"
                        onClick={() => {if(projectModal !== projectId) {setProjectModal(projectId)} else {setProjectModal(null)} }} >
                        {projectModal !== projectId ? "Details" : "Close details"}</button>
                    <a className="w-full md:w-4/12 py-2 text-gray-100 bg-yellow-600"
                        href={githubLink} target="_blank" >Source code</a>
                    <a className="w-full md:w-4/12 py-2 text-gray-100 bg-green-600"
                        href={appLink} target="_blank" >Live app</a>
                </div>
            </div>
        </div>
    )
}