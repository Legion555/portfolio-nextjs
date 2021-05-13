import {useSelector} from 'react-redux'
//icons
import {AiFillEye} from 'react-icons/ai'
import {BsFileEarmarkCode} from 'react-icons/bs'
import {ImCancelCircle} from 'react-icons/im'

export default function ProjectDetailsModal({data, setSelectedProject, setViewProjectDetails}) {
    const darkMode = useSelector(state => state.darkMode)
    
    const titleStyle = `text-2xl md:text-3xl lg:text-4xl relative ${darkMode ? 'text-gray-100' : 'text-gray-800'}`
    const subTitleStyle = `md:text-xl text-center ${darkMode ? 'text-gray-100' : 'text-gray-800'}`

    return (
        <div className="w-full h-screen fixed z-50 transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <div className={`w-full h-full ${darkMode ? 'bg-gray-600' : 'bg-gray-800'} bg-opacity-75`} onClick={() => {
                setSelectedProject({});
                setViewProjectDetails(false);
            }} />
            <div className={`w-full md:w-11/12 h-5/6 fixed transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-4 pt-8 rounded-xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}
                overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-400`}>
                <ImCancelCircle className="absolute top-2 right-2 text-2xl md:text-3xl text-red-600 cursor-pointer hover:text-red-400" onClick={() => {
                    setSelectedProject({});
                    setViewProjectDetails(false);
                }} />
                {/* Title */}
                <div className="w-full mb-12">
                    <h1 className={`max-w-full w-max mb-2 mx-auto text-center break-normal text-2xl md:text-4xl lg:text-5xl relative px-2 border-l-4 border-r-4 border-blue-400 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{data.title}</h1>
                    <div className="w-max mx-auto mb-4 flex gap-4">
                        <a href={data.liveAppLink} target="_blank" rel="norefferer" className="p-2 flex items-center gap-1 bg-blue-500 rounded
                            transition ease-in duration-150 hover:bg-blue-700 hover:text-gray-200 cursor-pointer"><AiFillEye className="text-xl" />Live App</a>
                        {data.sourceLink &&
                            <a href={data.sourceLink} target="_blank" rel="norefferer" className="p-2 flex items-center gap-1 bg-blue-300 rounded
                                transition ease-in duration-150 hover:bg-blue-700 hover:text-gray-200 cursor-pointer"><BsFileEarmarkCode className="text-xl" />Source Code</a>
                        }
                    </div>
                    <p className={`max-w-prose mx-auto text-center md:text-xl whitespace-pre-line ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{data.description}</p>
                </div>
                {/* Tech stack */}
                <div className="w-full mb-12">
                    <div className="w-full flex items-center gap-2 mb-4">
                        <div className="w-full h-2 bg-yellow-400" />
                        <h1 className={`${titleStyle} whitespace-nowrap`}>Technology Stack</h1>
                        <div className="w-full h-2 bg-yellow-400" />
                    </div>
                    <div className="flex items-center flex-col gap-4 md:gap-8">
                        <div className="max-w-1/3">
                            <h1 className={subTitleStyle}>Frontend</h1>
                            <div className="flex justify-center flex-wrap gap-2">
                                {data.frontEndTech.map(tech => 
                                    <p className="p-1 bg-gray-300 rounded-xl">
                                        {tech.icon} {tech.name}
                                    </p>
                                )}
                            </div>
                        </div>
                        {data.backendTech &&
                            <div className="max-w-1/3">
                                <h1 className={subTitleStyle}>Backend</h1>
                                <div className="flex justify-center flex-wrap gap-2">
                                    {data.backendTech.map(tech => 
                                        <p className="p-1 bg-gray-300 rounded-xl">
                                            {tech.icon} {tech.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                        }
                        <div className="max-w-1/3">
                            <h1 className={subTitleStyle}>DevOps</h1>
                            <div className="flex justify-center flex-wrap gap-2">
                                {data.devopsTech.map(tech => 
                                    <p className="p-1 bg-gray-300 rounded-xl">
                                        {tech.icon} {tech.name}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Gallery */}
                <div className="w-full">
                    <div className="w-full flex items-center gap-2 mb-4">
                        <div className="w-full h-2 bg-green-400" />
                        <h1 className={`${titleStyle} whitespace-nowrap`}>Gallery</h1>
                        <div className="w-full h-2 bg-green-400" />
                    </div>
                    <div className="flex justify-center flex-wrap gap-8">
                        {data.images.map(image => 
                            <img className={`w-full md:w-1/3 rounded-xl border-2 ${darkMode ? 'border-gray-300' : 'border-gray-600'}`} src={image} alt="snapshot" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}