
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header'
import Inicio from './pages/Inicio'
import { SectionsProvider } from './context/SectionsContext';
import Tecnologias from './pages/Tecnologias';
import Proyectos from './pages/Proyectos';

function App() {

  // Obtemos el tema
  document.documentElement.classList.add(localStorage.getItem("theme"));

  return (
    <>
      <ChakraProvider>
        <SectionsProvider>
          <div className='container  mx-auto font-onest'>
            <header className='container sm:py-1  sticky top-0 z-50  ' >
              <Header />
            </header>
            <main className=' container mx-auto px-3 flex flex-col gap-[2rem] mt-[1.5rem] sm:mt-0  '>
                <Inicio />
                <Proyectos/>   
                <Tecnologias />
            </main>
          </div>
        </SectionsProvider>
      </ChakraProvider>

    </>
  )
}

export default App
