import { Card, Button } from "react-bootstrap";

export default function ProductCard({ product, agregarAlCarrito }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: "220px", objectFit: "contain", padding: "1rem" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="text-muted">
          ${product.price}
        </Card.Text>

        <Button
          variant="primary"
          className="mt-auto"
          onClick={() => agregarAlCarrito(product)}
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}
