import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="mb-4"
      style={{
        backgroundColor: "#cce7ff",
        fontWeight: "600",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://dummyimage.com/40x40/000/fff&text=L"
            alt="Logo"
            className="d-inline-block align-top me-2"
          />
          <span style={{ color: "#003366" }}>
            Te acuerdas de Alf? Volvió! En forma de fichas!
          </span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link
            as={Link}
            to="/"
            className="me-3"
            style={{ color: "#003366" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/ofertas"
            className="me-3"
            style={{ color: "#003366" }}
          >
            Ofertas
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Electronics"
            className="me-3"
            style={{ color: "#003366" }}
          >
            Electronics
          </Nav.Link>

          <div className="d-flex align-items-center">
            <Button
              variant="outline-dark"
              as={Link}
              to="/administracion"
              className="me-2"
              style={{
                fontWeight: "600",
                color: "#003366",
                borderColor: "#003366",
              }}
            >
              Administración
            </Button>
            <Link to="/carrito" style={{ color: "#003366" }}>
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
