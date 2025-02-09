import React, { useState } from 'react';
import './Login.css';
import { signInWithGoogle } from '../services/authService';

function Login() {
  return (
    <div className="login-page">
      <h1>Telegram Web App</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default Login;