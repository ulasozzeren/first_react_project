import React, { useState } from 'react';
import './LoginForm.css'; // Bu CSS dosyasını oluşturun
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { registerUser } from './api'; 

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Kullanıcı verilerini JSON Server'a gönder
      await registerUser({ firstName, lastName, email, password });
      alert('Kayıt başarılı');
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleRegister}>
        <h1>Kayıt Ol</h1>
        {error && <div className='error-message'>{error}</div>}
        <div className='input-box'>
          <input 
            type="text" 
            placeholder='Ad' 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input 
            type="text" 
            placeholder='Soyad' 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input 
            type="email" 
            placeholder='E-posta' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaEnvelope className='icon'/>
        </div>
        <div className='input-box'>
          <input 
            type="password" 
            placeholder='Şifre' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className='icon'/>
        </div>
        <button type='submit'>Kayıt Ol</button>
        <div className='login-Link'> 
          <p>Zaten hesabınız var mı? <a onClick={goToLogin} style={{cursor: 'pointer'}}>Giriş Yap</a></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
