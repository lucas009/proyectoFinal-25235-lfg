import { Button, Container, Card } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

export default function Administracion() {
  const { logout } = useAuth();

  return (
    <Container className="py-4">
      <h1 className="mb-4">Administración</h1>

      <Card className="p-4 mb-4 shadow-sm">
        <p>
          Esta es una sección protegida del sistema.
        </p>
        <p>
          Acá se podría gestionar productos, pedidos o usuarios.
        </p>
      </Card>

      <Button variant="outline-danger" onClick={logout}>
        Cerrar sesión
      </Button>
    </Container>
  );
}
