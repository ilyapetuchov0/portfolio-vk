import React from 'react'

const ProjectCard = ({title, category, image, link}) => {

  const handleClick = () => {
    window.open(link, '_blank')
  };

  return (
    <div className="w-full py-8 flex flex-col justify-center items-center borderBottom">
        <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group ">
          {link === "" ? (
            <img src={image} />
          ) : (
            <button onClick={handleClick}><img src={image} /></button>
          )}
          {/* <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-t from-green-600 via-green-600 to-green-200 opacity-20"></div> */}
        </div>
        <h3 className="font-titleFont text-lg font-semibold text-[#ccc]">{title}</h3>
        <a href={link} rel="noopener noreferrer" className="text-base text-gray-400 -mt-1">{category}</a>
    </div>
  )
}

export default ProjectCard