import { Container, Row, Col } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#cce7ff",
        color: "#003366",
        padding: "1.5rem 0",
        marginTop: "2rem",
      }}
    >
      <Container>
        <Row className="text-center text-md-start align-items-center">
          <Col md={6}>
            <p className="mb-1 fw-semibold">
              Volvió! En forma de fichas!
            </p>
            <p className="mb-0">Calle Falsa 123, Springfield</p>
          </Col>

          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <a href="#" aria-label="Facebook" className="me-3 text-dark">
              <i className="fa fa-facebook fa-lg"></i>
            </a>
            <a href="#" aria-label="Twitter" className="me-3 text-dark">
              <i className="fa fa-twitter fa-lg"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-dark">
              <i className="fa fa-instagram fa-lg"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
