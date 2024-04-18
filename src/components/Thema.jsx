
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
        (tema === "light") ? (valor = -2) : (valor = 1);
        refIconTema.current.className = `translate-y-[${valor}rem] transition-transform ease-linear`;

    }
    useEffect(() => {
        iconoTema(iconTheme);
    }, []);

    return (
        <button onClick={cambiarTema} ref={refIconTema}>
            <SunIcon/>
            <MoonIcon/>
        </button>
    )
}

export default Thema
