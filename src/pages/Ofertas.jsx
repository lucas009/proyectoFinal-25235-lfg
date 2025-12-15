import { Container } from "react-bootstrap";
import ProductList from "../components/ProductList";

export default function Ofertas() {
  return (
    <Container className="py-4">
      <h1 className="mb-3">Ofertas</h1>
      <p className="text-muted mb-4">
        Productos seleccionados con precios especiales.
      </p>

      <ProductList category="women's clothing" />
    </Container>
  );
}
