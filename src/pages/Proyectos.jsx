import React, { useEffect,  useState } from 'react'
import SeccionConteiner from '../components/SeccionConteiner'
import { collection, getDocs } from 'firebase/firestore'
import db from '../db/db'

import CartProyecto from '../components/cartProyecto/CartProyecto'
import { useTranslation } from 'react-i18next'


const Proyectos = () => {


    const [listaProyectos, setListaProyecto] = useState()
    
    const [t]=useTranslation("global")

    useEffect(() => {

        getDocs(collection(db, 'projects')).then(({ docs }) => {
            const listPorject = docs.map(doc => {
                return { 'id': doc.id, ...doc.data() }
            })

            setListaProyecto(listPorject)
        })

    }, [])


    return (
        <>
            <SeccionConteiner id='pro' className='scroll-mt-[4rem] ' >
                
                {/* Titulo */}
                <div className='text-silver-950 dark:text-silver-100 tracking-[1px] relative z-20 '>
                    <h2 className='text-[2rem] md:text-[2.5rem] font-bold bg-clip-text xl:dark:text-transparent bg-gradient-to-bl from-silver-100 to-silver-400 font-poppins' >{t("projects.title")}</h2>
                </div>
                {/* Galeria de proyectos */}
                <div className='grid sm:grid-cols-2  gap-2 mt-4' >

                    {/* Primera Fila */}
                    <div className='flex flex-col gap-2'>
                        {
                            listaProyectos?.map((proyecto,indice) => (
                                (indice % 2 === 0) && (
                                    <CartProyecto proyecto={proyecto}/>
                                )
                            ))
                        }
                    </div>
                    {/* Segunda Fila */}
                    <div className='flex flex-col gap-2'>
                        {
                            listaProyectos?.map((proyecto, indice) => (
                                (indice % 2 != 0) && (
                                    <CartProyecto proyecto={proyecto}/>
                                )

                            ))
                        }
                    </div>

                </div>
               
            </SeccionConteiner >

        </>
    )
}

export default Proyectos

