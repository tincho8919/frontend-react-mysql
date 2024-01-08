import React, { useState } from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductCard = ({ id, nombre, imagen, precio, detalles, agregarAlCarrito }) => {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const toggleDetalles = () => {
    setMostrarDetalles(!mostrarDetalles);
  };

  const agregarAlCarritoAxios = () => {
    axios.post('https://back-react-mysql.onrender.com/carrito', {
      id,
      nombre,
      imagen,
      detalles,
      precio,
    })
    .then(response => {
      console.log(response.data);
      if (response.data.redirect) {
         // Redirige a la página indicada en la propiedad redirect
         window.location.href = response.data.redirect;
      }
   })
   .catch(error => {
      console.error('Error al agregar al carrito', error);
   });
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={{ width: '100%', margin: '10px' }}>
        <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={imagen} alt={nombre} />
        <Card.Body>
          <Card.Title className='text-center'>{nombre}</Card.Title>
          <Card.Text className='text-center'>Precio: {precio}</Card.Text>
          <div className="m-3 text-center">
            <Button onClick={toggleDetalles} style={{ backgroundColor: 'blue' }}>
              {mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles'}
            </Button>
          </div>
          {mostrarDetalles && (
            <div className="detalles-hidden text-center">
              <p>Detalles: {detalles}</p>
              <div className="m-3 text-center">
                <Button onClick={agregarAlCarritoAxios} style={{ backgroundColor: 'blue' }}>
                  Agregar al carrito
                </Button>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};




const DetallesProducto = ({ productos, agregarAlCarrito }) => {
  const { id } = useParams();

  // Obtener el producto por su ID
  const producto = productos.find(producto => producto.id.toString() === id);

  return (
    <Container>
      {producto && (
        <ProductCard
          id={producto.id}
          nombre={producto.nombre}
          imagen={producto.imagen}
          precio={producto.precio}
          detalles={producto.detalles}
          agregarAlCarrito={agregarAlCarrito}
        />
      )}
      
    </Container>
  );
};

export default DetallesProducto;




