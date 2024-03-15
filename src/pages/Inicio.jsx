
import React from 'react'
import { Spotlight } from '../components/ui/Spotlight'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from 'react-i18next';
import ListaRedes from '../components/ListaRedes'

const Inicio = () => {

  const [t] = useTranslation("global")




  return (
    <div id='home' className='scroll-mt-[6rem] grid sm:grid-cols-3 md:grid-cols-2  mx-auto rounded-[2rem] dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative gap-2 sm:gap-0  xl:w-[70%] sm:h-[80vh] 2xl:h-auto '>


      {/* Efecto en pantalla */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill='#088c96' />

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-firefly-950 bg-silver-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1a2b2b)] transition-all 
      duration-300 ease-linear"></div>

      {/* Presentacion */}
      <div className='justify-self-center self-center text-silver-950 dark:text-silver-100 tracking-[1px] relative z-20  sm:col-start-1 sm:col-end-3 md:col-start-1 md:col-end-2  flex flex-col gap-5'>
        <div className='flex flex-col '>
          <h1 className='titulo text-[2.3rem] sm:text-[2.5rem] lg:text-[3.5rem] text-center sm:text-start bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400 font-bold '>César Aquino</h1>
          <div className='flex items-center '>
            <h2 className='text-[1.5rem] pt-1  text-fountain-blue-700 dark:text-fountain-blue-600 '>{t("presentation.specialty")}</h2>
            <iframe className='w-[2.8rem] h-[2.8rem]' title="GatitoProgramador" src="https://lottie.host/embed/dbb5c84b-7675-4da0-b8ae-820af9f17c24/GokBzvyzUc.json" ></iframe>
          </div>
          <p>{t("presentation.summary")}</p>
        </div>
        {/* Redes */}
        <ListaRedes className=' flex justify-start gap-5' />
      </div>

      {/* Avatar */}
      <div className='flex  items-center justify-self-center row-start-1  sm:col-start-3 sm:col-end-4  md:col-start-2 md:col-end-3' >
        <Avatar className='border-[3px] border-white   shadow-shark-900 dark:shadow-fountain-blue-300  shadow-[0px_0px_10px]  w-[12rem] h-[12rem] lg:w-[20rem] lg:h-[20rem] z-20 '>
          <AvatarImage src="https://res.cloudinary.com/drutrk0me/image/upload/f_auto,q_auto/dyqgg9j9ufpe8iuualyj
" className='object-cover' />
          <AvatarFallback>CA</AvatarFallback>
        </Avatar>

      </div>

    </div>
  )
}

export default Inicio
