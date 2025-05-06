import React from 'react';
import './Card.css';
import flag1 from '../../../assets/flag1.jpg'

const CardB1 = () => {
  return (
    <div className="card">
      <img src={flag1} alt="inglÊs" className="image" />
      <div className="content">
        <h2>Inglês B1</h2>
        <p>
          Aqui você irá aprender o básico de inglês, como se apresentar, fazer perguntas, entender direções, números... Ideal para quem está aprendendo inglês pela primeira vez.
        </p>
        <div className="button-group">
          <button className="btn">Iniciar</button>
        </div>
      </div>
    </div>
  );
};

export default CardB1;
