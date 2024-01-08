import React, { useState } from 'react';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
} from 'mdb-react-ui-kit';

function Register() {
    const [userData, setUserData] = useState({
        nombre: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userData.password !== userData.repeatPassword) {
            console.error('Las contraseñas no coinciden');
            setError('Las contraseñas no coinciden');
            setMensaje(''); // Limpiar el estado de mensaje
            return;
        }

        try {
            // Realizar la solicitud POST a tu API con la información del usuario
            const response = await axios.post('http://localhost:9000/user/registermysql', userData);
            console.log('Respuesta del servidor:', response.data);

            // Verificar si la respuesta contiene un mensaje de éxito
            if (response.data.mensaje) {
                // Mostrar el mensaje de éxito en la web
                setMensaje(response.data.mensaje);
                setError(''); // Limpiar el estado de error si hubo uno anteriormente
            } else {
                // Puede manejar otros casos según sea necesario
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error.response.data);

            // Verificar si la respuesta contiene un mensaje de error
            if (error.response.data.error || error.response.data.mensaje) {
                // Mostrar el mensaje de error en la web
                setError(error.response.data.error || 'Error en el servidor');
                setMensaje(''); // Limpiar el estado de mensaje si hubo uno anteriormente
            } else {
                // Puede manejar otros casos según sea necesario
            }
        }
    };



    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <form onSubmit={handleSubmit}>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="user me-3" size='lg' />
                                    <MDBInput
                                        label='Your Name'
                                        id='form1'
                                        type='text'
                                        className='w-100'
                                        name='nombre'
                                        value={userData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                    <MDBInput
                                        label='Your Email'
                                        id='form2'
                                        type='email'
                                        name='email'
                                        value={userData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg' />
                                    <MDBInput
                                        label='Password'
                                        id='form3'
                                        type='password'
                                        name='password'
                                        value={userData.password}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="key me-3" size='lg' />
                                    <MDBInput
                                        label='Repeat your password'
                                        id='form4'
                                        type='password'
                                        name='repeatPassword'
                                        value={userData.repeatPassword}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className='mb-4'>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                </div>

                                <MDBBtn className='mb-4' size='lg' type='submit'>
                                    Register
                                </MDBBtn>
                            </form>
                            {/* Mostrar mensajes en la web */}
                            {mensaje && <p>{mensaje}</p>}
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default Register;
