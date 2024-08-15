import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Dostavka from './pages/Dostavka/Dostavka'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
import Uslobiya from './pages/Uslobiya/Uslobiya'
import Detail from './pages/Detail/Detail'
import Admin from './pages/Admin/Admin'
import CreateProduct from './pages/Admin/CreateProduct'
import Manage from './pages/Admin/Manage'
import Login from './pages/Login/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dostavka" element={<Dostavka />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Uslobiya />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="create" element={<CreateProduct/>}/>
          <Route path="manage" element={<Manage/>}/>
        </Route>

      </Routes>
      <Footer />
    </>
  )
}

export default App
