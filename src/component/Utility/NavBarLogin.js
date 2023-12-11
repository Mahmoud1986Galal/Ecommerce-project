import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png'
import { Nav } from 'react-bootstrap';
import login from '../../images/login.png';
import cart from '../../images/cart.jpg'
import { Link } from 'react-router-dom';

function NavBarLogin() {
    return (
        <Navbar expand="sm" className="sticky-top" bg="dark" variant='dark'>

            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img src={logo} alt="logo" className='logo me-1' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Form.Control
                        type="search"
                        placeholder="ابحث..."
                        className=" mx-5 w-75 text-center"
                        aria-label="Search"
                        id='search'
                    />
                    <Nav className='mx-3 w-50'>
                        <Link to='/login' className='nav-text d-flex mt-2 justify-content-center'>
                            <img src={login} alt="login" className='login-img bg-dark mx-1' />
                            <p style={{ color: 'white' }}>
                                تسجيل الدخول
                            </p>
                        </Link>
                        <Link to='/cart' className='nav-text d-flex mt-2 justify-content-center'>
                            <img src={cart} alt="cart" className='login-img bg-dark mx-1' />
                            <p style={{ color: 'white' }}>
                                عربة التسوق
                            </p>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarLogin;