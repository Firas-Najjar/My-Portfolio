import "./Projects.css";

function Projects() {
  return (
    <div id="projects" className="container">
      <h1 className="title">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            className="circle"
            viewBox="0 0 1920 1080"
            xmlSpace="preserve"
          >
            <path
              fill="#5BE9B9"
              d="M1026.56 926.38c-212.54 0-384.83-172.29-384.83-384.83v-3.65c0-212.54 172.29-384.83 384.83-384.83s384.83 172.29 384.83 384.83v3.65c0 212.54-172.29 384.83-384.83 384.83z"
            ></path>
          </svg>
        </span>
        My Web Projects
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            className="rectangle"
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

      {/* ==============================================
          FEATURED FLAGSHIP SAAS PROJECT: LIGHT-INSIGHT
          ============================================== */}
      <div className="featured-saas-section">
        <div className="featured-saas-card">
          <div className="featured-saas-header">
            <div className="featured-badges">
              <span className="featured-pill main-pill">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="badge-star-icon"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Flagship SaaS Project
              </span>
              <span className="featured-pill status-pill">In Progress • Active Dev</span>
            </div>
            <a
              href="https://light-insight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="live-demo-button"
            >
              <span>Live Demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <div className="featured-saas-content">
            <div className="featured-saas-text">
              <div className="saas-brand-row">
                <img
                  src="/images/light-insight-logo.svg"
                  alt="LightInsight Logo"
                  className="saas-logo-icon"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <h2 className="saas-title">LIGHT-INSIGHT</h2>
              </div>
              <p className="saas-tagline">
                Modern Anonymous Feedback &amp; Survey Intelligence Platform
              </p>
              <p className="saas-description">
                LightInsight is my most advanced, full-stack SaaS project engineered to eliminate bias
                and ensure 100% genuine feedback in teams, classrooms, and communities. Built from
                concept to production with cutting-edge web technologies.
              </p>

              <div className="saas-features-grid">
                <div className="saas-feature-item">
                  <div className="feature-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5be9b9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div>
                    <strong>Zero-Footprint Anonymity</strong>
                    <p>Guaranteed respondent privacy with zero-knowledge tracking</p>
                  </div>
                </div>
                <div className="saas-feature-item">
                  <div className="feature-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5be9b9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <strong>Dynamic Survey Engine</strong>
                    <p>Fast visual builder with instant live response previews</p>
                  </div>
                </div>
                <div className="saas-feature-item">
                  <div className="feature-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5be9b9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                  </div>
                  <div>
                    <strong>Real-Time Analytics</strong>
                    <p>Automated metric aggregation &amp; clear data visualization</p>
                  </div>
                </div>
              </div>

              <div className="tech-stack-container">
                <span className="tech-stack-label">Tech Stack:</span>
                <div className="tech-badges-list">
                  <span className="tech-badge">Next.js 14</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Tailwind CSS</span>
                  <span className="tech-badge">MongoDB</span>
                  <span className="tech-badge">Clerk Auth</span>
                  <span className="tech-badge">Vercel</span>
                </div>
              </div>

              <div className="saas-action-cta">
                <a
                  href="https://light-insight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-saas-cta"
                >
                  <span>Explore light-insight.vercel.app</span>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginLeft: "6px" }}
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            <div className="featured-saas-visuals">
              <div className="mockup-frame main-mockup">
                <div className="mockup-header-bar">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="mockup-url">https://light-insight.vercel.app/analytics</span>
                </div>
                <img
                  src="/images/light-insight-analytics.webp"
                  alt="LightInsight Analytics Dashboard"
                  className="mockup-img"
                  loading="eager"
                />
              </div>
              <div className="mockup-frame secondary-mockup">
                <div className="mockup-header-bar">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="mockup-url">https://light-insight.vercel.app/survey</span>
                </div>
                <img
                  src="/images/light-insight-survey.webp"
                  alt="LightInsight Survey View"
                  className="mockup-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==============================================
          WEB PROJECTS LIST
          ============================================== */}
      <div className="projectsDiv">
        {/* Project 1: User Registration */}
        <div className="block">
          <div className="image">
            <img
              className="img"
              src="/images/login.webp"
              alt="User Registration and Login"
              loading="eager"
            />
            <div className="background"></div>
          </div>
          <div className="text">
            <div className="project-icon-badge">
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
            </div>
            <h1>User Registration &amp; Authentication</h1>
            <p>
              A secure authentication system implementing user registration, tokenized sessions,
              and password encryption. Built as a core foundation for mastering full-stack
              principles with Node.js, Express.js, and MongoDB.
            </p>
            <div className="project-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>JWT Auth</span>
            </div>
          </div>
        </div>

        <hr className="project-divider" />

        {/* Project 2: Car Diagnostic Manager */}
        <div className="block">
          <div className="text">
            <div className="project-icon-badge">
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
            </div>
            <h1>Car Diagnostic Manager</h1>
            <p>
              Developed as an intuitive solution for vehicle diagnostic scheduling and maintenance
              tracking. Simplifies fleet monitoring for car rental agencies, taxis, and vehicle
              owners with automated reminders and clean record management.
            </p>
            <div className="project-tags">
              <span>JavaScript ES6</span>
              <span>CSS3 &amp; Flexbox</span>
              <span>Interactive Tables</span>
              <span>Local Storage</span>
            </div>
          </div>
          <div className="image left">
            <img
              className="img leftimg"
              src="/images/table.webp"
              alt="Car diagnostic table"
              loading="eager"
            />
            <img
              className="img leftimg secondimg"
              src="/images/signin.webp"
              alt="Car diagnostic sign in"
              loading="eager"
            />
            <div className="background lefty"></div>
          </div>
        </div>

        <hr className="project-divider" />

        {/* Project 3: Nova Calendar */}
        <div className="block">
          <div className="image long">
            <img
              className="img calimg"
              src="/images/calendar.webp"
              alt="Nova Calendar"
              loading="eager"
            />
            <img
              className="img calimg secondimg"
              src="/images/DiagLogin.webp"
              alt="Nova Calendar Diagnostic"
              loading="eager"
            />
            <div className="background"></div>
          </div>
          <div className="text">
            <div className="project-icon-badge">
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
            </div>
            <h1>Nova Calendar</h1>
            <p>
              Nova Calendar is a responsive JavaScript calendar web application that allows users to
              create, organize, and manage appointments and events seamlessly with high performance
              and versatile interactive controls.
            </p>
            <div className="project-tags">
              <span>JavaScript ES6</span>
              <span>DOM Manipulation</span>
              <span>Event Handling</span>
              <span>Responsive UI</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="project-divider" />

      {/* ==============================================
          DESIGNS SHOWCASE
          ============================================== */}
      <div id="designs">
        <h1 className="title">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              className="circle"
              viewBox="0 0 1920 1080"
              xmlSpace="preserve"
            >
              <path
                fill="#5BE9B9"
                d="M1026.56 926.38c-212.54 0-384.83-172.29-384.83-384.83v-3.65c0-212.54 172.29-384.83 384.83-384.83s384.83 172.29 384.83 384.83v3.65c0 212.54-172.29 384.83-384.83 384.83z"
              ></path>
            </svg>
          </span>
          Some of My Designs
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              className="rectangle"
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

        <div className="slideshow-wrapper">
          <div className="slideshow">
            <div className="slide-1">
              <img alt="Design sample 1" src="/images/slideshow/1.webp" loading="eager" />
              <img alt="Design sample 2" src="/images/slideshow/2.webp" loading="eager" />
              <img alt="Design sample 3" src="/images/slideshow/3.webp" loading="eager" />
              <img alt="Design sample 4" src="/images/slideshow/4.webp" loading="eager" />
              <img alt="Design sample 5" src="/images/slideshow/5.webp" loading="eager" />
              <img alt="Design sample 1 repeat" src="/images/slideshow/1.webp" loading="eager" />
              <img alt="Design sample 2 repeat" src="/images/slideshow/2.webp" loading="eager" />
              <img alt="Design sample 3 repeat" src="/images/slideshow/3.webp" loading="eager" />
              <img alt="Design sample 4 repeat" src="/images/slideshow/4.webp" loading="eager" />
              <img alt="Design sample 5 repeat" src="/images/slideshow/5.webp" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
