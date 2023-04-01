 import React from 'react'
 import { Container, Navbar, Nav } from 'react-bootstrap'
 
 const Header = () => {
   return (
     <header>
       <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
        <Navbar.Brand href="/">          
          <img
              alt=""
              src={require("../images/logo192.png")}
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            MCA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/"><i className='fas fa-home'></i> Home</Nav.Link>
            <Nav.Link href="/pizada"><i className='fas fa-book'></i> Pizada</Nav.Link>
            <Nav.Link href="/events"><i className='fas fa-image'></i> Events</Nav.Link>
            <Nav.Link href="/contactus"><i className='fas fa-phone'></i> Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
     </header>
   )
 }
 
 export default Header
 