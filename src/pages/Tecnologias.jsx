import React, { useEffect, useState } from 'react'
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards/infinite-moving-cards'
import db from '../db/db';
import { collection, getDocs } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import SeccionConteiner from '../components/SeccionConteiner';
const Tecnologias = () => {

  const [listTecFront, setListTecFront] = useState();
  const [listTecBack, setListTecBack] = useState();
  const [listTecRec, setListTecRec] = useState();

  const [t] = useTranslation("global")

  useEffect(() => {
    const q = collection(db, "tecnologias");
    getDocs(q).then(({ docs }) => {
      const nuevoArray = docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })

      setListTecFront(nuevoArray.filter(doc => doc.tema === "frontend"))
      setListTecBack(nuevoArray.filter(doc => doc.tema === "backend"))
      setListTecRec(nuevoArray.filter(doc => doc.tema === "recurso"))
    })
  }, [])


  return (
    <>
      <SeccionConteiner id='tec' className='scroll-mt-[5rem] '>
          <div className='text-silver-950 dark:text-silver-100 tracking-[1px] relative z-20 '>
            <h2 className='text-[2rem] md:text-[2.5rem] font-bold bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400 font-poppins' >{t("technologies.title")}</h2>
            <p>{t("technologies.description")}</p>
          </div>
          {/* Contenido de tec */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-[100%] mt-4'>
            {/* FRONTEND */}
            <div className='bg-firefly-800 bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-[0px]  rounded-2xl z-20 p-4 relative overflow-hidden '>
              <div>
                <strong className='text-fountain-blue-700 dark:text-fountain-blue-600 text-[1.2rem] tracking-wider'>FrontEnd</strong>
              </div>
              <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                {
                  listTecFront && (
                    <InfiniteMovingCards
                      items={listTecFront}
                      direction="left"
                      speed="slow"
                    />
                  )
                }
              </div>
              <svg className='absolute top-[1rem]  right-[-5rem]  -z-10 w-[25rem] stroke-silver-300 dark:stroke-silver-500 rotate-[45deg] transition-all duration-300 ease-linear drop-shadow-[38px_35px_0px_#689994]' viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L9.5 5C8.56538 5 8.09808 5 7.75 5.20096C7.52197 5.33261 7.33261 5.52197 7.20096 5.75C7 6.09808 7 6.56538 7 7.5C7 8.43462 7 8.90192 7.20096 9.25C7.33261 9.47803 7.52197 9.66739 7.75 9.79904C8.09808 10 8.56538 10 9.5 10L18.5 10C19.4346 10 19.9019 10 20.25 9.79904C20.478 9.66739 20.6674 9.47803 20.799 9.25C21 8.90192 21 8.43462 21 7.5C21 6.56538 21 6.09808 20.799 5.75C20.6674 5.52197 20.478 5.33261 20.25 5.20096C19.9704 5.03954 19.6139 5.00778 19 5.00153" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7 16.5C7 15.5654 7 15.0981 7.20096 14.75C7.33261 14.522 7.52197 14.3326 7.75 14.201C8.09808 14 8.56538 14 9.5 14H15.5C16.4346 14 16.9019 14 17.25 14.201C17.478 14.3326 17.6674 14.522 17.799 14.75C18 15.0981 18 15.5654 18 16.5C18 17.4346 18 17.9019 17.799 18.25C17.6674 18.478 17.478 18.6674 17.25 18.799C16.9019 19 16.4346 19 15.5 19H9.5C8.56538 19 8.09808 19 7.75 18.799C7.52197 18.6674 7.33261 18.478 7.20096 18.25C7 17.9019 7 17.4346 7 16.5Z" stroke-width="1.5" />
                <path d="M3 14L3 2M3 22L3 18" stroke="" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </div>
            {/* BACKEND */}
            <div className='bg-firefly-800 bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-[0px]  rounded-2xl z-20 p-4 relative overflow-hidden '>
              <strong className='text-fountain-blue-700 dark:text-fountain-blue-600 text-[1.2rem] tracking-wider'>BackEnd</strong>
              <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                {
                  listTecBack && (
                    <InfiniteMovingCards
                      items={listTecBack}
                      direction="right"
                      speed="slow"
                    />
                  )
                }
              </div>
              <svg className='absolute top-[-5rem]  right-[-8rem]  -z-10 w-[25rem] stroke-silver-300 dark:stroke-silver-500  rotate-[140deg] transition-all duration-300 ease-linear drop-shadow-[30px_35px_0px_#689994]' viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L9.5 5C8.56538 5 8.09808 5 7.75 5.20096C7.52197 5.33261 7.33261 5.52197 7.20096 5.75C7 6.09808 7 6.56538 7 7.5C7 8.43462 7 8.90192 7.20096 9.25C7.33261 9.47803 7.52197 9.66739 7.75 9.79904C8.09808 10 8.56538 10 9.5 10L18.5 10C19.4346 10 19.9019 10 20.25 9.79904C20.478 9.66739 20.6674 9.47803 20.799 9.25C21 8.90192 21 8.43462 21 7.5C21 6.56538 21 6.09808 20.799 5.75C20.6674 5.52197 20.478 5.33261 20.25 5.20096C19.9704 5.03954 19.6139 5.00778 19 5.00153" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7 16.5C7 15.5654 7 15.0981 7.20096 14.75C7.33261 14.522 7.52197 14.3326 7.75 14.201C8.09808 14 8.56538 14 9.5 14H15.5C16.4346 14 16.9019 14 17.25 14.201C17.478 14.3326 17.6674 14.522 17.799 14.75C18 15.0981 18 15.5654 18 16.5C18 17.4346 18 17.9019 17.799 18.25C17.6674 18.478 17.478 18.6674 17.25 18.799C16.9019 19 16.4346 19 15.5 19H9.5C8.56538 19 8.09808 19 7.75 18.799C7.52197 18.6674 7.33261 18.478 7.20096 18.25C7 17.9019 7 17.4346 7 16.5Z" stroke-width="1.5" />
                <path d="M3 14L3 2M3 22L3 18" stroke="" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </div>
            {/* RECURSOS */}
            <div className='bg-firefly-800 bg-opacity-30 shadow-lg backdrop-filter backdrop-blur-[0px]  rounded-2xl z-20 p-4 md:col-span-2 relative overflow-hidden'>
              <strong className='text-fountain-blue-700 dark:text-fountain-blue-600 text-[1.2rem] tracking-wide'>Recursos</strong>
              <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                {
                  listTecRec && (
                    <InfiniteMovingCards
                      items={listTecRec}
                      direction="left"
                      speed="slow"
                    />
                  )
                }
              </div>
              <svg className='absolute top-[0rem]  right-[-7rem]  -z-10 w-[25rem] stroke-silver-300 dark:stroke-silver-500 rotate-[220deg] transition-all duration-300 ease-linear drop-shadow-[30px_35px_0px_#689994] ' viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L9.5 5C8.56538 5 8.09808 5 7.75 5.20096C7.52197 5.33261 7.33261 5.52197 7.20096 5.75C7 6.09808 7 6.56538 7 7.5C7 8.43462 7 8.90192 7.20096 9.25C7.33261 9.47803 7.52197 9.66739 7.75 9.79904C8.09808 10 8.56538 10 9.5 10L18.5 10C19.4346 10 19.9019 10 20.25 9.79904C20.478 9.66739 20.6674 9.47803 20.799 9.25C21 8.90192 21 8.43462 21 7.5C21 6.56538 21 6.09808 20.799 5.75C20.6674 5.52197 20.478 5.33261 20.25 5.20096C19.9704 5.03954 19.6139 5.00778 19 5.00153" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7 16.5C7 15.5654 7 15.0981 7.20096 14.75C7.33261 14.522 7.52197 14.3326 7.75 14.201C8.09808 14 8.56538 14 9.5 14H15.5C16.4346 14 16.9019 14 17.25 14.201C17.478 14.3326 17.6674 14.522 17.799 14.75C18 15.0981 18 15.5654 18 16.5C18 17.4346 18 17.9019 17.799 18.25C17.6674 18.478 17.478 18.6674 17.25 18.799C16.9019 19 16.4346 19 15.5 19H9.5C8.56538 19 8.09808 19 7.75 18.799C7.52197 18.6674 7.33261 18.478 7.20096 18.25C7 17.9019 7 17.4346 7 16.5Z" stroke-width="1.5" />
                <path d="M3 14L3 2M3 22L3 18" stroke="" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </div>
          </div>
        {/* </div> */}
      </SeccionConteiner>
    </>

  )
}

export default Tecnologias