import Image from 'next/image';
import Link from 'next/link';
//redux
import {useSelector} from 'react-redux';



export default function Work() {
    const darkMode = useSelector(state => state.darkMode);

    return (
        <div className={`py-8 bg-gradient-to-b transition ease-in duration-150 ${darkMode ? 'from-blue-800 to-gray-600 text-gray-100' : 'from-blue-200 to-gray-100 text-gray-800'}`} id="work">
            <div className="text-center text-6xl font-bold">
                <div className="w-64 h-8 mx-auto bg-blue-400 relative top-16 z-0"></div>
                <h1 className="relative z-1">Projects</h1>
            </div>
            <div className="w-full mt-8 flex flex-col md:flex-row justify-evenly items-center flex-wrap">

                <ProjectCard imageName={'coding_victories_1'} name={'Coding Victories'}
                    overlayColor={'bg-blue-600'} detailsLink={'coding-victories'}
                    githubLink={'https://github.com/Legion555/coding-victories'} appLink={'https://nextjs-sandbox-client.vercel.app'} />

                <ProjectCard imageName={'tempus_1'} name={'Tempus'}
                    overlayColor={'bg-yellow-600'} detailsLink={'tempus'}
                    githubLink={'https://github.com/Legion555/ecommerce-tempus'} appLink={'https://tempus-eight.vercel.app'} />

                <ProjectCard imageName={'crypto_analytics'} name={'Crytocurrency Analytics Platform'}
                    overlayColor={'bg-yellow-600'} detailsLink={'crypto-analytics'}
                    githubLink={'https://github.com/Legion555/crypto-analytics'} appLink={'https://crypto-analytics-legion555.vercel.app'} />

                <ProjectCard imageName={'speech_recognizer'} name={'Speech recognition quiz'}
                    projectId={'ProjectThree'} overlayColor={'bg-green-600'} detailsLink={'speech-quiz'}
                    githubLink={'https://github.com/Legion555/tensorflow-speech-recognizer'} appLink={'https://tensorflow-speech-recognizer.vercel.app'} />
            </div>
        </div>
    )
}

const ProjectCard = ({imageName, name, overlayColor, detailsLink, githubLink, appLink}) => {
    return (
        <div className="w-img-mobile md:w-img-desktop m-4 md:m-16 shadow">
            <div className="h-max">
                <div className="w-img-mobile md:w-img-desktop h-img-mobile md:h-img-desktop relative">
                    <div className={`w-full h-full absolute top-0 left-0 rounded ${overlayColor}`} style={{transform: 'scaleX(1.05) rotate(3deg)'}} />
                    <div className={`w-full h-full absolute top-0 left-0 rounded ${overlayColor}`} style={{transform: 'scaleX(1.05) rotate(-3deg)'}} />
                    <Image className="object-fit" src={`/assets/${imageName}.png`} alt="project image" layout="fill" />
                </div>
                <div>
                    <h1 className="p-2 text-center text-xl md:text-3xl text-gray-200 bg-gray-800">{name}</h1>
                    <div className="flex flex-col md:flex-row text-center text-xl">
                        <Link href={`/projects/${detailsLink}`} target="_blank" >
                        <a target="_blank" rel="norefferer" className="w-full md:w-4/12 py-2 text-gray-100 outline-none bg-blue-600 hover:bg-blue-400 transition ease-in-out duration-150" >
                            Details</a>
                        </Link>
                        <a className="w-full md:w-4/12 py-2 text-gray-100 bg-yellow-600 hover:bg-yellow-400" style={{transition: '1s cubic-bezier(0.075, 0.80, 0.165, 1)'}}
                            href={githubLink} target="_blank" >Source code</a>
                        <a className="w-full md:w-4/12 py-2 text-gray-100 bg-green-600 hover:bg-green-400" style={{transition: '1s cubic-bezier(0.075, 0.80, 0.165, 1)'}}
                                href={appLink} target="_blank" >Live app</a>
                    </div>
                </div>
            </div>
        </div>
    )
}