import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

const tabs = {
  home: <Home />,
  about: <About />,
  projects: <Projects />,
  resume: <Resume />,
  contact: <Contact />,
};

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <div>
        <div className="name-label-top">
          <p>Sebastian Alderucci</p>
        </div>
        <NavBar setActiveTab={setActiveTab} />
      </div>
      {tabs[activeTab]}
    </>
  );
}
