import { createContext } from "react";

const SectionsContext = createContext();


const SectionsProvider = ({ children }) => {

    const listaSecciones = [
        {
            name: 'about-me',
            id:'home'
        },
        {
            name: 'projects',
            id:'pro'
        },
        {
            name: 'technologies',
            id:'tec'
        },
        {
            name: 'contact',
            id:'con'
        }
      

    ]

    return (
        <SectionsContext.Provider value={{ listaSecciones }}>
            {children}
        </SectionsContext.Provider>
    )

}

export { SectionsContext, SectionsProvider }