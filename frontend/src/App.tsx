
import { Navbar,  } from './components/index'
import { Header, About, Work, Skills, Contact, Footer, Experiences} from './containers/index'
import './App.scss'

function App() {
  
  return (
    <div className="app bg-light" >
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
