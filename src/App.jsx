import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Ofertas from "./pages/Ofertas";
import Electronics from "./pages/Electronics";
import Login from "./pages/Login";
import Carrito from "./pages/Carrito";
import Administracion from "./pages/Administracion";

import { AuthProvider, useAuth } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function PrivateRoute({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />

          <Routes>
            {/* Públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/login" element={<Login />} />

            {/* Alias */}
            <Route path="/admin" element={<Navigate to="/administracion" replace />} />

            {/* Protegida */}
            <Route
              path="/administracion"
              element={
                <PrivateRoute>
                  <Administracion />
                </PrivateRoute>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
