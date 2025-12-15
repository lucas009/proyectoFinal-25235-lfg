import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();

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
            Volvió en forma de fichas
          </span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3" style={{ color: "#003366" }}>
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
            to="/electronics"
            className="me-3"
            style={{ color: "#003366" }}
          >
            Electrónica
          </Nav.Link>

          <Button
            variant="outline-dark"
            as={Link}
            to="/administracion"
            className="me-3"
            style={{
              fontWeight: "600",
              color: "#003366",
              borderColor: "#003366",
            }}
          >
            Login
          </Button>

          <Link
            to="/carrito"
            style={{ color: "#003366", position: "relative" }}
          >
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />

            {cart.length > 0 && (
              <Badge
                bg="danger"
                pill
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  fontSize: "0.7rem",
                }}
              >
                {cart.length}
              </Badge>
            )}
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
