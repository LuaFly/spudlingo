import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import flag1 from '../../../assets/flag1.jpg';

const Card = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/aula1'); // esse é o caminho da rota definida em App.jsx
  };

  return (
    <div className="card">
      <img src={flag1} alt="inglês" className="image" />
      <div className="content">
        <h2>Inglês A1</h2>
        <p>
          Aqui você irá aprender o básico de inglês, como se apresentar, fazer perguntas,
          entender direções, números... Ideal para quem está aprendendo inglês pela primeira vez.
        </p>
        <div className="button-group">
          <button className="btn" onClick={handleStart}>Iniciar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
