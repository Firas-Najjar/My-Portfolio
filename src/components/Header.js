import "./Header.css";
import Resume from "../Resume.pdf";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  return (
    <div className="Header">
      <img className="name" alt="name" src="/images/firas-Logo.png" />
      <div className="HeaderAction">
        <h2>
          <div
          className="contactLink"
            onClick={() => {
              navigate("/contact");
            }}
          >
            contact
          </div>
        </h2>
        <div className="btn">
          <a
            href={Resume}
            download="Firas-Najjar-Resume"
            style={{ cursor: "default", textDecoration: "none"}}
          >
            <button type="submit" className="Resume">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
