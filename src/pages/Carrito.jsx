import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Carrito() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p className="text-muted">Todavía no agregaste productos.</p>

        <Button as={Link} to="/" variant="primary">
          Volver a productos
        </Button>
      </Container>
    );
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container className="py-4">
      <h1 className="mb-4">Carrito</h1>

      {cart.map((product) => (
        <Card key={product.id} className="mb-3 shadow-sm">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={2}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px", objectFit: "contain" }}
                />
              </Col>

              <Col md={6}>
                <h5>{product.title}</h5>
                <p className="text-muted">${product.price}</p>
              </Col>

              <Col md={4} className="text-end">
                <Button
                  variant="outline-danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  Quitar
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}

      <hr />

      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: ${total.toFixed(2)}</h4>
        <Button variant="danger" onClick={clearCart}>
          Vaciar carrito
        </Button>
      </div>
    </Container>
  );
}
