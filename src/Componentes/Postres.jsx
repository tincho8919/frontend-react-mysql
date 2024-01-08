import React, { useState } from 'react';
import { Button, Card, Col, Container, Row  } from 'react-bootstrap';
import axios from 'axios';

const ProductCard = ({ id, nombre, imagen, precio, detalles }) => {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  const toggleDetalles = () => {
    setMostrarDetalles(!mostrarDetalles);
  };

  const agregarAlCarrito = () => {
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
          <Button onClick={toggleDetalles} style={{ backgroundColor: '#FFA07A', }}>
            {mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles'}
          </Button>
          </div>
          {mostrarDetalles && (
            <div className="detalles-hidden text-center">
              <p>Detalles: {detalles}</p>
            </div>
          )}
          <div className="m-3 text-center">
            <Button onClick={agregarAlCarrito} style={{ backgroundColor: 'orange' }}>
              Agregar al carrito
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Postres = () => {
  return (
    <Container>
      <Row>
        <ProductCard
          nombre="vasos de tentacion"
          imagen="/imgpostres/1.jpeg"
          precio="$20.99"
          detalles="deliciosos basos de postre tentacion."
        />
        <ProductCard
          nombre="Postre a la crema"
          imagen="/imgpostres/2.jpeg"
          precio="$38.99"
          detalles="Ideal para pasar con familia."
        />
        <ProductCard
          nombre="Postre Unico"
          imagen="/imgpostres/3.jpeg"
          precio="$22.99"
          detalles="Excelente unico en su sabor."
        />
        <ProductCard
          nombre="Postre flan"
          imagen="/imgpostres/4.jpeg"
          precio="$40.99"
          detalles="Sabroso totalmente."
        />
        <ProductCard
          nombre="chocofuti"
          imagen="/imgpostres/5.jpeg"
          precio="$34.99"
          detalles="chocolate con frutillas delicia."
        />
        <ProductCard
          nombre="Torta de chocolate"
          imagen="/imgpostres/6.jpeg"
          precio="$37.99"
          detalles="Excelente para las fiestas."
        />
        <ProductCard
          nombre="Oblea de Postre"
          imagen="/imgpostres/7.jpeg"
          precio="$19.99"
          detalles="Totalmente para el mejor momento."
        />
        <ProductCard
          nombre="Torta helada"
          imagen="/imgpostres/8.jpeg"
          precio="$41.99"
          detalles="Dulce chocolate y muy deliciosa."
        />
      </Row>
    </Container>
  );
};

export default Postres;