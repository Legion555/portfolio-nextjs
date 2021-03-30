//components
import Template from '../../components/projects/Template';
//icons
import { AiFillGoogleCircle} from 'react-icons/ai';
import { DiMongodb } from 'react-icons/di';
import { FaNodeJs, FaGithub } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiTailwindcss, SiNextDotJs, SiRedux } from 'react-icons/si';



export default function Project1() {
    return (
        <Template
            title={'Tempus | Ecommerce Application'}
            overview={`The focus of this project was to create an ecommerce web app using Next JS API.
            
            In doing so, I managed to create a full stack application hosted entirely on Vercel`}
            sourceLink={"https://github.com/Legion555/coding-victories"} liveAppLink={"https://nextjs-sandbox-client.vercel.app"}
            frontendTech={
                [{name: 'Next.js',icon: <SiNextDotJs className={`inline-block`} />},
                {name: 'Redux',icon: <SiRedux className={`inline-block text-purple-500`} />},
                {name: 'TailwindCSS',icon: <SiTailwindcss className={`inline-block text-blue-300`} />}]
            }
            backendTech={
                [{name: 'Vercel API',icon: <IoLogoVercel className={`inline-block`} />},
                {name: 'MongoDB',icon: <DiMongodb className={`inline-block text-green-500`} />},]
            }
            devopsTech={
                [{name: 'Github',icon: <FaGithub className={`inline-block`} />},
                {name: 'Vercel',icon: <IoLogoVercel className={`inline-block`} />}]
            }
            images={
                [{imageSource: '/assets/tempus_1.png'},
                {imageSource: '/assets/tempus_2.png'},
                {imageSource: '/assets/tempus_3.png'},
                {imageSource: '/assets/tempus_4.png'},
                {imageSource: '/assets/tempus_5.png'}]
            } />
    )
}