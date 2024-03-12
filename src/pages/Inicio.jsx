
import React from 'react'
import { Tooltip } from '@chakra-ui/react'
import cv from '../../public/CV-CESAR-TELLO.pdf'
import { Spotlight } from '../components/ui/Spotlight'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from 'react-i18next';

const Inicio = () => {

  const [t] = useTranslation("global")

  const handleClick = () => {

    window.open(cv)

  }


  return (
    <div id='home'  className='scroll-mt-[6rem] grid sm:grid-cols-3 md:grid-cols-2  mx-auto rounded-[2rem] dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative gap-2 sm:gap-0  xl:w-[70%] sm:h-[80vh] 2xl:h-auto '>


      {/* Efecto en pantalla */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill='#088c96' />

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-firefly-950 bg-silver-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1a2b2b)] transition-all 
      duration-300 ease-linear"></div>

      {/* Presentacion */}
      <div className='justify-self-center self-center text-silver-950 dark:text-silver-100 tracking-[1px] relative z-20  sm:col-start-1 sm:col-end-3 md:col-start-1 md:col-end-2  flex flex-col gap-5'>
        <div className='flex flex-col '>
          <h1 className='text-[2.3rem] sm:text-[2.5rem] lg:text-[3.5rem] text-center sm:text-start bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400 font-bold '>César Aquino</h1>
          <div className='flex items-center '>
            <h2 className='text-[1.5rem] pt-1  text-fountain-blue-700 dark:text-fountain-blue-600 '>{t("presentation.specialty")}</h2>
            <iframe className='w-[2.8rem] h-[2.8rem]' title="GatitoProgramador" src="https://lottie.host/embed/dbb5c84b-7675-4da0-b8ae-820af9f17c24/GokBzvyzUc.json" ></iframe>
          </div>
          <p>{t("presentation.summary")}</p>
        </div>
        {/* Redes */}
        <div className=' flex justify-start gap-5'>
          <Tooltip hasArrow label='Github' bg='gray.300' color='black'>
            <a href="https://github.com/Cesar-Ignacio" target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github w-[2.3rem]" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
          </Tooltip>

          <Tooltip hasArrow label='Linkedin' bg='gray.300' color='black'>
            <a href="https://www.linkedin.com/in/cesarignacioaquino/" target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin w-[2.3rem]" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
          </Tooltip>

          <Tooltip hasArrow label='Descargar CV' bg='gray.300' color='black'>
            <a href='' target='_blank' onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cloud-download-fill w-[2.3rem]" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.5a.5.5 0 0 1 1 0V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0m-.354 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V11h-1v3.293l-2.146-2.147a.5.5 0 0 0-.708.708z" />
              </svg>

            </a>
          </Tooltip>
        </div>
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
