import "./contact.css";
import { useNavigate } from "react-router-dom";

function Contact() {
    let navigate = useNavigate();

  return (
    <div className="contactBody">
      <div className="contact-Header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 891 900"
          xmlSpace="preserve"
          className="reset"
          onClick={() => {window.location.reload(true)}}
        >
          <path
            fill="#6E07F3"
            d="M800.48 50.77l-65.06 63.64c-175.33-152.39-440.6-143.4-605.41 21.13C45.97 219.43-.38 331.03-.48 449.78c-.1 118.75 46.04 230.43 129.94 314.48 86.71 86.86 200.65 130.65 314.78 130.65 106.18 0 212.53-37.9 297.26-114.28 20.16-18.17 21.78-49.25 3.6-69.41-18.18-20.16-49.25-21.78-69.41-3.6-136.92 123.41-346.3 117.79-476.66-12.8C64.13 559.68 64.32 340 199.45 205.1 325.93 78.85 528.31 70.2 664.83 183.45l-63.39 62c-33.85 33.11-10.77 90.61 36.57 91.14l196.86 2.18c29.35.32 53.41-23.21 53.73-52.56l2.18-196.86c.53-47.34-56.45-71.69-90.3-38.58z"
          ></path>
        </svg>
        <img className="Logo" alt="name" src="/images/firas-Logo.png" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 891 900"
          xmlSpace="preserve"
          className="X"
          onClick={() => {navigate('/')}}
        >
          <path
            fill="#6E07F3"
            d="M761.29 37.25L445.5 353.04 130.81 38.34c-25.27-25.27-66.06-28.26-93.46-5.31-31.3 26.22-32.83 72.94-4.6 101.17L348.54 450 32.75 765.79c-26.78 26.78-26.78 70.19 0 96.96 26.78 26.78 70.19 26.78 96.96 0L445.5 546.96l314.69 314.69c25.27 25.27 66.06 28.26 93.46 5.31 31.3-26.22 32.83-72.94 4.6-101.17L542.46 450l315.79-315.79c26.78-26.78 26.78-70.19 0-96.96-26.78-26.78-70.19-26.78-96.96 0z"
          ></path>
        </svg>
      </div>
      <div className="content">
        <h1 className="thanksMsg">
          Thanks for getting in touch!
          <br />
          How can I make your day a little bit better?
        </h1>
        <form className="form" action="https://formsubmit.co/its.FirasNajjar@gmail.com" method="POST">

            {/* honeypot */}
            <input type="text" name="_honey" style={{display: "none"}} />

            {/* Disable Captcha */}
            <input type="hidden" name="_captcha" value="false" />

          <div className="fields">
            <div className="field">
              <label>Name</label>
              <input type="Text" style={{ marginRight: "30px" }} name="Name" required></input>
            </div>

            <div className="field">
              <label>Email</label>
              <input type="Text" name="eMail" required></input>
            </div>
          </div>
          <div className="Msg">
            <div>
              <label required>Message</label>
              <textarea type="Text" style={{height: "110px"}} name="Message" ></textarea>
            </div>
          </div>
          <button className="Submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
