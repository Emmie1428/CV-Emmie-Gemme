import { BrowserRouter } from 'react-router'
import Router from "./composants/Router"
import Header from "./composants/Header/Header"
import './App.scss'

function App() {

  return (  
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  )
}

export default App
