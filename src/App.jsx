
import Header from './components/Header'
import Inicio from './pages/Inicio'

function App() {

  // Obtemos el tema
  document.documentElement.classList.add(localStorage.getItem("theme"));

  return (
    <>
      <div className='container mx-auto'>

        <Header />
        
        <div className='h-[100vh]'>
          <Inicio />
        </div>
      
      </div>

    </>
  )
}

export default App
