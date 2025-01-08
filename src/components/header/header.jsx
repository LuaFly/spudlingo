//Menu superior

import React from "react";
import styles from './header.module.css'
import { Link } from "react-router-dom";
//import {ReactComponent as Logo} from '../../assets/dogs.svg'
import logoMenu from '../../assets/lateral1.jpeg';


const header = () => {

    const text = "SpudLingo";
    const colors = [
        "#FF5733", // S
        "#27AE60 ", // p
        "#3357FF", // u
        "#FF33A6", // d
        "#FFD133", // L
        "#8E44AD", // i
        "#7D9A2B", // n
        "#E74C3C", // g
        "#3498DB", // o
      ];

    return(
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} to ="/" aria-label=" Logo - Home">
          
                    <img src={logoMenu} alt="Logo" />
                    <p className={styles.logoWrite}>
                        {text.split("").map((letter, index) => (
                        <span
                            key={index}
                            style={{
                            color: colors[index],
                            display: "inline-block",
                            }}
                        >
                            {letter}
                        </span>
                        ))}
                    </p>
                </Link>
                <div className={styles.center}>
                    <Link to ="/">
                        Home
                    </Link>
                    <Link to ="/courses">
                        Cursos
                    </Link>
                    <Link to ="/aboutUs">
                        Quem somos
                    </Link>
                    <Link to ="/Shop">
                        Shop
                    </Link>
                </div>
        
                <Link className={styles.login} to ="/login">
                    Entrar /
                    Criar
                </Link>
   
            </nav>
        </header>
    )
}
export default header;