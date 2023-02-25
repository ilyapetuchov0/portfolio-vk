import React from 'react'
import Title from '../home/Title'
import AboutMe from './AboutMe'
import MyServices from './MyServices'

const About = () => {
  return (
    <section id="about" className="w-full ">
        <Title title="Обо" subTitle="Мне" />
        <AboutMe />
        <Title title="Мои" subTitle="услуги" />
        <MyServices />
    </section>
  )
}

export default About