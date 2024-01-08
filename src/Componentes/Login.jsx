import React, { useState } from 'react';
import axios from 'axios';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBCheckbox, MDBIcon } from 'mdb-react-ui-kit';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
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

    try {
      const response = await axios.post('https://back-react-mysql.onrender.com/user/loginmysql', userData);
      console.log('Respuesta del servidor:', response.data);

      // Actualizar el estado de mensaje si la solicitud es exitosa
      setMensaje(response.data.mensaje);

      // Puedes realizar acciones adicionales después de la respuesta del servidor
      // Por ejemplo, redireccionar al usuario a otra página
      // window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);

      // Actualizar el estado de error si hay un error en la solicitud
      setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');

      // Puedes manejar otros tipos de errores aquí
      // Por ejemplo, si el servidor responde con un código de estado 401, puedes actualizar el estado de error con un mensaje específico
    }
  };

  const responseGoogle = async (response) => {
    try {
      // Aquí puedes manejar la respuesta de Google Sign-In
      console.log(response);
      setMensaje('Estás logueado con Google');
      setError('');
    } catch (error) {
      console.error('Error al procesar la respuesta de Google:', error);
      setMensaje('');
      setError('Error al iniciar sesión con Google. Por favor, intenta de nuevo.');
    }
  };

  const responseFacebook = async (response) => {
    try {
      // Aquí puedes manejar la respuesta de Facebook Login
      console.log(response);
      setMensaje('Estás logueado con Facebook');
      setError('');
    } catch (error) {
      console.error('Error al procesar la respuesta de Facebook:', error);
      setMensaje('');
      setError('Error al iniciar sesión con Facebook. Por favor, intenta de nuevo.');
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass='mb-4 w-100'
                  label='Email address'
                  id='email'
                  type='email'
                  size="lg"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
                <MDBInput
                  wrapperClass='mb-4 w-100'
                  label='Password'
                  id='password'
                  type='password'
                  size="lg"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                <MDBBtn size='lg' type='submit'>
                  Login
                </MDBBtn>
              </form>
              {/* Mostrar mensajes en la web */}
              {mensaje && <p>{mensaje}</p>}
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <hr className="my-4" />
              <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                <GoogleLogin fab icon="google" className="mx-2" clientId="739821877742-sm94924j0b2v8167ioeoefmhmfa2bfkv.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'} />
                Sign in with Google
              </MDBBtn>
              {/* <FacebookLogin
                appId="313851094976848"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                render={(renderProps) => (
                  <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }} onClick={renderProps.onClick}>
                    <MDBIcon fab icon="facebook-f" className="mx-2" />
                    Sign in with Facebook
                  </MDBBtn>
                )}
              /> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;


