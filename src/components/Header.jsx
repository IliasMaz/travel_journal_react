import globeImage from "../assets/global2.svg";
import "../index.css";

export default function Header() {
  return (
    <header>
      <div className="div-header">
        <img src={globeImage} className="img-settings" alt="react-image" />
        <h1>my  GRtravel journal.</h1>
      </div>
    </header>
  );
}
