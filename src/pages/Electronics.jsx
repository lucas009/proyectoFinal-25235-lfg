import { Container } from "react-bootstrap";
import ProductList from "../components/ProductList";

export default function Electronics() {
  return (
    <Container className="py-4">
      <h1 className="mb-3">Electrónica</h1>
      <p className="text-muted mb-4">
        Tecnología y dispositivos electrónicos.
      </p>

      <ProductList category="electronics" />
    </Container>
  );
}
