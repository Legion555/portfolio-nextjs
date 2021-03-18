//components
import Template from '../../components/projects/Template';
//icons
import { FaGithub } from 'react-icons/fa'
import { IoLogoVercel } from 'react-icons/io5'
import { SiTailwindcss, SiNextDotJs, SiTensorflow, SiRedux } from 'react-icons/si'



export default function Project1() {
    return (
        <Template
            title={'Speech Recognition Quiz'}
            overview={`I implemented TensorFlow's Speech Recognition model to create a web quiz capable of running off of speech.
            
            The purpose was to enhance my understanding of machine learning models, while creating something enjoyable and innovative.`}
            sourceLink={"https://github.com/Legion555/tensorflow-speech-recognizer"} liveAppLink={"https://tensorflow-speech-recognizer.vercel.app"}
            frontendTech={
                [{name: 'Next.js',icon: <SiNextDotJs className={`inline-block`} />},
                {name: 'Redux',icon: <SiRedux className={`inline-block text-purple-500`} />},
                {name: 'TailwindCSS',icon: <SiTailwindcss className={`inline-block text-blue-300`} />},
                {name: 'TailwindCSS',icon: <SiTensorflow className={`inline-block text-yellow-400`} />}]
            }
            backendTech={null}
            devopsTech={
                [{name: 'Github',icon: <FaGithub className={`inline-block`} />},
                {name: 'Vercel',icon: <IoLogoVercel className={`inline-block`} />}]
            }
            images={
                [{imageSource: '/assets/speech_recognizer.png'}]
            } />
    )
}