import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./cadastro.css";

function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate(); // Hook para redirecionamento

  function handleSubmit(event) {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      setMensagem("As senhas não coincidem!");
      return;
    }

    axios.post('http://localhost:8344/cadastrar', {
      username: nome,
      email: email,
      senha: senha
    })
    .then(res => {
      setMensagem(res.data.msg);
      console.log(res.data);
      
      // ✅ Se o cadastro for bem-sucedido, redireciona para a página de login
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Pequeno delay para mostrar a mensagem antes de redirecionar
    })
    .catch(err => {
      setMensagem("Erro ao cadastrar. Tente novamente.");
      console.error(err);
    });
  }

  return (
    <div className="register-container">
      <div className="register-text-wrapper">
        <h2 className="register-title">Criar Conta</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Nome completo" 
            className="register-input" 
            onChange={e => setNome(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder="Digite seu e-mail" 
            className="register-input"  
            onChange={e => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Crie uma senha" 
            className="register-input" 
            onChange={e => setSenha(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Confirme sua senha" 
            className="register-input" 
            onChange={e => setConfirmarSenha(e.target.value)} 
          />
          <button type="submit" className="register-button">Cadastrar</button>
        </form>
        {mensagem && <p className="error-message">{mensagem}</p>}
        <p className="register-text">
          Já tem uma conta? <Link to="/login" className="register-login-link">Entrar</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
