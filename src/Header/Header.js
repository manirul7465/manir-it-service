import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

const Header = () => {
    return (
        <div>

<Navbar bg="light" expand="lg">
<Container>
    <Navbar.Brand >Manir it service</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
     <NavLink to="/home" >Home</NavLink>
     <NavLink to="/Allservice" >All service</NavLink>
     <NavLink to="/login" >Log in</NavLink>
     
     
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;