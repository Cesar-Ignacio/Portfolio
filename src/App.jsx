
import { ChakraProvider } from '@chakra-ui/react';
import Inicio from './pages/Inicio'
import { SectionsProvider } from './context/SectionsContext';
import Tecnologias from './pages/Tecnologias';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Footer from './pages/Footer';
import Header from './pages/Header';


function App() {

  // Obtemos el tema
  document.documentElement.classList.add(localStorage.getItem("theme"));

  return (
    <>
      <ChakraProvider>
        <SectionsProvider>
          <div className='container  mx-auto font-nunito '>
            <Header/>
            <main className=' container mx-auto px-3 flex flex-col gap-[2rem] mt-7 '>
              <Inicio />
              <Proyectos />
              <Tecnologias />
              <Contacto/>
            </main>
            <Footer/>
          </div>
        </SectionsProvider>
      </ChakraProvider>

    </>
  )
}

export default App
