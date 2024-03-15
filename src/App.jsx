
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header'
import Inicio from './pages/Inicio'
import { SectionsProvider } from './context/SectionsContext';
import Tecnologias from './pages/Tecnologias';

function App() {

  // Obtemos el tema
  document.documentElement.classList.add(localStorage.getItem("theme"));

  return (
    <>
      <ChakraProvider>
        <SectionsProvider>
          <div className='container  mx-auto font-onest'>
            <header className='container py-5 px-3  bg-opacity-40  backdrop-filter backdrop-blur-2xl sticky top-0 z-50  ' >
              <Header />
            </header>
            <main className=' container mx-auto px-3 flex flex-col gap-[2rem] mt-[1.5rem] sm:mt-0  '>
                <Inicio />
                <Tecnologias />             
            </main>
          </div>
        </SectionsProvider>
      </ChakraProvider>

    </>
  )
}

export default App
