import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:8344/login', {
      email,
      senha
    })
    .then(res => {
      setMensagem(res.data.msg);
      console.log("Resposta do login:", res.data);

      // ✅ Salvando token e dados do usuário no localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("usuario", JSON.stringify(res.data.usuario));

      navigate('/inicio');
    })
    .catch(err => {
      setMensagem("Erro ao fazer login. Verifique seus dados.");
      console.error(err);
    });
  }

  return (
    <div className="login-container">
      <div className="login-text-wrapper">
        <h2 className="login-title">Entrar</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="login-input"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            className="login-input"
            onChange={e => setSenha(e.target.value)}
          />
          <button type="submit" className="login-button">Entrar</button>
        </form>
        {mensagem && <p>{mensagem}</p>}
        <p className="login-text">
          Não tem uma conta? <Link to="/cadastrar" className="login-register-link">Criar Conta</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
