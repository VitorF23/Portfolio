import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { useRef } from "react";

function App() {
  const sectionProjects = useRef(null);
  const sectionContact = useRef(null);
  const sectionÀPropos = useRef(null);
  return (
    <>
      <Header
        sectionProjects={sectionProjects}
        sectionContact={sectionContact}
        sectionÀPropos={sectionÀPropos}
      />
      <Main sectionProjects={sectionProjects} sectionÀPropos={sectionÀPropos} />
      <Footer sectionContact={sectionContact} />
    </>
  );
}

export default App;
