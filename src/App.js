import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import HOMEPRODUCTOS from "./Componentes/HOMEPRODUCTOS";
import SidebarNavbar from "./Componentes/Navbar";
import Helados from "./Componentes/Helados";
import Footer from "./Componentes/Footer";
import Postres from "./Componentes/Postres";
import Login from "./Componentes/Login";
import Register from "./Componentes/Register";
import Carrito from "./Componentes/Carrito";
import Buscador from "./Componentes/Buscador";
import DetallesProducto from "./Componentes/Detallesdeproducto";
import CompraDetalle from "./Componentes/Comprahelados"






function App() {
  const [productos, setProductos] = useState([]);
  return (
    <div className="App">




      <SidebarNavbar />
      <Buscador productos={productos} setProductos={setProductos} />
      <Routes>
        <Route index element={<HOMEPRODUCTOS />} />
        <Route path="/home" element={<HOMEPRODUCTOS />} />
        <Route path="/productos" element={<Helados />} />
        <Route path="/postres" element={<Postres />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/buscador" element={<Buscador />} />
        <Route path="/compra/:id" element={<CompraDetalle />} />
        <Route path="/detallesdeproducto/:id" element={<DetallesProducto productos={productos} />} />
      </Routes>

      <Footer />
    </div>

  );
}

export default App;
