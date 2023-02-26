import React from 'react'
import SkillsTitle from './SkillsTitle'

import { MdWork } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'
import SkillCard from './SkillCard'

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
        <div className="col-span-4">
            <SkillsTitle title="Опыт" icon={<MdWork />} />
            <SkillCard badge="" title="Веб-дизайн" subTitle="Фриланс" description="Разработка сайтов на заказ любой сложности. В том числе перенос на Тильду" />
            <SkillCard badge="2021 — 2022" title="Веб-дизайн" subTitle="Web-Rix Studio" description="Работал 1 год в студии, где мы разрабатывали сайты под ключ для крупных компаний" />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
        </div>
        <div className="col-span-4">
          <SkillsTitle title="Образование" icon={<FaGraduationCap />} />
          <SkillCard badge="" title="ФГАОУ ВО ВолГУ" subTitle="Информационные системы и технологии" description="Успешно сдав экзамены, я поступил в Волгоградский госдарственный университет" />
          <SkillCard badge="2010 — 2022" title="МОУ Лицей №10" subTitle="Среднее образование" description="Окончил МОУ Лицей №10 Кировского района г. Волгограда, отучившись 11 классов" />
        </div>
    </div>
  )
}

export default Education