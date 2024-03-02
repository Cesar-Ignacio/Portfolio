import { createContext } from "react";

const SectionsContext = createContext();


const SectionsProvider = ({ children }) => {

    const listaSecciones = [
        {
            name: 'Inicio'
        },
        {
            name: 'Técnologias'
        },
        {
            name: 'Proyectos'
        },
        {
            name: 'Cantacto'
        }

    ]

    return (
        <SectionsContext.Provider value={{ listaSecciones }}>
            {children}
        </SectionsContext.Provider>
    )

}

export { SectionsContext, SectionsProvider }