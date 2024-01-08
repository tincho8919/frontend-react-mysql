import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductCard = ({ id, nombre, imagen, precio, detalles, agregarAlCarrito }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} key={id}>
      <Card style={{ width: '100%', margin: '10px' }}>
        <Link to={`/detallesdeproducto/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card.Img style={{ width: '100%', height: '200px', objectFit: 'cover' }} variant="top" src={imagen} alt={nombre} />
          <Card.Body>
            <Card.Title className='text-center'>{nombre}</Card.Title>
            <Card.Text className='text-center'>Precio: {precio}</Card.Text>
            <Card.Text className='text-center'>Detalles: {detalles}</Card.Text>
          </Card.Body>
        </Link>
        <div className="m-3 text-center">
          <Button onClick={() => agregarAlCarrito({ id, nombre, imagen, detalles, precio })} style={{ backgroundColor: 'pink' }}>
            Agregar al carrito
          </Button>
        </div>
      </Card>
    </Col>
  );
};

const Buscador = () => {
  const [productos] = useState([
    {
      id: 1,
      nombre: "Mouse de chocolate",
      imagen: "/imghelados/1.jpeg",
      precio: "$20.99",
      detalles: "Delicioso sabor.",
    },
    {
      id: 2,
      nombre: "Vainilla",
      imagen: "/imghelados/2.jpeg",
      precio: "$38.99",
      detalles: "Ideal para la ocasión.",
    },
    {
      id: 3,
      nombre: "Frutilla delicia",
      imagen: "/imghelados/3.jpeg",
      precio: "$22.99",
      detalles: "Dsfrutar el sabor.",
    },
    {
      id: 4,
      nombre: "Americana",
      imagen: "/imghelados/4.jpeg",
      precio: "$40.99",
      detalles: "Un placer su sabor.",
    },
    {
      id: 5,
      nombre: "Almendra",
      imagen: "/imghelados/5.jpeg",
      precio: "$40.99",
      detalles: "Sabor unico con chip.",
    },
    {
      id: 6,
      nombre: "chocolate port",
      imagen: "/imghelados/6.jpeg",
      precio: "$34.99",
      detalles: "Perfecto para un momento.",
    },
    {
      id: 7,
      nombre: "Creama americana",
      imagen: "/imghelados/7.jpeg",
      precio: "$37.99",
      detalles: "Unico e irresistible sabor.",
    },
    {
      id: 8,
      nombre: "Frutilla a la crema",
      imagen: "/imghelados/8.jpeg",
      precio: "$19.99",
      detalles: "Totalmente dejarse tentar.",
    },
    {
      id: 9,
      nombre: "vasos de tentacion",
      imagen: "/imgpostres/1.jpeg",
      precio: "$20.99",
      detalles: "deliciosos basos de postre tentacion.",
    },
    {
      id: 10,
      nombre: "Postre a la crema",
      imagen: "/imgpostres/2.jpeg",
      precio: "$38.99",
      detalles: "Ideal para pasar con familia.",
    },
    {
      id: 11,
      nombre: "Postre Unico",
      imagen: "/imgpostres/3.jpeg",
      precio: "$22.99",
      detalles: "Excelente unico en su sabor.",
    },
    {
      id: 12,
      nombre: "Postre flan",
      imagen: "/imgpostres/4.jpeg",
      precio: "$40.99",
      detalles: "Sabroso totalmente.",
    },
    {
      id: 13,
      nombre: "chocofuti",
      imagen: "/imgpostres/5.jpeg",
      precio: "$34.99",
      detalles: "chocolate con frutillas delicia.",
    },
    {
      id: 14,
      nombre: "Torta de chocolate",
      imagen: "/imgpostres/6.jpeg",
      precio: "$37.99",
      detalles: "Excelente para las fiestas.",
    },
    {
      id: 15,
      nombre: "Oblea de Postre",
      imagen: "/imgpostres/7.jpeg",
      precio: "$19.99",
      detalles: "Totalmente para el mejor momento.",
    },
    {
      id: 16,
      nombre: "Torta helada",
      imagen: "/imgpostres/8.jpeg",
      precio: "$41.99",
      detalles: "Dulce chocolate y muy deliciosa.",
    },
    {
      id: 17,
      nombre: "Promo 3x2",
      imagen: "/promohelados/1.jpeg",
      precio: "$20.99",
      detalles: "Imperdible.",
    },
    {
      id: 18,
      nombre: "Pormo doble gratis",
      imagen: "/promohelados/2.jpg",
      precio: "$20.99",
      detalles: "Solo por tiempo limitado.",
    },
    {
      id: 19,
      nombre: "Promo 2x1 miercoles",
      imagen: "/promohelados/3.jpeg",
      precio: "$20.99",
      detalles: "No te lo puedes perder.",
    },
    {
      id: 20,
      nombre: "Promo pote familiar",
      imagen: "/promohelados/4.webp",
      precio: "$20.99",
      detalles: "Super promo para la familia.",
    },
    // Agrega el resto de tus productos aquí
  ]);
  const [nombreBuscado, setNombreBuscado] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [productoEncontrado, setProductoEncontrado] = useState(true);
  const navigate = useNavigate();

  const handleBuscar = () => {
    if (nombreBuscado.trim() !== '') {
      const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase())
      );
      setProductosFiltrados(productosFiltrados);

      // Redirigir a la página de detalles si solo hay un resultado
      if (productosFiltrados.length === 1) {
        navigate(`/detallesdeproducto/${productosFiltrados[0].id}`);
        // Restablecer el estado de productoEncontrado a true al buscar
        setProductoEncontrado(true);
      } else {
        // Establecer el estado de productoEncontrado a false si no hay resultados
        setProductoEncontrado(false);
      }
    } else {
      // Limpiar la búsqueda si no se ingresa un nombre
      setProductosFiltrados([]);
      // Restablecer el estado de productoEncontrado a true si no se ingresa un nombre
      setProductoEncontrado(true);
    }
  };

  const agregarAlCarrito = (producto) => {
    axios.post('https://back-react-mysql.onrender.com/carrito', producto)
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
    <Container className="mb-3 text-center">
      <div className="mb-3" style={{ textAlign: 'center' }}>
        <label className="form-label">Buscar por nombre:</label>
        <input style={{ width: '400px', display: 'block', margin: 'auto' }}
          type="text"
          className="form-control"
          value={nombreBuscado}
          onChange={(e) => setNombreBuscado(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleBuscar}>
        Buscar
      </button>

      <Row className="mt-4">
        {productosFiltrados.map(producto => (
          <ProductCard
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            imagen={producto.imagen}
            precio={producto.precio}
            detalles={producto.detalles}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
        {productoEncontrado && productosFiltrados.length > 0 && (
          <p style={{ color: 'green' }}>Producto encontrado con éxito!!!</p>
        )}
        {!productoEncontrado && (
          <p style={{ color: 'red' }}>Producto no encontrado.</p>
        )}
      </Row>
    </Container>
  );
};

export default Buscador;












