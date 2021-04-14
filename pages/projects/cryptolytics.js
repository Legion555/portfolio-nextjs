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
            overview={`This web app uses the CoinGecko API for the purpose of displaying cryptocurrency data.`}
            sourceLink={"https://github.com/Legion555/cryptolytics"} liveAppLink={"https://cryptolytics.vercel.app/"}
            frontendTech={
                [{name: 'Next.js',icon: <SiNextDotJs className={`inline-block`} />},
                {name: 'Redux',icon: <SiRedux className={`inline-block text-purple-500`} />},
                {name: 'TailwindCSS',icon: <SiTailwindcss className={`inline-block text-blue-300`} />},
                {name: 'ReCharts',icon: <VscGraph className={`inline-block text-blue-300`} />}]
            }
            backendTech={
                [{name: 'CoinGecko API',icon: <FaBitcoin className={`inline-block`} />}]
            }
            devopsTech={
                [{name: 'Github',icon: <FaGithub className={`inline-block`} />},
                {name: 'Vercel',icon: <IoLogoVercel className={`inline-block`} />}]
            }
            images={
                [{imageSource: '/assets/cryptolytics_1.png'},
                {imageSource: '/assets/cryptolytics_2.png'},
                {imageSource: '/assets/cryptolytics_3.png'},]
            } />
    )
}