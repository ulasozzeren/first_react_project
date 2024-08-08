import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginForm from './Components/LoginForm/LoginForm';
import Movies from './Components/LoginForm/Movies'
import Contact from './Components/LoginForm/Contact'
import RegisterForm from './Components/LoginForm/RegisterForm';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />



          <Route path="/" element={<Movies/>} />
          <Route path="/about" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
