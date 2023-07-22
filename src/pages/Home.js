import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, i am Mousselmal Merouane</h2>
        <div className="prompt">
          <p> Front-End web developing, learning react and node js </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, MaterialUI, Yarn,
              TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, SQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript, c++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
