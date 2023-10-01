import "./footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
    let navigate = useNavigate();
  return (
    <div className="Mainfooter">
      <div className="contact">
        <img src="./images/intrested.png"></img>
        <button onClick={() => {navigate('/contact')}}>Let's chat!</button>
      </div>
      <img className="firas-img" src="./images/white-firas.png" alt="" />
      <h3 className="pixels">Everyday, we level up.</h3>
      <img className="up-1" src="./images/1up.png" />
      <p>
        <a href="https://www.linkedin.com/in/firas-najjar-9b4a09221/" className="socialLinks">
          <span className="icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </span>
        </a>
        <a href="mailto:fir.fawzi@gamil.com" className="socialLinks">
          <span className="icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="envelope"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              ></path>
            </svg>
          </span>
        </a>
      </p>
      <div className="footmsg">
        Handcrafted by me
        <span className="icon">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="copyright"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"
            ></path>
          </svg>
        </span>
        najjar firas
      </div>
    </div>
  );
}

export default Footer;
