import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="container">
        <a
          className="card"
          href="https://gareth-kwan.github.io/html-refactor/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "background-image": "url(/image/project-1.jpg)" }}>
          <h3 className="portfolio-text">Project 1 - HTML Refactor</h3>
          <p className="portfolio-text-body">Using my knowledge of HTML to refactor existing code</p>
        </a>
        <a
          className="card"
          href="https://gareth-kwan.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "background-image": "url(/image/project-2.jpg)" }}>
          <h3 className="portfolio-text">Project 2 - Portfolio</h3>
          <p className="portfolio-text-body">Using my knowledge of CSS to create a new portfolio</p>
        </a>
        <a
          className="card"
          href="https://gareth-kwan.github.io/password-generator/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "background-image": "url(/image/project-3.jpg)" }}>
          <h3 className="portfolio-text">Project 3 - Password Generator</h3>
          <p className="portfolio-text-body">
            Using my knowledge of JavaScript to create a password generator
          </p>
        </a>
        <a
          className="card"
          href="https://gareth-kwan.github.io/code-quiz/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "background-image": "url(/image/project-4.jpg)" }}>
          <h3 className="portfolio-text">Project 4 - Code Quiz</h3>
          <p className="portfolio-text-body">Using my knowledge of web APIs to create a code quiz</p>
        </a>
        <a
          className="card"
          href="https://gareth-kwan.github.io/work-day-scheduler/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "background-image": "url(/image/project-5.jpg)" }}>
          <h3 className="portfolio-text">Project 5 - Work Day Schedule</h3>
          <p className="portfolio-text-body">
            Using my knowledge of third-party APIs to create a work day schedule
          </p>
        </a>
        <a
          className="card"
          href="https://gareth-kwan.github.io/weather-dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "background-image": "url(/image/project-6.jpg)" }}>
          <h3 className="portfolio-text">Project 6 - Weather Dashboard</h3>
          <p className="portfolio-text-body">
            Using my knowledge of server-side APIs to create a weather dashboard
          </p>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
