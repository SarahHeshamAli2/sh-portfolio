import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section" style={{ backgroundColor: "#0a192f", color: "#ccd6f6", padding: "60px 0" }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              textAlign: "left",
            }}
          >
            <h1 style={{ fontSize: "2.4em", paddingBottom: "20px", fontWeight: "700", color: "#64ffda" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard>

            </Aboutcard>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "100px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ maxHeight: "400px", borderRadius: "10px", boxShadow: "0 8px 24px rgba(100, 255, 218, 0.2)" }}
            />
          </Col>
        </Row>



        <h1 className="project-heading" style={{ fontWeight: "700", color: "#64ffda", marginTop: "40px" }}>
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
