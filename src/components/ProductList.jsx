import React, { useEffect, useState } from "react";
import { Row, Col, Toast, ToastContainer } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [category]);

  const handleAgregarAlCarrito = (product) => {
    addToCart(product);
    setToastMessage(`"${product.title}" agregado al carrito`);
    setShowToast(true);
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <span className="spinner-border text-primary" />
        <p className="mt-2">Cargando productos...</p>
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={2500}
          autohide
          bg="success"
        >
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <ProductCard
              product={product}
              agregarAlCarrito={handleAgregarAlCarrito}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductList;
