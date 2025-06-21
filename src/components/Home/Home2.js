import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import {
  AiFillGithub,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
                 <Button 
        as={Link}
        to={'/project'}
        className="  galaxy-btn"
        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
      >
        🚀 See My Projects
      </Button>
      <Container>
            <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with{" "}
              <b className="purple">front-end development</b> after shifting
              careers from physical therapy, and I've been coding ever since! 👩‍💻
              <br />
              <br />
              I'm most comfortable working with
              <i>
                <b className="purple"> JavaScript, React, and Tailwind CSS. </b>
              </i>
              <br />
              <br />
              I'm passionate about building
              <i>
                <b className="purple"> interactive user interfaces </b> and
                exploring areas like{" "}
                <b className="purple"> cross-platform mobile development. </b>
              </i>
              <br />
              <br />
              I'm constantly learning and growing by working on projects,
              especially ones that combine
              <b className="purple"> modern tools and frameworks</b> like
              <i>
                <b className="purple">
                  {" "}
                  Next.js, React.js, Vite, and Firebase.{" "}
                </b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SarahHeshamAli2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
          
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sarah-hesham-8594bb190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
    
            </ul>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
