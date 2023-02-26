import React from 'react'

const SkillCard = ({badge, title, subTitle, description}) => {
  return (
    <div className="w-full py-6 flex flex-col gap-2.5 borderBottom">
        {badge === "" ? (
            <h6 className="w-28 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm">2022 — Сейчас</h6>
            ) : (
            <h6 className="w-24 text-center text-sm py-[1px] text-[#999] border-[1px] border-zinc-600 rounded-sm">{badge}</h6>
        )}
        <h2 className="text-lg font-titleFont text-gray-200 font-medium">{title}</h2>
        <p className="text-sm text-[#999] -mt-2">{subTitle}</p>
        <p className="text-base text-[#999] font-medium pr-10">{description}</p>
    </div>
  )
}

export default SkillCard