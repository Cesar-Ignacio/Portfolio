
import React, { useEffect, useRef, useState } from 'react'
import MoonIcon from '../icono/MoonIcon';
import  SunIcon  from '../icono/SunIcon';

const Thema = () => {

    const [iconTheme, setIconTheme] = useState(localStorage.getItem("theme") || (localStorage.setItem("theme", "light"), "light"));

    const refIconTema = useRef();

    const cambiarTema = () => {

        const theme = (localStorage.getItem("theme") === "light") ? ("dark") : ("light");

        document.documentElement.className = theme;

        localStorage.setItem("theme", theme);

        setIconTheme(theme);
        iconoTema(theme);
    }
    const iconoTema = (tema) => {

        let valor;
        (tema === "light") ? (valor = -2) : (valor = 0);
        refIconTema.current.style.transform = "translateY("+valor+"rem)"

    }
    useEffect(() => {
        iconoTema(iconTheme);
    }, []);

    return (
        <button className='transition-all ease-linear' onClick={cambiarTema} ref={refIconTema}>
            <SunIcon/>
            <MoonIcon/>
        </button>
    )
}

export default Thema
