import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import "../styles/Navbar.css";
import logo from "../assets/log.png";

const CustomNavbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      console.log("Search query:", searchQuery);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <div className="navbar-logo-container">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="me-3 my-2 my-lg-0" navbarScroll>
            <Form className="d-flex navbar-search-form" onSubmit={handleSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="navbar-search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form>
            <Nav.Link href="#home" className="navbar-link" active>
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="navbar-link">
              About Us
            </Nav.Link>

            <NavDropdown
              title="Categories"
              id="categories-dropdown"
              className="navbar-link"
              menuVariant="light"
            >
              <NavDropdown.Item href="#events">Events</NavDropdown.Item>
              <NavDropdown.Item href="#music">Music</NavDropdown.Item>
              <NavDropdown.Item href="#news">News</NavDropdown.Item>
              <NavDropdown.Item href="#popculture">Pop Culture</NavDropdown.Item>
              <NavDropdown.Item href="#shows">Shows</NavDropdown.Item>
              <NavDropdown.Item href="#sport">Sport</NavDropdown.Item>
              <NavDropdown.Item href="#technology">Technology</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#contact" className="navbar-link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
