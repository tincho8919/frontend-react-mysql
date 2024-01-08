import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const SidebarNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <aside style={{ width: '300px', height: 'auto', position: 'fixed', left: 0, zIndex: 1000 }}>
            <div style={{ position: 'fixed', top: 10, left: 300, zIndex: 1001 }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="orange"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                    onClick={handleToggle}
                    style={{ cursor: 'pointer' }}
                >
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>
            </div>
            <Navbar bg="dark" variant="dark" className={` ${expanded ? 'd-block' : 'd-none'}`}>
                <Nav className="flex-column text-center">
                    <Navbar.Brand>
                        <Link to="/home" className="text-decoration-none text-white d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="blue" class="bi bi-snow2" viewBox="0 0 16 16">
                                <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.086l-.646.647a.5.5 0 0 1-.707-.708L7.5 10.293V8.866l-1.236.713-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-.94.542-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495.94-.542-.882-.237a.5.5 0 1 1 .258-.966l1.85.495L7 8l-1.236-.713-1.849.495a.5.5 0 1 1-.258-.966l.883-.237-.94-.542-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 0 1 .966-.258l.495 1.849.94.542-.236-.883a.5.5 0 0 1 .966-.258l.495 1.849 1.236.713V5.707L6.147 4.354a.5.5 0 1 1 .707-.708l.646.647V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.086l.647-.647a.5.5 0 1 1 .707.708L8.5 5.707v1.427l1.236-.713.495-1.85a.5.5 0 1 1 .966.26l-.236.882.94-.542.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-.94.542.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l1.236.713 1.849-.495a.5.5 0 0 1 .259.966l-.883.237.94.542 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-.94-.542.236.883a.5.5 0 0 1-.966.258L9.736 9.58 8.5 8.866v1.427l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647v1.086l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5" />
                            </svg>
                            <h4 className="h3 d-inline m-0.6 ml-2" style={{ color: 'lightblue' }}>SUPERHELADOS</h4>
                        </Link>
                    </Navbar.Brand>
                    <Nav.Item>
                        <Link to="/home" className="nav-link text-white" style={{ textDecoration: 'none', padding: '10px', fontSize: '20px', display: 'block' }}>
                            Home
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/productos" className="nav-link text-white" style={{ textDecoration: 'none', padding: '10px', fontSize: '20px', display: 'block' }}>
                            Helados
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/postres" className="nav-link text-white" style={{ textDecoration: 'none', padding: '10px', fontSize: '20px', display: 'block' }}>
                            Postres
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/login" className="nav-link text-white" style={{ textDecoration: 'none', padding: '10px', fontSize: '20px', display: 'block' }}>
                            Login
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/register" className="nav-link text-white" style={{ textDecoration: 'none', padding: '10px', fontSize: '20px', display: 'block' }}>
                            Register
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/carrito" className="nav-link text-white" style={{ textDecoration: 'none', padding: '10px', fontSize: '20px', display: 'block' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="yellow" class="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                            </svg>
                        </Link>
                    </Nav.Item>
                    {/* Agrega más elementos según sea necesario */}
                </Nav>
            </Navbar>
        </aside>
    );
};

export default SidebarNavbar;























