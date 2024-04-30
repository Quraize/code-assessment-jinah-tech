import "./NavbarStyles.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {motion} from "framer-motion";
import { NavbarDivVariant, NavbarVariantDesktop } from "../../AnimateVariant/AnimateVariant";

export default function AppNavbar() {
  return (
    <div className="navbar-main-sec" >
      <Navbar className="navbar-self" as={motion.div} variants={NavbarDivVariant} initial="initial" animate="final">
        <Container>
          <Navbar.Brand href="/" as={motion.span} variants={NavbarVariantDesktop} initial="initial" animate="final">Coding Assessment</Navbar.Brand>
          <Nav className="me-auto">
            <motion.div variants={NavbarVariantDesktop} initial="initial" animate="final"><Nav.Link href="/" className="nav-content">Home</Nav.Link></motion.div>
            <motion.div variants={NavbarVariantDesktop} initial="initial" animate="final"><Nav.Link href="/about" className="nav-content">About</Nav.Link></motion.div>
            <motion.div className="login nav-content" variants={NavbarVariantDesktop} initial="initial" animate="final"><Nav.Link href="/adminauth">Log In</Nav.Link></motion.div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
