import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from "../assets/log.png"; // ✅ ensure your logo exists here
import "../styles/Footer.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer-section text-light py-5 mt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container>
        {/* Top Row with Logo + Social Icons */}
        <Row className="align-items-center mb-5 text-center text-md-start">
          <Col md={6} className="d-flex align-items-center justify-content-center justify-content-md-start mb-4 mb-md-0">
            <div className="footer-logo-container">
              <img src={logo} alt="Blog Logo" className="footer-logo" />
              <h3 className="footer-title ms-3"></h3>
            </div>
          </Col>

          <Col md={6} className="d-flex justify-content-center justify-content-md-end gap-4">
            <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
            <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
          </Col>
        </Row>

        {/* Footer Columns */}
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-4">
            <h5 className="footer-heading">About Us</h5>
            <p className="footer-text">
              Welcome to our blog — your source for inspiring stories, tech insights,
              and creative ideas from experts and dreamers alike.
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact Us</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="footer-heading">Subscribe</h5>
            <p className="footer-text">Get the latest updates right to your inbox.</p>
            <form className="d-flex">
              <input
                type="email"
                placeholder="Your email"
                className="form-control me-2 footer-input"
              />
              <button className="btn btn-gold" type="submit">Go</button>
            </form>
          </Col>
        </Row>

        <hr className="border-gold" />
        <p className="text-center mt-3 mb-0 footer-copy">
          © {new Date().getFullYear()} SIMPLE. Blog — All Rights Reserved.
        </p>
      </Container>
    </motion.footer>
  );
};

export default Footer;
