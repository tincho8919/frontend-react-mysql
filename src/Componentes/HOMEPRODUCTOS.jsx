
import React, { useState } from 'react';
import { Col, Card, Button, Carousel, Container, Row } from 'react-bootstrap';
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
          <Button onClick={toggleDetalles} style={{ backgroundColor: '#FFCCCC', }}>
            {mostrarDetalles ? 'Ocultar detalles' : 'Mostrar detalles'}
          </Button>
          </div>
          {mostrarDetalles && (
            <div className="detalles-hidden text-center">
              <p>Detalles: {detalles}</p>
            </div>
          )}
          <div className="m-3 text-center">
            <Button onClick={agregarAlCarrito} style={{ backgroundColor: 'red' }}>
              Agregar al carrito
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
function HOMEPRODUCTOS() {
    return (
        <>
        <Carousel data-bs-theme="dark" style={{width:'100%', height:'650px', top:50}}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/promohelados/1.jpeg"
                    alt="First slide"
                    style={{width:'auto', height:'600px' }}
                />
                <Carousel.Caption>
                    <h5>Aprovecha las Promociones</h5>
                    <p>Abajo puedes consultar las promos con detalles y precios imperdible..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/promohelados/2.jpg"
                    alt="Second slide"
                    style={{width:'auto', height:'600px' }}
                />
                <Carousel.Caption>
                    <h5>Aprovecha las Promociones</h5>
                    <p>Abajo puedes consultar las promos con detalles y precios imperdible..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/promohelados/3.jpeg"
                    alt="Third slide"
                    style={{width:'auto', height:'600px' }}
                />
                <Carousel.Caption>

                    <h5>Aprovecha las Promociones</h5>
                    <p>
                        Abajo puedes consultar las promos con detalles y precios imperdible.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/promohelados/4.webp"
                    alt="Third slide"
                    style={{width:'auto', height:'600px' }}
                />
                <Carousel.Caption>

                    <h5>Aprovecha las Promociones</h5>
                    <p>
                    Abajo puedes consultar las promos con detalles y precios imperdible.
                    </p>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
        {/* Productos debajo del carrusel */}
      <Container className="mt-4">
      <Row>
        <ProductCard
          nombre="Promo 3x2"
          imagen="/promohelados/1.jpeg"
          precio="$20.99"
          detalles="Imperdible."
        />
        <ProductCard
          nombre="Pormo doble gratis"
          imagen="/promohelados/2.jpg"
          precio="$20.99"
          detalles="Solo por tiempo limitado."
        />
        <ProductCard
          nombre="Promo 2x1 miercoles"
          imagen="/promohelados/3.jpeg"
          precio="$20.99"
          detalles="No te lo puedes perder."
        />
        <ProductCard
          nombre="Promo pote familiar"
          imagen="/promohelados/4.webp"
          precio="$20.99"
          detalles="Super promo para la familia."
        />
      </Row>
    </Container>
  </>
);
};






export default HOMEPRODUCTOS