
import { Container, Navbar, Nav} from 'react-bootstrap';
import  React  from 'react';
import { Link } from 'react-router-dom'; 

import './navbar.css';

function NavbarMenu() {
  return (
    <div className='navbar-wrapper'>
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
      <Navbar.Brand href="#home">Online Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: 'none', margin_right: '20px', textAlign:'right', hover_display: 'none'}} />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" >
            <Nav.Link href="#">Home</Nav.Link>
            <Link to="/Products" className='nav-link'>Products</Link>
            <Link to="/CartPage" className='nav-link'>Carts</Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <div className="background-image"></div>
    </div>
   
  );
}

export default NavbarMenu;