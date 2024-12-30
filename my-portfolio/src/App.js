import React from "react";
import "./App.css";

function App() {
  return (
    <div className="page">
      {/* Header Section with Image */}
      <header className="header">
        <div className="header-content">
          <img
            src="./IMG_6651_Original.jpg"
            alt="Anshul Shah"
            className="profile-image"
          />
          <div className="header-text">
            <h1>Anshul Shah</h1>
            <nav className="nav-links">
              <a href="#about" className="nav-link">
                About Me
              </a>
              <a href="#current" className="nav-link">
                Current Approaches
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#experience" className="nav-link">
                Experience
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="section about">
        <div>
          <h2>About Me</h2>
          <p>
            I am a current senior at Purdue University, studying Computer
            Science, with specializations in Machine Learning/Artificial
            Intelligence and a Minor in Management. My interests lie in software
            engineering and machine learning, and I am passionate about
            leveraging these fields to create innovative solutions that have a
            meaningful impact on my community.
          </p>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="current" className="section current">
        <div>
          <h2>What I Am Currently Doing</h2>
          <p>
            <li>
              Working on an AI-powered chatbot to recommend Fantasy Premier
              League players based on real-time data and analysis.
            </li>
            <li>
              Teaching assistant for CS 252: Systems Programming at Purdue
              University.
            </li>
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div>
          <h2>Projects</h2>

          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              <a
                href="https://github.com/yourusername/fpl-chatbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/fpl-chatbot-image.webp"}
                  alt="FPL Chatbot"
                />
              </a>
            </div>
            <div className="project-content">
              <h3>Fantasy Premier League AI Chatbot</h3>
              <p>
                <strong>
                  Project Page |{" "}
                  <a
                    href="https://github.com/yourusername/fpl-chatbot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  |
                </strong>{" "}
                Jun 2023 - Present
              </p>
              <p>
                Built an AI-powered chatbot to recommend Fantasy Premier League
                players based on real-time data and analysis. The chatbot uses
                Flask for backend and BeautifulSoup for scraping live player
                statistics.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <a
                href="https://github.com/yourusername/library-management"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    process.env.PUBLIC_URL + "/library-management-image.webp"
                  }
                  alt="Library Management System"
                />
              </a>
            </div>
            <div className="project-content">
              <h3>Library Management System</h3>
              <p>
                <strong>
                  Project Page |{" "}
                  <a
                    href="https://github.com/yourusername/library-management"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  |
                </strong>{" "}
                Jan 2023 - Apr 2023
              </p>
              <p>
                Developed a full-stack library management system with React,
                Node.js, and MySQL to manage library records. The application
                allows users to search books, check-out books, and manage
                transactions efficiently.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              <a
                href="https://github.com/yourusername/ml-internship"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/ml-internship-image.webp"}
                  alt="Machine Learning Internship"
                />
              </a>
            </div>
            <div className="project-content">
              <h3>Machine Learning Internship at AppUnik</h3>
              <p>
                <strong>
                  Internship |{" "}
                  <a
                    href="https://github.com/yourusername/ml-internship"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  |
                </strong>{" "}
                Jun 2022 - Aug 2022
              </p>
              <p>
                Worked on building AI models for recommendation systems using
                TensorFlow and PyTorch. This experience involved handling large
                datasets, training models, and optimizing algorithms for better
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <div>
          <h2>Experience</h2>

          {/* Experience 1 */}
          <div className="experience-card">
            <div className="experience-content">
              <h3>Machine Learning Internship at AppUnik </h3>
              <p>
                <strong>Jun 2023 - Aug 2023</strong>
              </p>
              <ul>
                <li>
                  Collaborated with a team to design and develop an AI-based
                  customer service tool.
                </li>
                <li>
                  Implemented various machine learning algorithms to improve
                  predictive accuracy.
                </li>
                <li>Optimized backend systems, reducing load times by 30%.</li>
              </ul>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="experience-card">
            <div className="experience-content">
              <h3></h3>
              <p>
                <strong>Jan 2022 - May 2022</strong>
              </p>
              <ul>
                <li>
                  Conducted data cleaning and preprocessing on large datasets.
                </li>
                <li>Built and tested predictive models using Scikit-Learn.</li>
                <li>
                  Visualized data insights to drive business strategy decisions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Anshul Shah</p>
      </footer>
    </div>
  );
}
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
});
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});


export default App;
