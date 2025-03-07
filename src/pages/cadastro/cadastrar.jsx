import React from "react";
import { Link } from "react-router-dom";
import "./cadastro.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-text-wrapper">
        <h2 className="register-title">Criar Conta</h2>
        <form className="register-form">
          <input type="text" placeholder="Nome completo" className="register-input" />
          <input type="email" placeholder="Digite seu e-mail" className="register-input" />
          <input type="password" placeholder="Crie uma senha" className="register-input" />
          <input type="password" placeholder="Confirme sua senha" className="register-input" />
          <button type="submit" className="register-button">Cadastrar</button>
        </form>
        <p className="register-text">
          Já tem uma conta?  <Link to="/login" className="register-login-link">Entrar</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
