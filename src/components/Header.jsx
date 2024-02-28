import React from 'react'

const Header = () => {


    const cambiarTema = () => {

        const theme = ((localStorage.getItem("theme") === "dark") ? ("light") : ("dark")) || dark;

        document.documentElement.className = theme;

        localStorage.setItem("theme",theme);

    }

    return (
        <div className='bg-transparent flex justify-between px-4 py-2 sticky top-0' >
            <div>
                <strong>Logo</strong>
            </div>
            <nav>
                <ul className='flex gap-4  items-center' >
                    <li>Inicio</li>
                    <li>Proyectos</li>
                    <li className='flex cursor-pointer ' onClick={cambiarTema}>
                        <lord-icon
                            src="https://cdn.lordicon.com/hmygqgiw.json"
                            trigger="hover"
                            style={{ width: '2rem', height: '2rem' }}>
                        </lord-icon>
                    </li >
                </ul>
            </nav>
        </div>
    )
}

export default Header
