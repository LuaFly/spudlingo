Para rodar a aplicação com o back: 

npm install @react-oauth/google jwt-decode express mysql cors axios bcrypt jsonwebtoken dotenv
npm install chalk
npm install jwt-decode

node login.js (deixar rodando em outro terminal enquanto a aplicação funciona dentro da pasta back)

Para rodar o front: 
npm install lucide-react
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

<br>
Criar a tabela abaixo:
CREATE TABLE user_languages (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  language_code VARCHAR(5) NOT NULL,
  level VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES usuarios(user_id)
);