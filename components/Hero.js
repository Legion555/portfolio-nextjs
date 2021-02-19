import { Link } from 'react-scroll';
import ParticlesContainer from './ParticlesContainer'



export default function Home() {
    return (
        <div className="w-full h-screen bg-gray-800">
        <div className="w-full h-screen flex justify-center absolute top-0 left-0">
            <div className="mt-40">
                <h1 className="mb-4 md:mb-8 text-4xl md:text-6xl xl:text-8xl text-center text-yellow-300">joshua_lausberg</h1>
                <p className="text-2xl md:text-4xl xl:text-6xl text-center text-gray-200">front-end_developer</p>
                <div className="mt-16 flex justify-center">
                    <Link
                        className="px-4 md:px-8 py-4 text-xl md:text-2xl text-gray-200 hover:bg-yellow-400 hover:text-gray-800 cursor-pointer"
                        style={{borderLeft: "3px solid #FCD34D", transition: '1.5s cubic-bezier(0.075, 0.82, 0.165, 1)'}}
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >About</Link>
                    <Link
                        className="px-4 md:px-8 py-4 text-xl md:text-2xl text-gray-200 hover:bg-yellow-400 hover:text-gray-800 cursor-pointer"
                        style={{border: "3px solid #FCD34D", transition: '1.5s cubic-bezier(0.075, 0.82, 0.165, 1)'}}
                        activeClass="active"
                        to="work"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Work</Link>
                    <Link
                        className="px-4 md:px-8 py-4 text-xl md:text-2xl text-gray-200 hover:bg-yellow-400 hover:text-gray-800 cursor-pointer"
                        style={{borderRight: "3px solid #FCD34D", transition: '1.5s cubic-bezier(0.075, 0.82, 0.165, 1)'}}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Contact</Link>
                </div>
            </div>
        </div>
        <ParticlesContainer />
        </div>
    )
}