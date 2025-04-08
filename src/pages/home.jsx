import React from "react";
import '../styles/home.css';
import homePage from '../assets/home.jpeg';
import flag1 from '../assets/flag1.jpg';
import flag2 from '../assets/flag2.png';
import flag3 from '../assets/flag3.png';
import flag4 from '../assets/flag4.png';
import flag5 from '../assets/flag5.png';

const Home = () => {
    return (
        <div className="notebook">
            <div className="text-container">
                <h1 className="titleHomePage">
                    Aprenda um novo idioma 100% grátis!
                </h1>
                <p className="pHomePage">
                    Com o Spudlingo, nunca foi tão fácil e divertido aprender um novo idioma.
                </p>

                {/* Container das bandeiras */}
                <div className="flags-container">
                    <img src={flag1} alt="Bandeira Inglês" className="flag-image" />
                    <img src={flag2} alt="Bandeira Mandarim" className="flag-image" />
                    {/* <img src={flag3} alt="Bandeira Finlandês" className="flag-image" /> */}
                    <img src={flag4} alt="Bandeira Espanhol" className="flag-image" />
                    <img src={flag5} alt="Bandeira Potuguês" className="flag-image" />
                </div>

                <button className="start-button">Comece agora</button>
            </div>
            <div className="image-container">
                <img src={homePage} alt="Home" className="home-image" />
            </div>
        </div>
    );
};

export default Home;
