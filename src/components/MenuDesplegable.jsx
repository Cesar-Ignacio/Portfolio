import { useContext } from 'react'
import { closeMenu } from '../lib/utils'
import { SectionsContext } from '../context/SectionsContext'
import { useTranslation } from 'react-i18next'

const MenuDesplegable = ({ className: styleProps, refer, actulizarEstadoMenu }) => {

    const [t] = useTranslation("global")
    const { listaSecciones } = useContext(SectionsContext);

    return (
        <>
            <div ref={refer} className={styleProps + 'absolute top-20 bg-silver-200 dark:bg-[#1a2b2b]  right-0 w-0 h-[0vh] overflow-hidden sm:hidden z-50 transition-all duration-400 ease-linear flex justify-center '} >

                <div className='p-3 flex flex-col justify-evenly gap-5'>
                    {
                        listaSecciones.map((seccion, indece) => (
                            <a href={`#${seccion.id}`} key={indece} onClick={() => { closeMenu(refer), actulizarEstadoMenu() }} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#323c48,45%,#637b94,55%,#323c48)] bg-[length:200%_100%] px-6 font-medium text-silver-200 tracking-[1.5px] transition-colors ">
                                {t(`header.${seccion.name}`)}
                            </a>
                        ))
                    }

                </div>

            </div>
        </>
    )
}

export default MenuDesplegable

