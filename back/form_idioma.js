import express from "express";
import db from "./db.js";
import { verifyToken } from "./authMiddleware.js";

const router = express.Router();

// Rota para salvar idioma
router.post("/form_idioma", verifyToken, (req, res) => {
  const { language_code, level } = req.body;
  const user_id = req.user.id;

  db.query(
    "INSERT INTO user_languages (user_id, language_code, level) VALUES (?, ?, ?)",
    [user_id, language_code, level],
    (error) => {
      if (error) {
        console.error("Erro ao salvar idioma:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
      }

      res.status(200).json({ msg: "Idioma salvo com sucesso!" });
    }
  );
});

// Rota para verificar se o idioma já foi salvo
router.get("/check_idioma", verifyToken, (req, res) => {
  const user_id = req.user.id;

  db.query("SELECT * FROM user_languages WHERE user_id = ?", [user_id], (err, results) => {
    if (err) {
      console.error("Erro ao verificar idiomas:", err);
      return res.status(500).json({ error: "Erro ao verificar idiomas" });
    }

    const hasLanguage = results.length > 0;
    res.json({ hasLanguage });
  });
});

export default router;
