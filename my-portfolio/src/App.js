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
      { threshold: 0.2 }, // Trigger when 20% of the section is visible
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
            <h2>Software Engineer</h2>
          </div>
          <div className="hero-nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <p className="hero-description">
          I'm a Purdue CS grad with a focus in machine learning and a minor in
          management. I’m a software engineer on the Integrations team at Sally
          Beauty, where I build and support systems that connect enterprise
          platforms and keep business workflows running reliably.. My background
          spans full-stack development, machine learning, and data-driven
          applications. I enjoy working on complex systems and turning them into
          reliable and maintainable solutions that make a real impact at scale.
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
            Working as a Software Engineer at Sally Beauty in Dallas, building
            and enhancing enterprise integration services that support
            large-scale retail operations.
          </li>
          <li>
            Previously worked with CoverGov, a civic tech startup, where I
            helped design tools to structure and search government meeting data.
          </li>
          <li>
            Currently enrolled in an API and service design course to strengthen
            my foundation in system architecture and scalable backend design.
          </li>
          <li>
            Outside of work, I am currently reading (
            <i>A Gentleman in Moscow</i>) and staying active with soccer and
            pickleball.
          </li>
        </ul>
      </section>

      <section id="projects" className="projects-section section">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <strong>CoverGov Meeting Data Platform</strong>
            <p>
              Engineered a modular data ingestion pipeline to extract,
              normalize, and structure city council meeting data across varied
              web platforms using Python, Selenium, and video APIs. Designed
              standardized output schemas to support downstream processing and
              automation workflows.
            </p>
          </div>

          <div className="project-item">
            <a
              href="https://github.com/shahanshul8052/aichatbot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fantasy Premier League Assistant
            </a>
            <p>
              Built a Flask-based recommendation microservice that takes in live
              player statistics and generates fixture-aware suggestions using
              automated scraping pipelines and SQLite-backed analytics queries.
            </p>
          </div>

          <div className="project-item">
            <strong>Unix-Like Shell (C++)</strong>
            <p>
              Implemented a custom shell supporting process forking, piping, I/O
              redirection, background execution, and control flow constructs,
              demonstrating low-level systems programming and operating system
              interaction.
            </p>
          </div>

          <div className="project-item">
            <a
              href="https://github.com/shahanshul8052/cs348-db"
              target="_blank"
              rel="noopener noreferrer"
            >
              Library Management System
            </a>
            <p>
              Developed a full-stack application using React, Node.js, and MySQL
              with RESTful API design, relational schema modeling, and
              transaction-safe database operations.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <h2>Experience</h2>
        <div className="experience-list">
          <div className="experience-item">
            <strong>Sally Beauty Holdings</strong> – Software Engineer (June
            2025 – Present)
            <p>
              Modernizing enterprise integrations by designing and maintaining
              scalable APIs across order management, customer, and marketing
              systems. Implemented robust data transformation, validation, and
              error-handling logic to improve reliability of cross-system
              communication in event-driven workflows
            </p>
          </div>
        </div>

        <div className="experience-item">
          <strong>CoverGov(Startup)</strong> – Backend Developer (Apr 2025 –
          June 2025)
          <p>
            Built modular scraping pipelines using Python, Selenium, and yt-dlp
            to extract and standardize 100+ city council meetings. Improved
            deployment reliability through structured data validation and
            reusable architecture patterns.
          </p>
        </div>

        <div className="experience-item">
          <strong>Purdue University</strong> – Research Assistant (Sep 2023 –
          May 2024)
          <p>
            Developed an NLP pipeline using GPT-based summarization and TF-IDF
            scoring to classify 1,000+ Federal Reserve speeches by sentiment.
            Enabled trend analysis by designing a confidence-scored
            classification system for economic policy evaluation.
          </p>
        </div>

        <div className="experience-item">
          <strong>AppUnik</strong> – Machine Learning Intern (Sep 2022 – Aug
          2023)
          <p>
            Engineered a production-ready recommendation backend using FastAPI,
            Redis, FAISS, and AWS Lambda. Reduced API latency by 40% and
            improved personalization accuracy by 18% through optimized embedding
            retrieval.
          </p>
        </div>

        <div className="experience-item">
          <strong>Battelle</strong> – Software Engineering Intern (Aug 2022 –
          May 2023)
          <p>
            Improved hazard detection accuracy 25% via anomaly modeling in
            Python. Deployed real-time field test modules across 3 platforms
            using Agile sprints.
          </p>
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
          <li>
            <a href="mailto:shahanshul@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/anshul-shah2"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/shahanshul8052"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Anshul Shah</p>
        <div className="social-icons">
          <a
            href="https://linkedin.com/in/anshul-shah2"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/shahanshul8052"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
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
