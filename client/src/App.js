import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'
import { UserContext } from './UserContext'
import Home from './components/Home/Home'
import Chat from './components/Chat/Chat'
import Navbar from './components/layout/Navbar'

function App() {
  const [user, setUser] = useState('')
  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  )
}

export default App
