
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header'
import Inicio from './pages/Inicio'
import { SectionsProvider } from './context/SectionsContext';

function App() {

  // Obtemos el tema
  document.documentElement.classList.add(localStorage.getItem("theme"));

  return (
    <>
      <ChakraProvider>
        <SectionsProvider>
          <div className='container  mx-auto '>
            <header className='container bg-opacity-40  backdrop-filter backdrop-blur-2xl sticky top-0 z-50  ' >
              <Header />
            </header>
            <main className=' container mx-auto mt-[1rem] lg:mt-[5rem] '>
              <Inicio />
            </main>

          </div>
        </SectionsProvider>
      </ChakraProvider>

    </>
  )
}

export default App
