import "@fontsource/raleway";

export default function NavBar({ setActiveTab }) {
  return (
    <>
      <div className="nav-button-group">
        <div class="nav-button">
          <button type="button" onClick={() => setActiveTab("home")}>Home</button>
          <button type="button" onClick={() => setActiveTab("about")}>About</button>
          <button type="button" onClick={() => setActiveTab("projects")}>Projects</button>
          <button type="button" onClick={() => setActiveTab("resume")}>Resume</button>
          <button type="button" onClick={() => setActiveTab("contact")}>Contact</button>
        </div>
      </div>
    </>
  );
}
