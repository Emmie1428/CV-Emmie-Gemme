import { BrowserRouter } from 'react-router'
import Router from "./composants/Router"
import Header from "./composants/Header"
import './App.css'

function App() {

  return (  
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  )
}

export default App
