import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';
import ChatWindow from './components/ChatWindow';
import Login from './components/Login';
import { auth } from './services/authService';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/chat"
          element={user ? <ChatWindow user={user} /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/chat" />} />
      </Routes>
    </div>
  );
}

export default App;