import React from 'react'

import { GiCheckMark } from 'react-icons/gi'

const CompetencyLine = ({title}) => {
  return (
    <div className="flex items-center mb-1">
        <span className="text-designColor mr-2"><GiCheckMark /></span>
        <h6 className="text-gray-300 font-base font-bodyFont">{title}</h6>
    </div>
  )
}

export default CompetencyLine