import express from "express";
import cors from "cors";
import mysql from "mysql";
import bcrypt from "bcrypt";

const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "dbspudlingo"
});

app.use(express.json());
app.use(cors());

// 🔹 Rota de Cadastro com Senha Criptografada
app.post('/cadastrar', async (req, res) => {
    const { username, email, senha } = req.body;

    if (!username || !email || !senha) {  // ✅ Agora verifica username, email e senha
        return res.status(400).json({ error: "Nome, e-mail e senha são obrigatórios" });
    }

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], async (err, result) => {
        if (err) {
            console.error("Erro no banco de dados:", err);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }

        if (result.length > 0) {
            return res.status(400).json({ msg: "Usuário já cadastrado" });
        }

        try {
            const hashSenha = await bcrypt.hash(senha, 10);
            db.query("INSERT INTO usuarios (username, email, senha) VALUES (?, ?, ?)", 
                     [username, email, hashSenha], 
                     (err, result) => {
                if (err) {
                    console.error("Erro ao inserir no banco:", err);
                    return res.status(500).json({ error: "Erro ao cadastrar usuário" });
                }
                res.json({ msg: "Cadastro realizado com sucesso" });
            });
        } catch (error) {
            console.error("Erro ao criptografar senha:", error);
            return res.status(500).json({ error: "Erro interno ao processar senha" });
        }
    });
});

// 🔹 Rota de Login com Verificação de Senha
app.post('/login', (req, res) => {
    const { email, senha } = req.body; 

    if (!email || !senha) {  // ✅ Agora verifica corretamente se os campos estão vazios
        return res.status(400).json({ error: "E-mail e senha são obrigatórios" });
    }

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
        if (err) {
            console.error("Erro no banco de dados:", err);
            return res.status(500).json({ error: "Erro interno do servidor" });
        }

        if (result.length === 0) {
            return res.status(401).json({ error: "Usuário não encontrado" });
        }

        const usuario = result[0];

        // 🔹 Comparando senha com hash salvo
        bcrypt.compare(senha, usuario.senha, (err, senhaValida) => {
            if (err) {
                console.error("Erro ao comparar senhas:", err);
                return res.status(500).json({ error: "Erro ao verificar senha" });
            }

            if (!senhaValida) {
                return res.status(401).json({ error: "Senha incorreta" });
            }

            res.json({ msg: "Login bem-sucedido!", usuario: { email: usuario.email } });
        });
    });
});

// 🔹 Inicializa o servidor
app.listen(8344, () => {
    console.log("Server running on port 8344");
});
