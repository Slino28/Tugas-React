import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from "../../../shared/LoginForm/index.jsx";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    alert(`Login berhasil untuk: ${formData.email}`);
    navigate('/');
  };

  return <LoginForm mode="login" onSubmit={handleLogin} />;
}

export default Login;