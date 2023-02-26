import React from 'react'
import { avatarImg } from '../../assets'
// import { SlSocialVkontakte, SlEnvolope, SlPaperPlane, SlSocialGithub } from "react-icons/sl";
import {FaVk, FaEnvelope, FaPaperPlane, FaGithub} from "react-icons/fa";

const Left = () => {
  return (
    <div className="w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow z-10">
        <div className="w-full h-3/5">
            <img className="w-full h-full object-cover rounded-2xl" src={avatarImg} alt="Avatat img" loading="priority" />
        </div>
        <div className="w-full h-2/5 ">
            {/* Делаем информацию */}
            <div className="flex flex-col items-center gap-2 py-10">
                <h1 className="text-textColor text-4xl font-semibold">Илья Петухов</h1>
                <p className="text-base text-designColor tracking-wide">Фронтенд-разработчик</p>
                <div className="flex justify-center gap-2 mt-2">
                    <a href="https://github.com/ilyapetuchov0" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl mr-1"><FaGithub /></a>
                    <a href="https://vk.com/ilyapetukhov01" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl mr-1"><FaVk /></a>
                    <a href="mailto:ilyapetuchov0@gmail.com" target="_blank" className="hover:text-designColor duration-300 cursor-pointer text-xl mr-1"><FaEnvelope /></a>
                </div>
            </div>
            {/* Делаем кнопочки */}
            <div className="flex h-14">
                <a className="w-1/2 text-xl tracking-wide hover:text-designColor duration-300" href="https://t.me/kiberking134" target="_blank" rel="noreferrer">
                    <span className="w-full h-full flex justify-center items-center gap-3 borderTop"><FaPaperPlane />Связаться </span>
                </a>
                <a className="w-1/2 text-xl tracking-wide hover:text-designColor duration-300" href="mailto:ilyapetuchov0@gmail.com" target="_blank" rel="noreferrer">
                    <span className="w-full h-full flex justify-center items-center gap-3 borderTop"><FaEnvelope />Написать </span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Left