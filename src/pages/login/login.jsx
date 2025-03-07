import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-text-wrapper">
        <h2 className="login-title">Entrar</h2>
        <form className="login-form">
          <input type="email" placeholder="Digite seu e-mail" className="login-input" />
          <input type="password" placeholder="Digite sua senha" className="login-input" />
          <button type="submit" className="login-button">Entrar</button>
        </form>
        <p className="login-text">
          Não tem uma conta? <Link to="/register" className="login-register-link">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
