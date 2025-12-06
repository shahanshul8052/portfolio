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
      {/* Header Section
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
      </header> */}

<section className="hero-section section visible">
  <div className="hero-top-row">
    <div className="hero-photo">
      <img
        src={`${process.env.PUBLIC_URL}/0Y6A9294.jpg`}
        alt="Anshul Shah"
        className="profile-image-circle"
      />
    </div>
    <div className="hero-info">
      <h1>Anshul Shah</h1>
      <h2>CS @ Purdue · ML, Systems, Civic Tech</h2>
    </div>
    <div className="hero-nav">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>

    </div>
  </div>

  <p className="hero-description">
      I'm a recent Purdue CS grad with a focus in machine learning and a minor in management—currently working on integrations at Sally Beauty. My background spans full-stack development, ML/AI, and civic tech. I'm passionate about simplifying complex systems and building tools that drive real-world impact.

  </p>
</section>

      {/* About Me Section
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
              I'm a senior studying Computer Science at Purdue University, with a concentration in Machine Learning and a minor in Management. My interests lie at the intersection of AI, software engineering, and civic technology.
            </p>
            <p>
              I'm currently helping out for <strong>Insighter</strong>, a civic data startup focused on scraping and standardizing city meeting content (videos, agendas, transcripts) into a searchable, structured format. Our pipeline is designed for scale — built using Python, Selenium, and YouTube/Vimeo APIs.
            </p>
            <p>
              Previously, I interned at <strong>AppUnik</strong>, where I built and deployed GPT-powered recommendation systems using FastAPI, Redis, and Hugging Face Transformers — optimizing for performance with AWS Lambda and vector search.
            </p>
            <p>Follow along as I share my journey!</p>
          </div>
        </div>
      </section> */}

      <section id="about" className="current-work">
        <h2>What I'm Doing</h2>
        <ul>
          <li>
      Working as a Software Engineer at Sally Beauty in Dallas, focused on building internal tools and improving developer experiences.
    </li>
    <li>
      Previously contributed to Insighter, a civic tech startup, where I helped design tools to structure and search government meeting data.
    </li>
    <li>
      Served as a Teaching Assistant for Systems Programming at Purdue, and conducted research applying natural language processing to economic data.
    </li>
          <li>
            Reading <i>A Gentleman in Moscow</i> and learning more about enterprise architecture.
          </li>
        </ul>
      </section>


      <section id="projects" className="projects-section section">
  <h2>Projects</h2>
  <div className="project-list">
    <div className="project-item">
      <strong>Civic Data Scraper (Orca Startup)</strong>
      <p>Leading scalable pipeline for scraping and standardizing city meeting data using Python, Selenium, yt-dlp, and YouTube/Vimeo APIs.</p>
    </div>

    <div className="project-item">
      <a href="https://github.com/shahanshul8052/aichatbot" target="_blank" rel="noopener noreferrer">
        Fantasy Premier League Chatbot
      </a>
      <p>Flask-based assistant recommending FPL players using Selenium + SQLite for data scraping and storage.</p>
    </div>

    <div className="project-item">
      <a href="https://github.com/shahanshul8052/nba_visualization" target="_blank" rel="noopener noreferrer">
        NBA Data Visualization
      </a>
      <p>Built PyQt6 dashboard to visualize NBA player performance with Matplotlib + real-time data APIs.</p>
    </div>

    <div className="project-item">
      <a href="https://github.com/shahanshul8052/MLProjects" target="_blank" rel="noopener noreferrer">
        Facial Detection
      </a>
      <p>Deep learning model for real-time facial detection using OpenCV, TensorFlow, and Python.</p>
    </div>

    <div className="project-item">
      <strong>Shell Project</strong>
      <p>Custom Unix-like shell in C++ with support for piping, I/O redirection, background processes, and control flow (loops/conditionals).</p>
    </div>

    <div className="project-item">
      <a href="https://github.com/shahanshul8052/cs348-db" target="_blank" rel="noopener noreferrer">
        Library Management System
      </a>
      <p>Full-stack app with React, Node.js, and MySQL for searching, checking out, and managing book transactions.</p>
    </div>
  </div>
</section>


      <section id="experience" className="experience-section">
<h2>Experience</h2>
<div className="experience-list">
<div className="experience-item">
<div className="experience-item">
  <strong>Sally Beauty Holdings</strong> – Software Engineer (June 2025 – Present)
  <p>
        Modernizing internal systems by building APIs with Node.js and MuleSoft across order management and customer platforms. Supporting Sally’s digital transformation with scalable backend infrastructure.

  </p>
</div>

</div>


<div className="experience-item">
<strong>Insighter (Startup)</strong> – Backend Developer (Apr 2025 – June 2025)
<p>
Scraping, cleaning, and structuring city council meeting data using Python, Selenium, and yt-dlp.
Improving onboarding time with modular architecture and regex/NLP tools.
</p>
</div>


<div className="experience-item">
<strong>Purdue University</strong> – Research Assistant (Sep 2023 – May 2024)
<p>
Used GPT-based summarization + TF-IDF scoring to classify Fed speeches as hawkish/dovish/neutral.
Built NLP pipeline for sentiment trend tracking and economic impact analysis.
</p>
</div>


<div className="experience-item">
<strong>AppUnik</strong> – Machine Learning Intern (Sep 2022 – Aug 2023)
<p>
Built and deployed GPT recommender system using FastAPI, Redis, FAISS, and AWS Lambda.
Reduced latency by 40% and improved personalization accuracy by 18%.
</p>
</div>


<div className="experience-item">
<strong>Battelle</strong> – Software Engineering Intern (Aug 2022 – May 2023)
<p>
Improved hazard detection accuracy 25% via anomaly modeling in Python.
Deployed real-time field test modules across 3 platforms using Agile sprints.
</p>
</div>


<div className="experience-item">
<strong>AT&T</strong> – Externship (Jul 2021 – Aug 2021)
<p>
Participated in virtual technical bootcamp learning about cybersecurity, data infrastructure, and mobile networks.
Completed self-paced modules and Q&A sessions with industry engineers to deepen technical foundation.
</p>
</div>
</div>
</section>


      
      {/* Contact Section */}
{/* <section id="contact" className="section contact">
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
</section> */}

<section id="contact" className="contact-section">
  <h2>Contact</h2>
  <p>Let's connect! You can find me on:</p>
  <ul className="contact-links">
    <li><a href="mailto:shahanshul@gmail.com">Email</a></li>
    <li><a href="https://linkedin.com/in/anshul-shah2" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
    <li><a href="https://github.com/shahanshul8052" target="_blank" rel="noopener noreferrer">GitHub</a></li>
  </ul>
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
