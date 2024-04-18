
import { IconButton } from '@chakra-ui/react';
import React, { useContext, useRef, useState } from 'react'
import { SectionsContext } from '../context/SectionsContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation } from 'react-i18next';
import MenuDesplegable from '../components/MenuDesplegable';
import { openMenu, closeMenu } from '../lib/utils'
import { Tabs } from "../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import imgCesar from '../assets/elfo.jpg'
import Thema from '../components/Thema';
const Header = () => {

    const refer = useRef();
    // const refIconTema = useRef();

    const [menu, setMenu] = useState(true);

    const [, i18n] = useTranslation("global")
    
    const { listaSecciones } = useContext(SectionsContext);

    const actulizarEstadoMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className='grid grid-cols-2  mx-auto xl:w-[70%] sm:bg-silver-50 sm:dark:bg-silver-950  sm:rounded-full px-3 sticky  z-50  py-3 top-0 sm:top-5 sm:py-1 bg-silver-200 dark:bg-firefly-950 mt-0 shadow-md 2xl:mb-[3rem]' >
            {/* Logo */}
            <div className='flex items-center'>
                {/* <span className='font-righteous text-[2rem] text-silver-900 dark:text-silver-200 '>Ces<span className='text-[2rem] text-fountain-blue-700 dark:text-fountain-blue-600 '>Dev.</span> </span> */}
                <Avatar className=''>
                    <AvatarImage src={imgCesar} className='object-cover' />
                    <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
            </div>

            {/* Navegador */}
            <nav className='justify-self-end self-center '>
                <ul className='flex gap-5  items-center text-silver-950 dark:text-silver-200 text-[1rem]' >
                    <li>
                        <Tabs tabs={listaSecciones} />
                    </li>
                    {/* IDIOMA */}
                    <li className='flex'>
                        <Select onValueChange={(e) => i18n.changeLanguage(e)} >
                            <SelectTrigger  >
                                <SelectValue placeholder="ES" />
                            </SelectTrigger>
                            <SelectContent >
                                <SelectItem value="es">ES</SelectItem>
                                <SelectItem value="en">EN</SelectItem>
                            </SelectContent>
                        </Select>
                    </li>
                    {/* Tema */}
                    <li className=' size-[2rem] overflow-hidden' >
                        <Thema/>
                    </li >
                    {/* Menu */}
                    <li className='md:hidden block'>
                        {
                            (menu) ?
                                (
                                    <IconButton colorScheme='transparent' aria-label='Menu' onClick={() => { openMenu(refer), setMenu(!menu) }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list w-[2.5rem]  dark:text-silver-400 text-silver-800 transition-all duration-200 ease-linear " viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                        </svg>
                                    </IconButton>
                                ) :
                                (
                                    <IconButton colorScheme='transparent' aria-label='Menu' onClick={() => { closeMenu(refer), setMenu(!menu) }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-lg transition-all duration-200 ease-linear w-[2.2rem] dark:text-silver-400 text-silver-800" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                        </svg>
                                    </IconButton>
                                )
                        }
                    </li>

                </ul>
            </nav>

            <MenuDesplegable className='' refer={refer} actulizarEstadoMenu={actulizarEstadoMenu} />
        </div >
    )
}

export default Header
