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
                Ongoing Projects
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
            Hello! I am a current senior at Purdue University, majoring in Computer
            Science, fueld with a passion for problem-solving and making an impact with technology
            Using creativity and technical expertise, I love bringing ideas to life
            At Purdue, I am specializing in Machine Learning/Artificial
            Intelligence with a Minor in Management. My interests lie in software
            engineering and machine learning. 
            Outside of academics, I enjoy playing soccer, reading books, and
            spending time with friends and family. Growing up in the midst of Dallas,
            I became an avid Mavericks fan and discovered my love for traveling, and finding
            new places. these allowed me to stay active and engaged both on and off campus. 
            Follow along as I share my journey as a Computer Scientist
          </p>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="current" className="section current">
        <div>
          <h2>Current Endeavors</h2>
          <p>
            <li>
              Developing an AI-powered chatbot to recommend Fantasy Premier
              League players using real-time data and analysis.
            </li>
            <li>
              Serving as a Teaching assistant for CS 252: Systems Programming at Purdue
              University.
            </li>
            <li>
              Currently Reading <i>Crime and Punishment</i> by Fyodor Dostoevsky.
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
                href="https://github.com/shahanshul8052/aichatbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={"./fpl.jpg"}
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
                    href="https://github.com/shahanshul8052/aichatbot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  |
                </strong>{" "}
                Dec 2024 - Jan 2025
              </p>
              <p>
              Developed an AI-powered Fantasy Premier League chatbot using Selenium for live data scraping, 
              SQLite for data management, 
              and Flask APIs for dynamic player recommendations.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <a
                href="https://github.com/shahanshul8052/cs348-db"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    "./lib.png"
                  }
                  alt="Library Management System"
                />
              </a>
            </div>
            <div className="project-content">
              <h3>Library Management System</h3>
              <p>
                <strong>
                  
                  <a
                    href="https://github.com/shahanshul8052/cs348-db"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  |
                </strong>{" "}
                Feb 2024 - Apr 2024
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
                href="https://github.com/shahanshul8052/nba_visualization"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={"./DV.jpg"}
                  alt="Data Vis"
                />
              </a>
            </div>
            <div className="project-content">
              <h3>NBA Data Visualization</h3>
              <p>
                <strong>
                  <a
                    href="https://github.com/shahanshul8052/nba_visualization"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  |
                </strong>{" "}
                Nov 2024 - Dec 2024
              </p>
              <p>
              Developed an interactive Fantasy Basketball Dashboard using Python, PyQt6, Matplotlib, and Pandas, 
              integrating the NBA API for real-time and historical data. 
              <br></br>
              Dashboard allows users to visualize player performance, generate matchup insights, and 
              compare players, providing data insights for Fantasy Basketball enthusiasts.
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
