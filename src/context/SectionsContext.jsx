import { createContext } from "react";

const SectionsContext = createContext();


const SectionsProvider = ({ children }) => {

    const listaSecciones = [
        {
            name: 'about-me'
        },
        {
            name: 'technologies'
        },
        {
            name: 'projects'
        },
        {
            name: 'contact'
        }
      

    ]

    return (
        <SectionsContext.Provider value={{ listaSecciones }}>
            {children}
        </SectionsContext.Provider>
    )

}

export { SectionsContext, SectionsProvider }