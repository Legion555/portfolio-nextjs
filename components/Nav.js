import {Link} from 'react-scroll';
import {BsSun, BsMoon} from 'react-icons/bs'

export default function Nav({darkMode, setDarkMode}) {
    return (
        <div className={`sticky top-0 w-full h-max flex justify-between items-center ${darkMode ? 'text-gray-100 bg-black' : 'text-gray-800 bg-white' } z-50`}>
            <div/>
            <div className="py-4">
                <Link
                    className="py-4 md:text-2xl hover:text-yellow-400 cursor-pointer"
                    style={{transition: '0.5s cubic-bezier(.19,.56,.84,.87)'}}
                    activeClass="nav-active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >About</Link>
                <Link
                    className="mx-8 py-4 md:text-2xl hover:text-yellow-400 cursor-pointer"
                    style={{transition: '0.5s cubic-bezier(.19,.56,.84,.87)'}}
                    activeClass="nav-active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >Work</Link>
                <Link
                    className="py-4 md:text-2xl hover:text-yellow-400 cursor-pointer"
                    style={{transition: '0.5s cubic-bezier(.19,.56,.84,.87)'}}
                    activeClass="nav-active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >Contact</Link>
            </div>
            <div>
                {darkMode ?
                    <button className="rounded-full mr-4 p-1 text-2xl md:text-4xl text-gray-100 focus:outline-none" style={{border: '1px solid white'}}
                        onClick={() => {setDarkMode(false); localStorage.setItem('darkmode', 'light')}}><BsMoon /></button>
                :
                    <button className="rounded-full mr-4 p-1 text-2xl md:text-4xl text-yellow-400 focus:outline-none" style={{border: '1px solid orange'}}
                        onClick={() => {setDarkMode(true); localStorage.setItem('darkmode', 'dark')}}><BsSun /></button>
                }
            </div>
        </div>
    )
}