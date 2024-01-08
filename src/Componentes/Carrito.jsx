// Carrito.jsx

import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';  // Importa Link


const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Obtiene el contenido del carrito al cargar la página
    axios.get('https://back-react-mysql.onrender.com/carrito')
      .then(response => {
        if (Array.isArray(response.data.dato)) {
          setCarrito(response.data.dato);
        } else {
          console.error('Los datos del carrito no son un array:', response.data);
        }
      })
      .catch(error => {
        console.error('Error al obtener el contenido del carrito', error);
      });
  }, []);

  const handleComprar = (id) => {
    axios.post(`https://back-react-mysql.onrender.com/compra/${id}`)
      .then(response => {
        // Redirige a /comprar con los datos del producto
        navigate(`/compra/${id}`, { state: { producto: response.data.dato[0] } });
      })
      .catch(error => {
        console.error('Error al comprar el producto', error);
      });
  };

  const handleBorrar = (id) => {
    axios.post(`https://back-react-mysql.onrender.com/delete/${id}`)
      .then(response => {
        console.log(response.data);
        setCarrito(prevCarrito => prevCarrito.filter(producto => producto.id !== id));
      })
      .catch(error => {
        console.error('Error al borrar el producto', error);
      });
  };

  return (
    <Container>
      <h2>Carrito de compras</h2>
      <div className="d-flex flex-wrap">
        {carrito.map(producto => (
          <Card key={producto.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={producto.imagen} alt={producto.nombre}style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text>{producto.detalles}</Card.Text>
              <Card.Text>Precio: ${producto.precio}</Card.Text>
              <Link to={`/compra/${producto.id}`}>
                <Button variant="primary" onClick={() => handleComprar(producto.id)} style={{ marginRight: '10px' }}>
                  Comprar
                </Button>
              </Link>
              <Button variant="danger" style={{ marginLeft: '10px' }} onClick={() => handleBorrar(producto.id)}>
                Borrar
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Carrito;







