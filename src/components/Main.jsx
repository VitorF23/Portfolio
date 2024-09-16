import "../components/main.css";
import My from "../img/My.jpg";
import dev from "../img/dev.png";
import html from "../img/html.png";
import node from "../img/node.png";
import mongo from "../img/mongo.png";
import reactLogo from "../img/react.png";
import cssLogo from "../img/css.png";
import jsLogo from "../img/js.png";
import reactNativeLogo from "../img/reactNative.png";
import tsLogo from "../img/ts.png";
import vinted from "../img/vinted.png";
import imgMain from "../img/imgMain.jpeg";
import pokemon from "../img/Pokemon.png";
import weather from "../img/weather.png";
import geoData from "../img/geoData.png";

const Main = ({ sectionProjects, sectionÀPropos }) => {
  const handleCVClick = () => {
    window.open("/CV.pdf", "_blank");
  };
  return (
    <main>
      <div className="div1">
        <div className="logo">
          <img src={My} alt="Vitor Ferreira" />
          <h1>Vitor Ferreira</h1>
          <p>Développeur Web</p>
        </div>
        <div className="div-img1">
          <img src={imgMain} alt="Image principale" />
        </div>
      </div>
      <div ref={sectionÀPropos} className="div-sectionÀpropos">
        <p>A PROPOS DE MOI</p>
        <div>
          <h2>
            Bonjour et bienvenue sur mon portfolio ! Je m'appelle Vitor, et je
            suis développeur web formé à l'école Le Reacteur à Paris. Au cours
            de ma formation, j'ai acquis une expertise solide en développement
            web, en particulier avec des technologies comme HTML, CSS,
            JavaScript, React, et Node.js. Passionné par la programmation et la
            création d'expériences utilisateur intuitives, j'aime relever des
            défis techniques et transformer des idées en projets concrets. Mes
            compétences incluent le développement front-end, back-end, ainsi que
            la création d'applications performantes et réactives. Je suis
            toujours à la recherche de nouvelles opportunités pour apprendre,
            évoluer et collaborer sur des projets innovants. Si vous êtes
            intéressée, n'hésitez pas à me contacter !
          </h2>
          <button onClick={handleCVClick}>Consulter mon CV</button>
        </div>
      </div>
      <div className="div-mes-competences">
        <img src={dev} alt="Développeur" className="img-background" />
        <div className="text">Mes compétences</div>
        <div className="img-logo">
          <div className="img-wrapper">
            <img src={html} alt="HTML Logo" />
          </div>
          <div className="img-wrapper">
            <img src={cssLogo} alt="CSS Logo" />
          </div>
          <div className="img-wrapper">
            <img src={jsLogo} alt="JavaScript Logo" />
          </div>
          <div className="img-wrapper">
            <img src={node} alt="Node Logo" />
          </div>
          <div className="img-wrapper">
            <img src={mongo} alt="MongoDB Logo" />
          </div>
          <div className="img-wrapper">
            <img src={reactLogo} alt="React Logo" />
          </div>
          <div className="img-wrapper">
            <img src={reactNativeLogo} alt="React Native Logo" />
          </div>
          <div className="img-wrapper">
            <img src={tsLogo} alt="TypeScript Logo" />
          </div>
        </div>
      </div>
      <div ref={sectionProjects} className="projects-section">
        <h2>Mes Projets</h2>
        <div className="projects-grid">
          <a
            href="https://vinted2.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={vinted} alt="Projet Vinted" className="project-image" />
          </a>
          <a
            href="https://pokemonsbyvita.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pokemon} alt="Projet Pokémon" className="project-image" />
          </a>
          <a
            href="https://weatherrea.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={weather}
              alt="Projet Application Météo"
              className="project-image"
            />
          </a>
          <a
            href="https://geodata.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={geoData} alt="Projet GeoData" className="project-image" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
