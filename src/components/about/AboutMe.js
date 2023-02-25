import React from 'react'

const AboutMe = () => {
  return (
    <div className="flex pb-6">
        <div className="w-1/2 text-zinc-400 borderRight flex flex-col p-6">
            <div className="py-6">
                <h2 className="font-semibold mb-1 text-lg">Привет! Меня зовут Илья</h2>
                <p className="text-base leading-6">
                    Добро пожаловать на мой сайт. Я начинающий frontend разработчик из Волгограда. Постоянно развиваюсь и совершенствую свои навыки. Буду рад обратной связи.
                </p>
            </div>
        </div>
        <div className="w-1/2 p-6">
            <ul>
                <li className="aboutRightLi"><span className="aboutRightLiSpan">Возраст:</span>18</li>
                <li className="aboutRightLi"><span className="aboutRightLiSpan">Гражданство:</span>РФ</li>
                <li className="aboutRightLi"><span className="aboutRightLiSpan">Адрес:</span>Россия, г. Волгоград</li>
                <li className="aboutRightLi"><span className="aboutRightLiSpan">Работа:</span>Свободен</li>
            </ul>
        </div>
    </div>
  )
}

export default AboutMe