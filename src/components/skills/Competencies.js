import React from 'react'
import SkillsTitle from './SkillsTitle'

import { SiArtstation } from 'react-icons/si'
import { FaFlag } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { IoIosPaper } from 'react-icons/io'
import { GiCheckMark } from 'react-icons/gi'

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
    </div>
  )
}

export default Competencies