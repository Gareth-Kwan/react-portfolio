import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <section class="portfolio" id="portfolio">
      <h2 class="portfolio-title">Portfolio</h2>
      <div class="container">
        <a
          class="card"
          href="https://gareth-kwan.github.io/html-refactor/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "background-image": "url(/img/project-1.jpg)" }}>
          <h3 class="portfolio-text">Project 1 - HTML Refactor</h3>
          <p class="portfolio-text-body">Using my knowledge of HTML to refactor existing code</p>
        </a>
        <a
          class="card"
          href="https://gareth-kwan.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "background-image": "url(/img/project-2.jpg)" }}>
          <h3 class="portfolio-text">Project 2 - Portfolio</h3>
          <p class="portfolio-text-body">Using my knowledge of CSS to create a new portfolio</p>
        </a>
        <a
          class="card"
          href="https://gareth-kwan.github.io/password-generator/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "background-image": "url(/img/project-3.jpg)" }}>
          <h3 class="portfolio-text">Project 3 - Password Generator</h3>
          <p class="portfolio-text-body">Using my knowledge of JavaScript to create a password generator</p>
        </a>
        <a
          class="card"
          href="https://gareth-kwan.github.io/code-quiz/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "background-image": "url(/img/project-4.jpg)" }}>
          <h3 class="portfolio-text">Project 4 - Code Quiz</h3>
          <p class="portfolio-text-body">Using my knowledge of web APIs to create a code quiz</p>
        </a>
        <a
          class="card"
          href="https://gareth-kwan.github.io/work-day-scheduler/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "background-image": "url(/img/project-5.jpg)" }}>
          <h3 class="portfolio-text">Project 5 - Work Day Schedule</h3>
          <p class="portfolio-text-body">
            Using my knowledge of third-party APIs to create a work day schedule
          </p>
        </a>
        <a
          class="card"
          href="https://gareth-kwan.github.io/weather-dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ "background-image": "url(/img/project-6.jpg)" }}>
          <h3 class="portfolio-text">Project 6 - Weather Dashboard</h3>
          <p class="portfolio-text-body">
            Using my knowledge of server-side APIs to create a weather dashboard
          </p>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
