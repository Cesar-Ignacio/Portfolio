
import React from 'react'
import { Spotlight } from '../components/ui/Spotlight'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from 'react-i18next';
import ListaRedes from '../components/ListaRedes'
import SeccionConteiner from '../components/SeccionConteiner';
import imgCesar from '../assets/imgCesar.webp'

const Inicio = () => {

  const [t] = useTranslation("global")

  return (

    <>
      <SeccionConteiner id='home' className='scroll-mt-[5rem] grid lg:grid-cols-2  xl:w-[70%] md:h-[34rem] '>

        {/* Efecto en pantalla */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"  />

        {/* Presentacion */}
        <div className='justify-self-center self-center text-silver-950 
       dark:text-silver-100 tracking-[1px] relative z-20 lg:col-start-1 lg:col-end-2  flex flex-col gap-5'>
          <div className='flex flex-col '>
            <h1 className='titulo text-[2.8rem] lg:text-[3.1rem] text-center md:text-start bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400 font-bold font-poppins'>{t("presentation.greeting")}</h1>
            <div className='flex items-center '>
              <h2 className='text-[1.5rem] pt-1  text-fountain-blue-700 dark:text-fountain-blue-600 font-poppins '>{t("presentation.specialty")}</h2>
              <iframe className='w-[2.8rem] h-[2.8rem]' title="GatitoProgramador" src="https://lottie.host/embed/dbb5c84b-7675-4da0-b8ae-820af9f17c24/GokBzvyzUc.json" ></iframe>
            </div>
            <p className='text-[1.1rem]'>{t("presentation.summary")}</p>
          </div>
          {/* Redes */}
          <ListaRedes className=' flex justify-start gap-5' />
        </div>

        {/* Avatar */}
        <div className='flex  items-center justify-self-center row-start-1 md:visible 
     lg:col-start-2 lg:col-end-3 ' >
          <Avatar className=' 
          size-[12rem] md:size-[17rem] lg:size-[20rem] z-20 '>
            <AvatarImage src={imgCesar} className='object-cover bg-opacity-20 bg-silver-950 dark:bg-silver-200 dark:bg-opacity-20 shadow-2xl backdrop-filter backdrop-blur-[3px] border border-gray-300 ' alt={"CesarTello"} />
            <AvatarFallback>CA</AvatarFallback>
          </Avatar>
        </div>
        {/* LETRAS PARALELAS */}
        <div className='absolute bottom-0 righ-0 w-[100%] h-[100%] overflow-hidden  invisible lg:visible -z-10'>
          <span className='rotate-[90deg] text-[#3d646290] font-poppins font-bold text-[15rem] absolute top-[12rem] right-[-19rem]  '>CESAR</span>
          <span className='rotate-[90deg] text-[#3d64629a] font-poppins font-bold text-[12rem] absolute top-[8rem] right-[5rem]'>TELLO</span>
        </div>
      </SeccionConteiner>

    </>

  )
}

export default Inicio