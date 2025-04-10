import React, { useState } from "react";
import styles from './header.module.css';
import { Link, useNavigate } from "react-router-dom";
import logoMenu from '../../assets/lateral1.jpeg';
import { Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);

  const text = "SpudLingo";
  const colors = [
    "#FF5733", "#27AE60", "#3357FF", "#FF33A6", "#FFD133",
    "#8E44AD", "#7D9A2B", "#E74C3C", "#3498DB"
  ];

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Logo - Home">
          <img src={logoMenu} alt="Logo" />
          <p className={styles.logoWrite}>
            {text.split("").map((letter, index) => (
              <span
                key={index}
                style={{ color: colors[index], display: "inline-block" }}
              >
                {letter}
              </span>
            ))}
          </p>
        </Link>

        {/* Botão hamburguer visível só em mobile */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir/Fechar menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} color="#3f4640"/>}
        </button>

        {/* Menu mobile */}
        {isOpen && (
          <div className={styles.mobileMenu}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/courses" onClick={() => setIsOpen(false)}>Idiomas</Link>
            <Link to="/aboutUs" onClick={() => setIsOpen(false)}>Quem somos</Link>
            <Link to="/Shop" onClick={() => setIsOpen(false)}>Shop</Link>
            {!token ? (
              <Link to="/login" onClick={() => setIsOpen(false)}>Entrar / Criar</Link>
            ) : (
              <button onClick={() => { setIsOpen(false); handleLogout(); }}>Sair</button>
            )}
          </div>
        )}

        {/* Menu desktop*/}
        <div className={styles.center}>
          <Link to="/">Home</Link>
          <Link to="/courses">Idiomas</Link>
          <Link to="/aboutUs">Quem somos</Link>
          <Link to="/Shop">Shop</Link>
        </div>

        {!token ? (
          <Link className={styles.login} to="/login">
            Entrar / Criar
          </Link>
        ) : (
          <button className={styles.logout} onClick={handleLogout}>
            Sair
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
