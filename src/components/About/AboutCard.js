import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ backgroundColor: "#112240", color: "#8892b0", borderRadius: "15px", boxShadow: "0 8px 24px rgba(100, 255, 218, 0.2)" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1.1rem", lineHeight: "1.6" }}>
            Hi Everyone, I am <span className="purple" style={{ color: "#64ffda", fontWeight: "700" }}>Sarah Hesham</span>.<br />
            I transitioned from a career in physical therapy to become a passionate <span className="purple" style={{ color: "#64ffda", fontWeight: "700" }}>Front-End Developer</span>.<br />
            I love crafting interactive and beautiful web applications using <span className="purple" style={{ color: "#64ffda", fontWeight: "700" }}>JavaScript, React, and Tailwind CSS</span>.<br />
            <br />
            When I am not coding, here are a few things I enjoy:
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: 0, fontSize: "1rem", color: "#8892b0" }}>
            <li className="about-activity" style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <ImPointRight style={{ color: "#64ffda", marginRight: "10px" }} /> Exploring new front-end frameworks
            </li>
            <li className="about-activity" style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <ImPointRight style={{ color: "#64ffda", marginRight: "10px" }} /> Reading tech blogs and tutorials
            </li>
            <li className="about-activity" style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <ImPointRight style={{ color: "#64ffda", marginRight: "10px" }} /> Hiking and outdoor adventures
            </li>
          </ul>

          <p style={{ color: "#64ffda", fontStyle: "italic", marginTop: "20px", fontWeight: "600" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "#8892b0" }}>Sarah Hesham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
