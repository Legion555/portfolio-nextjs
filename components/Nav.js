import {Link} from 'react-scroll';

export default function Nav() {
    return (
        <div className="sticky top-0 w-full h-max flex justify-center bg-black z-50">
            <Link
                className="py-4 text-2xl text-gray-400 hover:text-yellow-400 cursor-pointer"
                style={{transition: '0.5s cubic-bezier(.19,.56,.84,.87)'}}
                activeClass="nav-active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
            >About</Link>
            <Link
                className="mx-8 py-4 text-2xl text-gray-400 hover:text-yellow-400 cursor-pointer"
                style={{transition: '0.5s cubic-bezier(.19,.56,.84,.87)'}}
                activeClass="nav-active"
                to="work"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
            >Work</Link>
            <Link
                className="py-4 text-2xl text-gray-400 hover:text-yellow-400 cursor-pointer"
                style={{transition: '0.5s cubic-bezier(.19,.56,.84,.87)'}}
                activeClass="nav-active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
            >Contact</Link>
        </div>
    )
}