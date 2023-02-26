import React from 'react'
import Title from '../home/Title'
import Competencies from './Competencies'
import Education from './Education'

const Skills = () => {
  return (
    <section id="skills" className="">
        <Title title="Моё" subTitle="резюме" />
        <Education /> 
        <Title title="Мои" subTitle="навыки" />
        <Competencies />
    </section>
  )
}

export default Skills