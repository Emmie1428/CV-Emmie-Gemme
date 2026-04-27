import { BrowserRouter } from 'react-router'
import Router from "./composants/Router"
import Header from "./composants/Header/Header"
import Footer from "./composants/Footer/Footer"
import './App.scss'

function App() {

  return (  
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
