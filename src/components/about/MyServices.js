import React from 'react'
import ServicesCard from './ServicesCard'

import { FaAppStoreIos } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { AiTwotoneAppstore } from 'react-icons/ai'
import { SiAntdesign } from 'react-icons/si'

const MyServices = () => {
  return (
    <div className="grid grid-cols-2">
        <ServicesCard 
          icon={<BiCodeAlt />}
          title="Веб-разработка"
          subTitle="Если вам нужен сайт — смело можете обращайтеся ко мне. Срок разработки от 7 дней. Цена зависит от количества работ, но в среднем от 40.000 руб."
        />
        <ServicesCard 
          icon={<SiAntdesign />}
          title="Веб-дизайн"
          subTitle="Сделаю красивый, современный и удобный для пользователя дизайн сайта и landing page с учётом всех ваших пожеланий. Срок выполнения от 1 до 3 дней."
        />
        <ServicesCard 
          icon={<FaAppStoreIos />}
          title="Разработка мобильных приложений"
          subTitle="Сделаю мобильное приложение под Android/IOS по нужному Вам дизайну. В своей работе использую React Native."
        />
        <ServicesCard 
          icon={<AiTwotoneAppstore />}
          title="Техническая SEO оптимизация для сайта"
          subTitle="Сделаю аудит технической внутренней оптимизации вашего сайта и скажу, какие пункты SEO у вас ещё не оптимизированы!"
        />
    </div>
  )
}

export default MyServices