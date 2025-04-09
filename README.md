Para rodar a aplicação com o back: 
npm install @react-oauth/google
npm install jwt-decode
npm install express mysql cors axios bcrypt
node login.js (deixar rodando em outro terminal enquanto a aplicação funciona dentro da pasta back)
npm run dev (para rodar o front)

No MYSQL RODAR:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'; 
FLUSH PRIVILEGES;

No msql: 
criar o dbspudlingo 
CREATE TABLE usuarios (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL, -- Use hashing na aplicação para maior segurança
    role ENUM('estudante', 'professor') NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh