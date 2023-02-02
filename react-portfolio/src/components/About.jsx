import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div class="about-me-container">
      <header>
        <h1 class="header" id="home">
          Welcome to my Portfolio.
          <br />
          My name is <span class="name"> Gareth Kwan</span> and I am a <span class="name">Web developer</span>
        </h1>
      </header>
      <section class="about-me" id="about">
        <img class="avatar" src="img\About_Me_Icon.png" alt="" />
        <div>
          <h2 class="about-me-title">About Me</h2>
          <p class="about-me-text">
            Hi there! I'm a junior web developer with a passion for creating dynamic, interactive, and
            user-friendly websites. I have experience in HTML, CSS, and JavaScript and am proficient in
            various front-end frameworks such as React. I'm eager to expand my skills and work on challenging
            projects to improve my coding abilities. When I'm not coding, I love to stay updated on the latest
            web development trends and attend tech events. I'm excited to continue my career as a web
            developer and make an impact in the industry.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
