import React from "react";
import "./App.css";

function App() {
  return (
    <div className="page">
      {/* Header Section with Image */}
      <header className="header">
        <div className="header-content">
          <img
            src={process.env.PUBLIC_URL + "/dog-8198719_1280.webp"} 
            alt="Anshul Shah"
            className="profile-image"
          />
          <div className="header-text">
            <h1>Anshul Shah</h1>
            <nav className="nav-links">
              <a href="#about" className="nav-link">About Me</a>
              <a href="#current" className="nav-link">Current Approaches</a>
              <a href="#projects" className="nav-link">Projects</a>
            </nav>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="section about">
        <div>
          <h2>About Me</h2>
          <p>
            I am a current senior at Purdue University, studying Computer Science, with specializations in Machine Learning/Artificial Intelligence and a Minor in Management. 
            My interests lie in software engineering and machine learning, and I am passionate about leveraging these fields to create innovative solutions that have a meaningful impact on my community.
          </p>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="current" className="section current">
        <div>
          <h2>What I Am Currently Doing</h2>
          <p>
            I'm currently building an AI-powered chatbot for Fantasy Premier League using Python and Flask. The chatbot helps users make informed decisions based on real-time player stats and fixture analysis.
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
              <a href="https://github.com/yourusername/fpl-chatbot" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + "/fpl-chatbot-image.webp"} alt="FPL Chatbot" />
              </a>
            </div>
            <div className="project-content">
              <h3>Fantasy Premier League AI Chatbot</h3>
              <p><strong>Project Page | GitHub |</strong> Jun 2023 - Present</p>
              <p>Built an AI-powered chatbot to recommend Fantasy Premier League players based on real-time data and analysis. The chatbot uses Flask for backend and BeautifulSoup for scraping live player statistics.</p>
              <a href="https://github.com/yourusername/fpl-chatbot" className="project-link">GitHub</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <a href="https://github.com/yourusername/library-management" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + "/library-management-image.webp"} alt="Library Management System" />
              </a>
            </div>
            <div className="project-content">
              <h3>Library Management System</h3>
              <p><strong>Project Page | GitHub |</strong> Jan 2023 - Apr 2023</p>
              <p>Developed a full-stack library management system with React, Node.js, and MySQL to manage library records. The application allows users to search books, check-out books, and manage transactions efficiently.</p>
              <a href="https://github.com/yourusername/library-management" className="project-link">GitHub</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              <a href="https://github.com/yourusername/ml-internship" target="_blank" rel="noopener noreferrer">
                <img src={process.env.PUBLIC_URL + "/ml-internship-image.webp"} alt="Machine Learning Internship" />
              </a>
            </div>
            <div className="project-content">
              <h3>Machine Learning Internship at AppUnik</h3>
              <p><strong>Internship | GitHub |</strong> Jun 2022 - Aug 2022</p>
              <p>Worked on building AI models for recommendation systems using TensorFlow and PyTorch. This experience involved handling large datasets, training models, and optimizing algorithms for better performance.</p>
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

export default App;
