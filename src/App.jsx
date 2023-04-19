import { Container } from "./components/Container"
import { NavBar } from "./components/Navbar"
import { Route, Routes, Navigate } from 'react-router-dom'
import { Servicios } from "./components/Servicios"
import { Login } from "./components/Login"




function App() {
 

  return (
    <div>
      <NavBar/>
     <Routes>

     <Route path='/' element={<Container/>} />
     <Route path='login' element={<Login/>} />
     <Route path='servicios' element={<Servicios/>} />
     

      
    </Routes>

    </div>
  )
}

export default App
