import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Parth P Shah </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I'm a tech enthusiast experimenting my way with various backend and frontend technologies.
            Additionally, I am currently employed as a software developer at
            Uniphore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hitting the Gym 💪
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs 👨‍💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🏝️
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Parth</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
