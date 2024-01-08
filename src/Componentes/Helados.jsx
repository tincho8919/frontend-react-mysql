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
          <Button onClick={toggleDetalles} style={{ backgroundColor: 'blue', }}>
            {mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles'}
          </Button>
          </div>
          {mostrarDetalles && (
            <div className="detalles-hidden text-center">
              <p>Detalles: {detalles}</p>
            </div>
          )}
          <div className="m-3 text-center">
            <Button onClick={agregarAlCarrito} style={{ backgroundColor: 'blue' }}>
              Agregar al carrito
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};


  

const Helados = () => {
  return (
    <Container>
      <Row>
        <ProductCard
          nombre="Mouse de chocolate"
          imagen="/imghelados/1.jpeg"
          precio="$20.99"
          detalles="Delicioso sabor."
        />
        <ProductCard
          nombre="Vainilla"
          imagen="/imghelados/2.jpeg"
          precio="$38.99"
          detalles="Ideal para la ocacion."
        />
        <ProductCard
          nombre="Frutilla delicia"
          imagen="/imghelados/3.jpeg"
          precio="$22.99"
          detalles="Dsfrutar el sabor."
        />
        <ProductCard
          nombre="Americana"
          imagen="/imghelados/4.jpeg"
          precio="$40.99"
          detalles="Un placer su sabor."
        />
         <ProductCard
          nombre="Almendra"
          imagen="/imghelados/5.jpeg"
          precio="$40.99"
          detalles="Sabor unico con chip."
        />
        <ProductCard
          nombre="chocolate port"
          imagen="/imghelados/6.jpeg"
          precio="$34.99"
          detalles="Perfecto para un momento."
        />
        <ProductCard
          nombre="Creama americana"
          imagen="/imghelados/7.jpeg"
          precio="$37.99"
          detalles="Unico e irresistible sabor."
        />
        <ProductCard
          nombre="Frutilla a la crema"
          imagen="/imghelados/8.jpeg"
          precio="$19.99"
          detalles="Totalmente dejarse tentar."
        />
      </Row>
    </Container>
  );
};

export default Helados;