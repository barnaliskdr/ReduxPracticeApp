import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homecontainer from './containers/Homecontainer'
import CartScreen from './components/CartScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homecontainer/>}/>
        <Route path="/cart" element={<CartScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App
