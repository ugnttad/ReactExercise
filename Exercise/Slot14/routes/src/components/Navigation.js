import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('currentUser');
        navigate('/login');
    };

    const currentUser = localStorage.getItem('currentUser');

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold">
                    📚 React Router Demo
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={location.pathname === '/' ? 'active' : ''}
                        >
                            🏠 Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className={location.pathname === '/about' ? 'active' : ''}
                        >
                            ℹ️ About
                        </Nav.Link>
                        {isAuthenticated && (
                            <Nav.Link
                                as={Link}
                                to="/posts"
                                className={location.pathname.startsWith('/post') ? 'active' : ''}
                            >
                                📝 Posts
                            </Nav.Link>
                        )}
                    </Nav>

                    <Nav>
                        {isAuthenticated ? (
                            <>
                                <Navbar.Text className="me-3">
                                    Welcome, <strong>{currentUser}</strong>!
                                </Navbar.Text>
                                <Button variant="outline-light" size="sm" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <Button as={Link} to="/login" variant="outline-light" size="sm">
                                Login
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;