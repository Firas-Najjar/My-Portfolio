import "./Header.css";
import file from '../1up.png'
import { useNavigate } from "react-router-dom";

function Header() {
    let navigate = useNavigate();
  return (
    <div className="Header">
      <img className="name" alt="name" src="/images/firas-Logo.png" />
      <div className="HeaderAction">
        <h2>
          <a
            onClick={() => {
              navigate("/contact");
            }}
            href={file}
          >
            contact
          </a>
        </h2>
        <div className="btn">
          <a href="/" style={{cursor: "default"}}><button type="submit">Download CV</button></a>
        </div>
      </div>
    </div>
  );
}
export default Header;
