import { useState } from "react";
import "./header.css";
import logoVF from "../img/LogoVFC.png";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Header = ({ sectionProjects, sectionContact, sectionÀPropos }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [alignment, setAlignment] = useState("left");

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="justify" key="justify">
      <MenuIcon />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <header>
      <div>
        <img src={logoVF} alt="Logo Vitor" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
            {children}
          </ToggleButtonGroup>
        </Stack>
      </div>
      <nav className={menuOpen ? "open" : ""}>
        <button onClick={() => scrollToSection(sectionÀPropos)}>
          À PROPOS
        </button>
        <button onClick={() => scrollToSection(sectionProjects)}>
          PROJETS
        </button>
        <button onClick={() => scrollToSection(sectionContact)}>CONTACT</button>
      </nav>
    </header>
  );
};

export default Header;
