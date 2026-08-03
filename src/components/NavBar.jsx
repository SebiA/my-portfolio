import "@fontsource/raleway";

export default function NavBar({ setActiveTab }) {
  return (
    <>
      <div className="nav-button-group">
        <div className="nav-button">
          <button onClick={() => setActiveTab("home")}>Home</button>
          <button onClick={() => setActiveTab("about")}>About</button>
          <button onClick={() => setActiveTab("projects")}>Projects</button>
          <button onClick={() => setActiveTab("resume")}>Resume</button>
          <button onClick={() => setActiveTab("contact")}>Contact</button>
        </div>
      </div>
    </>
  );
}
