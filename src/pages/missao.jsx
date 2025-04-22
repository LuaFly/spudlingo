import missaoImg from "../assets/Missao/missao.png";
import visaoImg from "../assets/Missao/visao.png";
import valoresImg from "../assets/Missao/valores.png";
import "../styles/Missao.css";

const secoes = [
  {
    titulo: "Missão",
    descricao: "Nossa missão é fornecer aprendizado de idiomas de forma divertida, acessível e gratuita para todos.",
    img: missaoImg,
    alt: "Missão",
  },
  {
    titulo: "Visão",
    descricao: "Queremos alcançar pessoas no mundo todo, incentivando o aprendizado contínuo de idiomas de forma acessível e personalizada.",
    img: visaoImg,
    alt: "Visão",
  },
  {
    titulo: "Valores",
    descricao: "Acreditamos na inclusão, acessibilidade, inovação e qualidade de ensino, mantendo o foco na ajuda genuína aos usuários.",
    img: valoresImg,
    alt: "Valores",
  },
];

const Missao = () => {
  return (
    <div className="container">
      {secoes.map((secao, index) => (
        <div key={index}>
          <h1 className="titulo">{secao.titulo}</h1>
          <div className={`section ${index !== 0 ? "invertido" : "texto-abaixo"}`}>
            <img src={secao.img} alt={secao.alt} className="image" />
            <div className="text">
              <p>{secao.descricao}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Missao;
