//components
import Template from '../../components/projects/Template';
//icons
import { DiMongodb } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiTailwindcss, SiNextDotJs, SiRedux } from 'react-icons/si';



export default function Project1() {
    return (
        <Template
            title={'Coding Victories'}
            overview={`This project utilizes the NEXT API feature for backend implementation. I connected it with MongoDB as its database.
            
            The purpose of the project is to allow users to create a 'coding victory' which is an accomplishment that they achieved in coding-related matters. These victories are then shared with visitors of the site and can be liked by other users.`}
            sourceLink={"https://github.com/Legion555/coding-victories"} liveAppLink={"https://coding-victories.vercel.app/"}
            frontendTech={
                [{name: 'Next.js',icon: <SiNextDotJs className={`inline-block`} />},
                {name: 'Redux',icon: <SiRedux className={`inline-block text-purple-500`} />},
                {name: 'TailwindCSS',icon: <SiTailwindcss className={`inline-block text-blue-300`} />}]
            }
            backendTech={
                [{name: 'Next.js API',icon: <SiNextDotJs className={`inline-block`} />},
                {name: 'MongoDB',icon: <DiMongodb className={`inline-block text-green-600`} />},]
            }
            devopsTech={
                [{name: 'Github',icon: <FaGithub className={`inline-block`} />},
                {name: 'Vercel',icon: <IoLogoVercel className={`inline-block`} />}]
            }
            images={
                [{imageSource: '/assets/coding_victories_1.png'},
                {imageSource: '/assets/coding_victories_2.png'},
                {imageSource: '/assets/coding_victories_3.png'}]
            } />
    )
}