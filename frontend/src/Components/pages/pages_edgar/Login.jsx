// src/Login.js
import React, { useState } from 'react';
import Navbar_admin from './Navbar_admin';
import Footer from '../../Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar la información del formulario a tu servidor para autenticar
    console.log('Email:', email, 'Password:', password);
    // Aquí podrías hacer una solicitud a tu servidor para la autenticación
    // Por ejemplo, usando fetch o axios
  };

  return <>
 <Navbar_admin></Navbar_admin>
 
    <div>
       
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    <Footer></Footer>
    </>
};

export default Login;