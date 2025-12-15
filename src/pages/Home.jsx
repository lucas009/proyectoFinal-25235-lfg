import { Container } from "react-bootstrap";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <Container className="py-4">
      <h1 className="mb-3">Todos los productos</h1>
      <p className="text-muted mb-4">
        Explorá todos los productos disponibles en nuestra tienda.
      </p>

      <ProductList />
    </Container>
  );
}
