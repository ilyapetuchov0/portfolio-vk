import React from 'react'
import SkillsTitle from './SkillsTitle'

import { SiArtstation } from 'react-icons/si'
import { FaFlag } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { IoIosPaper } from 'react-icons/io'
import { GiCheckMark } from 'react-icons/gi'
import CompetencyLine from './CompetencyLine'

const Competencies = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
        <div className="col-span-4">
            <SkillsTitle title="Дизайн" icon={<SiArtstation />} />
            <div className="py-4">
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Дизайн сайтов</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Дизайн мобильных приложений</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[60%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
            </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
            <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
        </div>
        <div className="col-span-4">
            <SkillsTitle title="Языки" icon={<FaFlag />} />
            <div className="py-4">
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Русский</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">Английский</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
            </div>
        </div>
        <div className="col-span-4">
            <SkillsTitle title="Кодинг" icon={<BiCodeAlt />} />
            <div className="py-4">
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">HTML/CSS</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">JS</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[80%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
                <div className="py-3 border-b-[1px] border-zinc-800">
                    <p className="text-base text-textColor -mb-1.5">React</p>
                    <span className="w-full bg-zinc-600 h-1 inline-flex relative">
                        <span className="w-[70%] h-full absolute top-0 left-0 bg-designColor"></span>
                    </span>
                </div>
            </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
            <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
        </div>
        <div className="col-span-4">
            <SkillsTitle title="Знания" icon={<IoIosPaper />} />
            <div className="py-4">
                <CompetencyLine title="Хостинг веб-сайтов" />
                <CompetencyLine title="SEO оптимизация" />
                <CompetencyLine title="Адаптивная вёрстка сайта" />
                <CompetencyLine title="Разработка мобильных приложений" />
                <CompetencyLine title="Создание сайтов на Тильде" />
                <CompetencyLine title="Веб-дизайн" />
                <CompetencyLine title="Создание обложек" />
            </div>
        </div>
    </div>
  )
}

export default Competencies