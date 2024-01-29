import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Fix import here
import React, { useState } from 'react';
import { UserContext } from './UserContext';
import Chat from './components/chat/Chat';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:room_id/:room_name" element={<Chat />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;

