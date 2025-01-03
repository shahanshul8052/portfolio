import React, { useEffect } from "react";
import "./App.css";

function App() {
  // Add scroll animation with IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // Optional: Remove visibility when scrolling away
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup the observer
  }, []);

  return (
    <div className="page">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
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
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="section about">
        <div className="about-container">
          <img
            src={`${process.env.PUBLIC_URL}/IMG_6651_Original.jpg`}
            alt="Anshul Shah"
            className="profile-image-large"
          />
          <div className="content">
            <h2>About Me</h2>
            <p>
              Hello! I am a current senior at Purdue University, majoring in
              Computer Science, fueled with a passion for problem-solving and
              making an impact with technology. Using creativity and technical
              expertise, I love bringing ideas to life. At Purdue, I am
              specializing in Machine Learning/Artificial Intelligence with a
              Minor in Management. My interests lie in software engineering and
              machine learning.
            </p>
            <p>
              Outside of academics, I enjoy playing soccer, reading books, and
              spending time with friends and family. Growing up in the midst of
              Dallas, I became an avid Mavericks fan and discovered my love for
              traveling and finding new places. These allowed me to stay active
              and engaged both on and off campus.
            </p>
            <p>Follow along as I share my journey</p>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="current" className="section current">
        <div className="content">
          <h2>Current Endeavors</h2>
          <ul>
            <li>
              Developing an AI-powered chatbot to recommend Fantasy Premier
              League players using real-time data and analysis.
            </li>
            <li>
              Serving as a Teaching Assistant for CS 252: Systems Programming at
              Purdue University.
            </li>
            <li>
              Currently Reading <i>Crime and Punishment</i> by Fyodor
              Dostoevsky.
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="content">
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
                  src={`${process.env.PUBLIC_URL}/fpl.jpg`}
                  alt="Fantasy Premier League Chatbot"
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
                Developed an AI-powered Fantasy Premier League chatbot using
                Selenium for live data scraping, SQLite for data management, and
                Flask APIs for dynamic player recommendations.
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
                  src={`${process.env.PUBLIC_URL}/DV.png`}
                  alt="NBA Data Visualization"
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
                Developed an interactive Fantasy Basketball Dashboard using
                Python, PyQt6, Matplotlib, and Pandas, integrating the NBA API
                for real-time and historical data.
                <br></br>
                Dashboard allows users to visualize player performance, generate
                matchup insights, and compare players, providing data insights
                for Fantasy Basketball enthusiasts.
              </p>
            </div>
          </div>
          {/* Project 4 */}
          <div className="project-card">
            <div className="project-image">
              <a
                href="https://github.com/shahanshul8052/MLProjects"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/6154.webp`}
                  alt="Facial Detection"
                />
              </a>
            </div>
            <div className="project-content">
              <h3>Facial Detection</h3>
              <p>
                <strong>
                  <a
                    href="https://github.com/shahanshul8052/MLProjects"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  |
                </strong>{" "}
                June 2024
              </p>
              <p>
                Developed a facial detection model using OpenCV, Python, and
                Tensorflow.
                <br></br>
                Project leverages deep learning models for real time face
                detection
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
                  src={`${process.env.PUBLIC_URL}/lib.png`}
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
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <div className="content">
          <h2>Experience</h2>

          {/* Experience 1 */}
          <div className="experience-card">
            <img
              src={`${process.env.PUBLIC_URL}/purdue.png`}
              alt="Teaching Assistant"
              className="experience-image"
            />
            <div className="experience-content">
              <h3>Teaching Assistant</h3>
              <p>
                <strong>Purdue Computer Science</strong> |{" "}
                <strong>Aug 2024 – Present</strong>
              </p>
              <ul>
                <li>
                  Facilitated weekly Problem-Solving (PSO) sessions for CS 193,
                  focusing on Unix/Linux commands, shell scripting, and version
                  control using Git.
                </li>
                <li>
                  Evaluated student assignments and delivered actionable
                  feedback, ensuring proficiency in debugging and advanced text
                  editing tools like Vim.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="experience-card">
            <img
              src={`${process.env.PUBLIC_URL}/research.png`}
              alt="research"
              className="experience-image"
            />
            <div className="experience-content">
              <h3>Research Assistant</h3>
              <p>
                <strong>
                  Purdue University - Mitch E. Daniels School of Business
                </strong>{" "}
                | <strong>Sep 2023 – May 2024</strong>
              </p>
              <ul>
                <li>
                  Conducted NLP analysis on a dataset of 1,000+ financial
                  articles to assess the impact of Federal Reserve statements on
                  economic indicators.
                </li>
                <li>
                  Leveraged Python and machine learning frameworks for sentiment
                  analysis and predictive modeling to uncover market insights.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="experience-card">
            <img
              src={`${process.env.PUBLIC_URL}/image.png`}
              alt="ML Intern"
              className="experience-image"
            />

            <div className="experience-content">
              <h3>Machine Learning Intern</h3>
              <p>
                <strong>AppUnik - AI Solutions and Predictive Models</strong> |{" "}
                <strong>Sep 2022 – Aug 2023</strong>
              </p>
              <ul>
                <li>
                  Designed and deployed an LLM-driven recommendation engine for
                  personalized content delivery, utilizing GPT fine-tuning.
                </li>
                <li>
                  Built comprehensive AI pipelines incorporating TensorFlow,
                  PyTorch, and Hugging Face for text and image processing tasks.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 4 */}
          <div className="experience-card">
            <img
              src={`${process.env.PUBLIC_URL}/battelle.jpg`}
              alt="Data Research Assistant"
              className="experience-image"
            />
            <div className="experience-content">
              <h3>Software Engineering Intern</h3>
              <p>
                <strong>
                  Battelle - Algorithm Development for Biodetection Platform
                </strong>{" "}
                | <strong>Aug 2022 – May 2023</strong>
              </p>
              <ul>
                <li>
                  Engineered Python-based models for hazard detection, achieving
                  a 25% improvement in accuracy and a 20% reduction in false
                  positives.
                </li>
                <li>
                  Collaborated with cross-functional teams in an Agile
                  environment to ensure the on-time delivery of robust
                  solutions.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 5 */}
          <div className="experience-card">
            <img
              src={`${process.env.PUBLIC_URL}/atnt.png`}
              alt="At&t"
              className="experience-image"
            />
            <div className="experience-content">
              <h3>Externship</h3>
              <p>
                <strong>AT&T</strong> | <strong>Jul 2021 – Aug 2021</strong>
              </p>
              <ul>
                <li>
                  Gained insights from industry experts on technology trends,
                  data analytics, and advancements in communication.
                </li>
                <li>
                  Participated in self-paced learning modules on cybersecurity
                  and device protection, gaining a deep understanding of AT&T’s
                  technological ecosystem.
                </li>
                <li>
                  Earned a Credly badge and completion certificate, validating
                  acquired skills and knowledge.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
<section id="contact" className="section contact">
  <div className="content">
    <h2>Contact Me</h2>
    <p>
      Feel free to reach out to me through any of the platforms below. I’m always excited to connect!
    </p>
    <ul className="contact-list">
  <li>
    <a href="mailto:shahanshul@gmail.com" className="contact-link">
      <i className="fas fa-envelope"></i> Email
    </a>
  </li>
  <li>
    <a href="https://linkedin.com/in/anshul-shah2" target="_blank" rel="noopener noreferrer" className="contact-link">
      <i className="fab fa-linkedin"></i> LinkedIn
    </a>
  </li>
  <li>
    <a href="https://github.com/shahanshul8052" target="_blank" rel="noopener noreferrer" className="contact-link">
      <i className="fab fa-github"></i> GitHub
    </a>
  </li>
</ul>
  </div>
</section>


      {/* Footer */}
      <footer>
  <p>&copy; 2024 Anshul Shah</p>
  <div className="social-icons">
    <a href="https://linkedin.com/in/anshul-shah2" target="_blank" rel="noopener noreferrer" className="social-link">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/shahanshul8052" target="_blank" rel="noopener noreferrer" className="social-link">
      <i className="fab fa-github"></i>
    </a>
    <a href="mailto:shahanshul@gmail.com" className="social-link">
      <i className="fas fa-envelope"></i>
    </a>
  </div>
  <div className="resume-download">
    <a
      href={`${process.env.PUBLIC_URL}/resume.pdf`}
      download="Anshul_Shah_Resume.pdf"
      className="download-link"
    >
      <i className="fas fa-file-download"></i> Download Resume
    </a>
  </div>
</footer>


    </div>
  );
}

export default App;