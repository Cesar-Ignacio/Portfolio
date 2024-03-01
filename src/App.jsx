
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header'
import Inicio from './pages/Inicio'

function App() {

  // Obtemos el tema
  document.documentElement.classList.add(localStorage.getItem("theme"));

  return (
    <>
      <ChakraProvider>
        <div className='container  mx-auto '>
          <header className='container bg-opacity-40  backdrop-filter backdrop-blur-2xl sticky top-0 z-50  ' >
            <Header />
          </header>
          <main className=' container mx-auto mt-[1rem]'>
            <Inicio />
          </main>

        </div>
      </ChakraProvider>

    </>
  )
}

export default App
