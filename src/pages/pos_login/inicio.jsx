import React, { useState } from "react";
import axios from "axios";
import '../../styles/home.css';
import './style.css';
import homePage from '../../assets/home.jpeg';
import { useNavigate } from "react-router-dom";
import flag1 from '../../assets/flag1.jpg'; // Inglês
import flag2 from '../../assets/flag2.png'; // Mandarim
import flag3 from '../../assets/flag3.png'; // Finlandês
import flag4 from '../../assets/flag4.png'; // Espanhol
import flag5 from '../../assets/flag5.png'; // Português

const idiomas = [
    { nome: "Inglês", bandeira: flag1 },
    { nome: "Mandarim", bandeira: flag2 },
    { nome: "Finlandês", bandeira: flag3 },
    { nome: "Espanhol", bandeira: flag4 },
    { nome: "Português", bandeira: flag5 },
];

const Inicio = () => {
    const [idioma, setIdioma] = useState("");
    const [nivel, setNivel] = useState("");
    const [erroIdioma, setErroIdioma] = useState("");
    const [erroNivel, setErroNivel] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let hasError = false;

        if (!idioma) {
            setErroIdioma("Por favor, selecione um idioma.");
            hasError = true;
        } else {
            setErroIdioma("");
        }

        if (!nivel) {
            setErroNivel("Por favor, selecione um nível.");
            hasError = true;
        } else {
            setErroNivel("");
        }

        if (hasError) return;

        try {
            const response = await axios.post("http://localhost:8344/form_idioma", {
                user_id: 1, //Arrumar pra pegar do banco certinho
                language_code: idioma.slice(0, 2).toUpperCase(),
                level: nivel
            });

            if (response.data.msg) {
                navigate("/feed");
            } else {
                console.error("Erro ao salvar idioma.");
            }
        } catch (error) {
            console.error("Erro ao salvar idioma:", error);
        }
    };

    return (
        <div className="notebook">
            <div className="text-container">
                <h1 className="titleHomePage">Escolha seu idioma!</h1>
                <p className="pHomePage">
                    Com o Spudlingo, nunca foi tão fácil e divertido aprender um novo idioma.
                </p>

                <form className="language-form" onSubmit={handleSubmit}>
                    <label className="pHomePage">Selecione o idioma:</label>
                    <div className="radio-flags">
                        {idiomas.map((item, index) => (
                            <label key={index} className={`flag-radio ${idioma === item.nome ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="idioma"
                                    value={item.nome}
                                    checked={idioma === item.nome}
                                    onChange={() => setIdioma(item.nome)}
                                />
                                <img src={item.bandeira} alt={`Bandeira ${item.nome}`} />
                            </label>
                        ))}
                    </div>
                    {erroIdioma && <p style={{ color: 'red', fontSize: '14px' }}>{erroIdioma}</p>}

                    <label htmlFor="nivel" className="pHomePage">Selecione o nível:</label>
                    <select
                        id="nivel"
                        value={nivel}
                        onChange={(e) => setNivel(e.target.value)}
                    >
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    {erroNivel && <p style={{ color: 'red', fontSize: '14px' }}>{erroNivel}</p>}

                    <button className="start-button" type="submit">
                        Concluir
                    </button>
                </form>
            </div>

            <div className="image-container">
                <img src={homePage} alt="Home" className="home-image" />
            </div>
        </div>
    );
};

export default Inicio;
