
import React from 'react'
import { Spotlight } from '../components/ui/Spotlight'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from 'react-i18next';
import ListaRedes from '../components/ListaRedes'
const Inicio = () => {

  const [t] = useTranslation("global")

  return (
    <div id='home' className='scroll-mt-[6rem] grid  md:grid-cols-2 
     mx-auto rounded-[2rem] dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative sm:gap-0  xl:w-[70%]  2xl:h-auto h-[80vh] sm:h-[80vh] '>

      {/* Efecto en pantalla */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill='#088c96' />

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-firefly-950 bg-silver-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1a2b2b)] transition-all 
      duration-300 ease-linear "></div>

      {/* Presentacion */}
      <div className='justify-self-center self-center text-silver-950 
       dark:text-silver-100 tracking-[1px] relative z-20 md:col-start-1 md:col-end-2  flex flex-col gap-5'>
        <div className='flex flex-col '>
          <h1 className='titulo text-[3.8rem] md:text-[3.8rem] lg:text-[4.7rem] text-center md:text-start bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400 font-bold font-poppins'>César Tello</h1>
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
      <div className='flex  items-center justify-self-center row-start-1 invisible 
     md:col-start-2 md:col-end-3  md:pb-[1rem] lg:pb-[0rem] ' >
        <Avatar className='border-[3px] border-white   shadow-shark-900 dark:shadow-fountain-blue-300  shadow-[0px_0px_10px] 
          w-[12rem] h-[12rem] md:w-[17rem] md:h-[17rem] lg:w-[20rem] lg:h-[20rem] z-20 '>
          <AvatarImage src="https://res.cloudinary.com/drutrk0me/image/upload/f_auto,q_auto/dyqgg9j9ufpe8iuualyj
" className='object-cover' />
          <AvatarFallback>CA</AvatarFallback>
        </Avatar>

      </div>
      {/* Patrones e imagen*/}
      <div className='absolute bottom-0 righ-0 w-[100%] h-[100%] overflow-hidden z-[5] '>
        <img src="https://res.cloudinary.com/drutrk0me/image/upload/v1710710811/samples/ah2yvhr7vniwii1sjlhf.png" alt="ing" className='size-[40rem] object-contain bottom-[-0rem] right-[-5rem] absolute z-[-1] drop-shadow-[-9px_-2px_0px_#f7f7f7]' />
        <span className='rotate-[90deg] text-[#3d646290] font-poppins font-bold text-[15rem] absolute top-[12rem] right-[-19rem]'>CESAR</span>
        <span className='rotate-[90deg] text-[#3d64629a] font-poppins font-bold text-[12rem] absolute top-[12rem] right-[7rem] z-[-2]'>TELLO</span>
      </div>

    </div>
  )
}

export default Inicio
