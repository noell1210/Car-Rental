import CarLogo from "../../assets/logo.png"
import "./style.css" 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavigationBar = () => {
    return (
        <Navbar>
        <Container>
          <Navbar.Brand href="#home"><img src={CarLogo} alt="" /></Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Our Services</Nav.Link>
            <Nav.Link href="#features">Why Us</Nav.Link>
            <Nav.Link href="#home">Testimonial</Nav.Link>
            <Nav.Link href="#home">FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavigationBar