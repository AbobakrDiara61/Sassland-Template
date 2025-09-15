import './App.css'
import Header from './components/Header'
import Home from './page/home'

import { Routes, Route } from 'react-router'
function App() {


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<>Docs</>} />
        </Routes>
        
      </main>
    </>
  )
}

export default App
