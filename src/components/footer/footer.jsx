import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Quem somos</h4>
        <ul>
          <li>Cursos</li>
          <li><a href="/missao" target="_blank" rel="noopener noreferrer">
  Missão
</a>
</li>
          <li>Método</li>
          <li>Eficácia</li>
          <li>Pesquisa</li>
          <li>Carreiras</li>
          <li>Guia da marca</li>
          <li>Investidores</li>
          <li>Entre em contato</li>
        </ul>
      </div>
      
      <div className="footer-column">
        <h4>Produtos</h4>
        <ul>
          <li>Podcast</li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Aplicativos</h4>
        <ul>
          <li>Android</li>
          <li>IOS</li>
        </ul>
        <h4>Suporte e Ajuda</h4>
        <ul>
          <li>Dúvidas</li>
          <li>Central de ajuda</li>
          <li>FAQ (perguntas frequentes)</li>
          <li>Fale conosco</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Termos e privacidade</h4>
        <ul>
          <li>Normas da comunidade</li>
          <li>Termos de uso</li>
          <li>Privacidade</li>
        </ul>
        <h4>Redes sociais</h4>
        <ul>
          <li>Blog</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;