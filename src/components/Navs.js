import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import playLogo from '../assets/Play.svg'

const Navs = () => {
    return (
      <Navbar className="navs">
        <Container>
          <Navbar.Brand href="#home"><img src={playLogo} alt="Play Logo"/><strong>IceStream</strong></Navbar.Brand>
          <Navbar.Brand href="#home">Features</Navbar.Brand>
          <Navbar.Brand href="#home">Contact Us</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            <Button className="main-btn">Get Started</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navs
