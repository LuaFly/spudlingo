import express from "express";
import db from "./db.js";

const router = express.Router();

router.post("/form_idioma", async (req, res) => {
  const { user_id, language_code, level } = req.body;

  try {
    await db.query(
      "INSERT INTO user_languages (user_id, language_code, level) VALUES (?, ?, ?)",
      [user_id, language_code, level]
    );
    res.status(200).json({ msg: "Idioma salvo com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar idioma:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

export default router;
