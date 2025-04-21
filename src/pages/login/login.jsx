import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  //  Verifica se o usuário já tem idioma cadastrado
  const verificarIdioma = async (token) => {
    try {
      const res = await axios.get("http://localhost:8344/check_idioma", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.hasLanguage) {
        navigate("/feed"); // redireciona para o feed
      } else {
        navigate("/inicio"); // redireciona para escolher o idioma
      }
    } catch (err) {
      console.error("Erro ao verificar idioma:", err);
      navigate("/inicio"); // fallback
    }
  };

  // Login + verificação do idioma
  function handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:8344/login', {
      email,
      senha
    })
    .then(res => {
      setMensagem(res.data.msg);
      console.log("Resposta do login:", res.data);

      const token = res.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(res.data.usuario));

      verificarIdioma(token); 
    })
    .catch(err => {
      setMensagem("Usuário/senha incorretos.");
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
        <div className="login-mensagem-wrapper">
          <p className="login-mensagem">
            {mensagem || "\u00A0"}
          </p>
        </div>

        <p className="login-text">
          Não tem uma conta? <Link to="/cadastrar" className="login-register-link">Criar Conta</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
