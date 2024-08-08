import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { getRequestToken, validateWithLogin, createSession } from './api'; 
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const requestToken = await getRequestToken();
      const validationResponse = await validateWithLogin(username, password, requestToken);

      if (validationResponse.success) {
        const sessionId = await createSession(requestToken);
        alert('Giriş başarılı');
        console.log('Session ID:', sessionId);
        navigate('/home'); 
      } else {
        setError(validationResponse.status_message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleLogin}>
        <h1>Giriş Yap</h1>
        {error && <div className='error-message'>{error}</div>}
        <div className='input-box'>
          <input 
            type="text" 
            placeholder='Kullanıcı Adı' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className='icon'/>
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
        <div className='remember-forgot'>
          <label><input type='checkbox'/> Beni hatırla </label>
          <a href="#"> Şifremi Unuttum </a>
        </div>
        <button type='submit'>Giriş Yap</button>
        <div className='register-Link'> 
        <p>Hesabınız yok mu? <a onClick={goToRegister} style={{cursor: 'pointer'}}>Kaydol</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
