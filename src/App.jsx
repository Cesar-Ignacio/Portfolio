
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
          <Header />
          <main className=' container mx-auto w-[70%] '>
            <Inicio />
          </main>

        </div>
      </ChakraProvider>

    </>
  )
}

export default App
