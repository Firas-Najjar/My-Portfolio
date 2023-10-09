import "./Projects.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Projects() {
  return (
    <div className="container">
      <h1 className="title">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            className="circle"
            enableBackground="new 0 0 1920 1080"
            version="1.1"
            viewBox="0 0 1920 1080"
            xmlSpace="preserve"
          >
            <path
              fill="#5BE9B9"
              d="M1026.56 926.38c-212.54 0-384.83-172.29-384.83-384.83v-3.65c0-212.54 172.29-384.83 384.83-384.83s384.83 172.29 384.83 384.83v3.65c0 212.54-172.29 384.83-384.83 384.83z"
            ></path>
          </svg>
        </span>
        My web projects
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            className="rectangle"
            version="1.1"
            viewBox="0 0 1920 1080"
            xmlSpace="preserve"
          >
            <path
              fill="#5BE9B9"
              d="M1717.36 799H202.64c-64.21 0-116.27-52.06-116.27-116.27V345.11c0-64.21 52.06-116.27 116.27-116.27h1514.72c64.21 0 116.27 52.06 116.27 116.27v337.62c0 64.21-52.05 116.27-116.27 116.27z"
            ></path>
          </svg>
        </span>
      </h1>
      <div className="projectsDiv">
        <div className="block marginTop">
          <div className="image">
            <LazyLoadImage
              effect="blur"
              className="img"
              src="./images/login.png"
              alt=""
            />
            <div className="background"></div>
          </div>
          <div className="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 1073 1073.22"
              xmlSpace="preserve"
            >
              <path
                fill="#6E07F3"
                d="M799.44 1072.73H.4V273.69C.4 122.73 122.77.36 273.72.36h525.72c150.95 0 273.32 122.37 273.32 273.32V799.4c.01 150.96-122.37 273.33-273.32 273.33z"
              ></path>
              <path
                fill="#FFF"
                d="M325.43 475.94L470.34 620.85 783.48 307.71 855.74 379.98 542.6 693.12 470.34 765.38 398.08 693.12 253.16 548.2z"
              ></path>
            </svg>
            <h1>User regestration and login</h1>
            <p>
              one of my first steps in the web development was the
              implementation of user regestration and login and learnig to use
              Node.js, express.js and mongoDB in the process,
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="block">
          <div className="text" style={{ marginTop: 3 + "vw" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 1073 1073.22"
              xmlSpace="preserve"
            >
              <path
                fill="#6E07F3"
                d="M799.44 1072.73H.4V273.69C.4 122.73 122.77.36 273.72.36h525.72c150.95 0 273.32 122.37 273.32 273.32V799.4c.01 150.96-122.37 273.33-273.32 273.33z"
              ></path>
              <path
                fill="#FFF"
                d="M325.43 475.94L470.34 620.85 783.48 307.71 855.74 379.98 542.6 693.12 470.34 765.38 398.08 693.12 253.16 548.2z"
              ></path>
            </svg>
            <h1>Car diagnostic Manager</h1>
            <p>
              I developed this web application as a solution for car diagnostic
              scheduling as it can be very tiresome to keep track of when to
              take your vehicle to the nearest diagnostic center, especially if
              you have more than one car! <br />
              <br /> CAR CHECK promises to make the task of scheduling car
              diagnostic is much more simple and intuitive whether you have a
              Taxis, Cars for rent, or any other vehicles
            </p>
          </div>
          <div className="image left">
            <LazyLoadImage
              effect="blur"
              className="img leftimg"
              src="./images/table.png"
              alt=""
            />
            <LazyLoadImage
              effect="blur"
              className="img leftimg secondimg"
              src="./images/signin.png"
              alt=""
            />
            <div className="background lefty"></div>
          </div>
        </div>
        <hr></hr>
        <div className="block">
          <div className="image long">
            <LazyLoadImage
              effect="blur"
              className="img"
              src="./images/calendar.png"
              alt=""
            />
            <LazyLoadImage
              effect="blur"
              className="img secondimg"
              src="./images/DiagLogin.png"
              alt=""
            />
            <div className="background"></div>
          </div>
          <div className="text" style={{ marginTop: 8 + "vw" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 1073 1073.22"
              xmlSpace="preserve"
            >
              <path
                fill="#6E07F3"
                d="M799.44 1072.73H.4V273.69C.4 122.73 122.77.36 273.72.36h525.72c150.95 0 273.32 122.37 273.32 273.32V799.4c.01 150.96-122.37 273.33-273.32 273.33z"
              ></path>
              <path
                fill="#FFF"
                d="M325.43 475.94L470.34 620.85 783.48 307.71 855.74 379.98 542.6 693.12 470.34 765.38 398.08 693.12 253.16 548.2z"
              ></path>
            </svg>
            <h1>Nova calender</h1>
            <p>
              Nova Calendar is a JavaScript calendar web application that allows
              you to create and manage calendars online. It is a comprehensive
              and versatile solution, offering a wide range of features and
              capabilities.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <h1 className="title">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            className="circle"
            enableBackground="new 0 0 1920 1080"
            version="1.1"
            viewBox="0 0 1920 1080"
            xmlSpace="preserve"
          >
            <path
              fill="#5BE9B9"
              d="M1026.56 926.38c-212.54 0-384.83-172.29-384.83-384.83v-3.65c0-212.54 172.29-384.83 384.83-384.83s384.83 172.29 384.83 384.83v3.65c0 212.54-172.29 384.83-384.83 384.83z"
            ></path>
          </svg>
        </span>
        Some of my Designs
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            className="rectangle"
            version="1.1"
            viewBox="0 0 1920 1080"
            xmlSpace="preserve"
          >
            <path
              fill="#5BE9B9"
              d="M1717.36 799H202.64c-64.21 0-116.27-52.06-116.27-116.27V345.11c0-64.21 52.06-116.27 116.27-116.27h1514.72c64.21 0 116.27 52.06 116.27 116.27v337.62c0 64.21-52.05 116.27-116.27 116.27z"
            ></path>
          </svg>
        </span>
      </h1>
      <div className="slideshow">
        <div className="slide-1">
          <img alt="" src="./images/slideshow/1.png"></img>
          <img alt="" src="./images/slideshow/2.png"></img>
          <img alt="" src="./images/slideshow/3.png"></img>
          <img alt="" src="./images/slideshow/4.png"></img>
          <img alt="" src="./images/slideshow/5.png"></img>
          <img alt="" src="./images/slideshow/1.png"></img>
          <img alt="" src="./images/slideshow/2.png"></img>
          <img alt="" src="./images/slideshow/3.png"></img>
          <img alt="" src="./images/slideshow/4.png"></img>
          <img alt="" src="./images/slideshow/5.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Projects;
