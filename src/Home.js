import React from 'react'
import Left from './components/home/Left'

import { FaUserAlt } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between">
        <div className="w-16 h-96 bg-transparent flex flex-col gap-4">
          <div className="w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group">
            {/* Иконка для боковой панели */}
            <div className="flex flex-col gap-1.5 overflow-hidden">
              <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
              <span className="w-8 h-[2px] bg-textColor inline-block group-hover:bg-designColor duration-300"></span>
              <span className="w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-designColor"></span>
            </div>
          </div>
          {/* Другие иконки */}
          <div className="w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center justify-between">
            <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><FaUserAlt /><span className="absolute text-black font-medium text-sm bg-designColor px-2 py-[3px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">О себе</span></span>
            <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><FaUserAlt /><span className="absolute text-black font-medium text-sm bg-designColor px-2 py-[3px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">Навыки</span></span>
            <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><FaUserAlt /><span className="absolute text-black font-medium text-sm bg-designColor px-2 py-[3px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">Конкурсы</span></span>
            <span className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><FaUserAlt /><span className="absolute text-black font-medium text-sm bg-designColor px-2 py-[3px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">Работы</span></span>
          </div>
        </div>
        <div className="w-[94%] h-full bg-transparent flex items-center">
            {/* Делаем левую часть */}
            <Left />
            {/* Делаем правую часть */}
            <div className="w-8/12 h-[95%] bg-bodyColor"></div>
        </div>
    </div>
  )
}

export default Home