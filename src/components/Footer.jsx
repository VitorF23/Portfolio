import git from "../img/gitx.png";
import linkdinLogo from "../img/linkdinLogo.png";
import "../components/footer.css";

const Footer = ({ sectionContact }) => {
  const email = "vitorcastroferreiraf@gmail.com";
  const handleClickGit = () => {
    window.open("https://github.com/VitorF23", "_blank", "noopener,noreferrer");
  };
  const handleClickLinkdin = () => {
    window.open(
      "https://www.linkedin.com/in/vitor-ferreira-026488270",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <footer ref={sectionContact} className="contact">
      <p>Contact</p>
      <h2>
        Vous souhaitez me contacter ? Dans ce cas vous pouvez m'envoyer un mail
        à l'adresse <a href={`mailto:${email}`}> {email}</a> <></>
        et je veillerai à vous répondre dans les plus brefs délais.
      </h2>
      <div className="contact-logo">
        <img
          src={git}
          alt="Icone GitHub"
          onClick={handleClickGit}
          style={{ cursor: "pointer" }}
        />
        <img
          src={linkdinLogo}
          alt="Icone LinkdIn"
          onClick={handleClickLinkdin}
          style={{ cursor: "pointer" }}
        />
      </div>
      <h1>Vitor Ferreira - 2024</h1>
    </footer>
  );
};

export default Footer;
