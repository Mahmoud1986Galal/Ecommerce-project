import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png'
import { Nav } from 'react-bootstrap';
import login from '../../images/login.png';
import cart from '../../images/cart.jpg'

function NavBarLogin() {
    return (
        <Navbar expand="sm" className="sticky-top" bg="dark" variant='dark'>

            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} alt="logo" className='logo me-1' />
                    </a>
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
                        <Nav.Link href='/login' className='nav-text d-flex mt-2 justify-content-center'>
                            <img src={login} alt="login" className='login-img bg-dark mx-1' />
                            <p style={{ color: 'white' }}>
                                تسجيل الدخول
                            </p>
                        </Nav.Link>
                        <Nav.Link href='/cart' className='nav-text d-flex mt-2 justify-content-center'>
                            <img src={cart} alt="cart" className='login-img bg-dark mx-1' />
                            <p style={{ color: 'white' }}>
                                عربة التسوق
                            </p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarLogin;