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
            title={'Blog/Portfolio with Custom CMS'}
            overview={`The focus of this project was to create a portfolio website with a customized content management system. The owner of the website can log into the admin dashboard and edit blog posts or albums.
            
            This way, the owner has the benefit of a CMS without requiring any technical knowledge.
            
            Simplicity was the goal for this project.`}
            sourceLink={"https://github.com/Legion555/nextjs-sandbox-client"} liveAppLink={"https://nextjs-sandbox-client.vercel.app"}
            frontendTech={
                [{name: 'Next.js',icon: <SiNextDotJs className={`inline-block`} />},
                {name: 'Redux',icon: <SiRedux className={`inline-block text-purple-500`} />},
                {name: 'TailwindCSS',icon: <SiTailwindcss className={`inline-block text-blue-300`} />}]
            }
            backendTech={
                [{name: 'Node.js',icon: <FaNodeJs className={`inline-block text-green-400`} />},
                {name: 'MongoDB',icon: <DiMongodb className={`inline-block text-green-500`} />},]
            }
            devopsTech={
                [{name: 'Github',icon: <FaGithub className={`inline-block`} />},
                {name: 'Vercel',icon: <IoLogoVercel className={`inline-block`} />},
                {name: 'Google App Engine',icon: <AiFillGoogleCircle className={`inline-block text-blue-400`} />}]
            }
            images={
                [{imageSource: '/assets/project_cms.png'}]
            } />
    )
}