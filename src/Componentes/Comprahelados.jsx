// CompraDetalle.jsx

import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CompraDetalle = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.producto) {
    return <div>Error al cargar la página</div>;
  };
    const { nombre, detalles, precio, fecha, total, imagen } = state.producto;
    const totalPagado = total || precio;
  return (
    <Container>
      <h2 className='text-center' style={{color:'green'}}>Compra Exitosa !!!!</h2>
      <Card style={{ width: '18rem', margin: '10px'}} className="mx-auto">
        <Card.Img variant="top" src={imagen} alt={nombre} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            <strong>Detalles:</strong> {detalles}<br />
            <strong>Precio:</strong> ${precio}<br />
            <strong>Fecha de Compra:</strong>  {new Date(fecha).toLocaleDateString()}<br />
            <strong>Total Pagado:</strong> ${totalPagado}
          </Card.Text>
          <Link to="/carrito">
            <Button variant="primary">
              Volver al Carrito
            </Button>
          </Link>
        </Card.Body>
      </Card>
    <div className='text-center' style={{color:'greenyellow'}}>
    <p>Se cargó en la base de datos con éxito!</p>
    </div>
    </Container>
  );
};

export default CompraDetalle;






