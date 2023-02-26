import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Left from './components/home/Left'

import { FaUserAlt } from 'react-icons/fa'
import { AiFillCompass, AiFillProject } from 'react-icons/ai'
import { BsFillCalendarEventFill } from 'react-icons/bs'
import { MdOutlineClose } from 'react-icons/md'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Competitions from './components/competitions/Competitions'
import Projects from './components/projects/Projects'
const Home = () => {

  const [about, setAbout] = useState(true);
  const [skills, setSkills] = useState(false);
  const [competitions, setCompetitions] = useState(false);
  const [projects, setProjects] = useState(false);

  return (
    <div className="w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between">
        <div className="w-16 h-96 bg-transparent flex flex-col gap-4">
          {/* Другие иконки */}
          <div className="w-full h-80 bg-bodyColor rounded-3xl py-6 flex flex-col items-center justify-between">
            <span onClick={() => 
              setAbout(true) &
              setSkills(false) &
              setProjects(false) &
              setCompetitions(false)} 
              className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><FaUserAlt /><span className="absolute text-black font-medium text-sm bg-designColor px-2 py-[3px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">О себе</span></span>
            <span onClick={() => 
              setAbout(false) &
              setSkills(true) &
              setProjects(false) &
              setCompetitions(false)}
              className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><AiFillCompass /><span className="absolute text-black font-medium text-sm bg-designColor px-2 py-[3px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">Навыки</span></span>
            <span onClick={() => 
              setAbout(false) &
              setSkills(false) &
              setProjects(false) &
              setCompetitions(true)}
              className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><BsFillCalendarEventFill /><span className="absolute text-black font-medium text-sm bg-designColor px-2 py-[3px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">Конкурсы</span></span>
            <span onClick={() => 
              setAbout(false) &
              setSkills(false) &
              setProjects(true) &
              setCompetitions(false)}
              className="w-full h-6 text-textColor text-xl flex items-center justify-center hover:text-designColor duration-300 cursor-pointer relative group"><AiFillProject /><span className="absolute text-black font-medium text-sm bg-designColor px-2 py-[3px] rounded-xl left-0 translate-x-8 group-hover:translate-x-12 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100">Работы</span></span>
          </div>
        </div>
        <div className="w-[94%] h-full bg-transparent flex items-center">
            {/* Делаем левую часть */}
            <Left />
            {/* Делаем правую часть */}
            <div className="w-8/12 h-[95%] bg-bodyColor">
              <div className="w-full h-[96%] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
                {about && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <About />
                  </motion.div>
                )}
                {skills && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Skills />
                  </motion.div>
                )}
                {competitions && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Competitions />
                  </motion.div>
                )}
                {projects && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Projects />
                  </motion.div>
                )}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home