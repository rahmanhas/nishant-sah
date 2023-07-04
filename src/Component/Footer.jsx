import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Footer = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
                <Container className='mx-auto'>
                    <Navbar.Brand href="#home">Thank you</Navbar.Brand>
                    {/* <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav> */}
                </Container>
            </Navbar>
        </>
    );
};

export default Footer;