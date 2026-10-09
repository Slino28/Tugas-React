import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from "../../../shared/LoginForm/index.jsx";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (formData) => {
    alert(`Registrasi berhasil untuk: ${formData.email}`);
    navigate('/login');
  };

  return <LoginForm mode="register" onSubmit={handleRegister} />;
}

export default Register;