//components
import Template from '../../components/projects/Template';
//icons
import { FaGithub, FaBitcoin } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiTailwindcss, SiNextDotJs, SiRedux } from 'react-icons/si';
import { VscGraph } from 'react-icons/vsc';



export default function Project1() {
    return (
        <Template
            title={'Cryptocurrency Analytics Platform'}
            overview={`This is a basic implementation of the CoinGecko API with the purpose of displaying trending cryptocurrency data.
            
            The purpose was to implement data visualization using React-vis.`}
            sourceLink={"https://github.com/Legion555/crypto-analytics"} liveAppLink={"https://crypto-analytics-legion555.vercel.app"}
            frontendTech={
                [{name: 'Next.js',icon: <SiNextDotJs className={`inline-block`} />},
                {name: 'Redux',icon: <SiRedux className={`inline-block text-purple-500`} />},
                {name: 'TailwindCSS',icon: <SiTailwindcss className={`inline-block text-blue-300`} />},
                {name: 'React-vis',icon: <VscGraph className={`inline-block text-blue-300`} />}]
            }
            backendTech={
                [{name: 'CoinGecko API',icon: <FaBitcoin className={`inline-block`} />}]
            }
            devopsTech={
                [{name: 'Github',icon: <FaGithub className={`inline-block`} />},
                {name: 'Vercel',icon: <IoLogoVercel className={`inline-block`} />}]
            }
            images={
                [{imageSource: '/assets/crypto_analytics.png'}]
            } />
    )
}