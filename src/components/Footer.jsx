import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#cce7ff",
        color: "#003366",
        fontWeight: "600",
        textAlign: "center",
        padding: "1.5rem 0",
        marginTop: "1.5rem",
      }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <p style={{ marginBottom: "0" }}>Volvió! En forma de fichas!</p>
            <p style={{ marginBottom: "0" }}>Calle Falsa 123, Springfield</p>
          </Col>
          <Col md={6}>
            <div>
              <a
                href="#"
                style={{
                  color: "#003366",
                  marginRight: "1rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#0055aa")}
                onMouseLeave={(e) => (e.target.style.color = "#003366")}
              >
                <i className="fa fa-facebook fa-2x"></i>
              </a>
              <a
                href="#"
                style={{
                  color: "#003366",
                  marginRight: "1rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#0055aa")}
                onMouseLeave={(e) => (e.target.style.color = "#003366")}
              >
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              <a
                href="#"
                style={{
                  color: "#003366",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#0055aa")}
                onMouseLeave={(e) => (e.target.style.color = "#003366")}
              >
                <i className="fa fa-instagram fa-2x"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
