import React from 'react'

import itRix from "../../assets/projectsImg/itRix.png"
import mobileApp from "../../assets/projectsImg/mobileApp.jpg"
import evrostroyPlus from "../../assets/projectsImg/evrostroyPlus.png"
import asGroup from "../../assets/projectsImg/asGroup.png"
import profitpol from "../../assets/projectsImg/profitpol.png"
import priemMetalla from "../../assets/projectsImg/priemMetalla.png"
import yStroyka from "../../assets/projectsImg/yStroyka.png"

import Title from '../home/Title'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div>
        <Title title="Недавние" subTitle="проекты" />
        <div className="w-full grid grid-cols-2 gap-10">
            <div className="px-6">
                <ProjectCard title="Приложение для сайта" category="Мобильное приложение" image={mobileApp} link="" />
                <ProjectCard title="Агентство IT-RIX" category="Сайт" image={itRix} link="https://it-rix.com/" />
                <ProjectCard title="Кровельные материалы" category="Сайт" image={yStroyka} link="https://project3257727.tilda.ws/" />
            </div>
            <div className="px-6 ">
                <ProjectCard title="Дизайн интерьера" category="Сайт" image={asGroup} link="https://as-group.pro/dizayn-interiera" />
                <ProjectCard title="Дизайнерский ремонт" category="Сайт" image={evrostroyPlus} link="https://evrostroyplus.ru/" />
                <ProjectCard title="Промышленные полы" category="Сайт" image={profitpol} link="https://profitpol.ru/profit_pol"/>
                <ProjectCard title="Прием металлолома" category="Сайт" image={priemMetalla} link="https://вторметаллпром.рф/" />
            </div>
        </div>
    </div>
  )
}

export default Projects