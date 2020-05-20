import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, NavLink } from "reactstrap";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col tag="address" md={6}>
                        <Link to="/" title="Go to home" className="footer-logo">
                            <Logo />
                        </Link>
                        World Trade Center 36, Dragan Tsankov blvd. Sofia 1057,
                        Bulgaria.
                        <br />
                        <a href="mailto">musala@musala.com</a>
                        <br />
                        <a href="tel">+359 (2) 969 5821</a>
                    </Col>
                    <Nav vertical tag={Col} sm={6} md={3}>
                        <h2>Store</h2>
                        <NavLink tag={Link} to="/" title="Go to home">
                            Home
                        </NavLink>
                        <NavLink
                            tag={Link}
                            to="/products"
                            title="Products list"
                        >
                            Products
                        </NavLink>
                        <NavLink tag={Link} to="/orders" title="Orders">
                            Orders
                        </NavLink>
                        <NavLink tag={Link} to="/profile" title="User profile">
                            Profile
                        </NavLink>
                    </Nav>
                    <Nav vertical tag={Col} sm={6} md={3}>
                        <h2>External links</h2>
                        <NavLink href="http://www.musala.com">
                            Musala Soft
                        </NavLink>
                        <NavLink href="https://www.linkedin.com/company/musala-soft">
                            Linkedin
                        </NavLink>
                        <NavLink href="https://www.facebook.com/MusalaSoft?fref=ts">
                            Facebook
                        </NavLink>
                        <NavLink href="https://www.instagram.com/musalasoft">
                            Instagram
                        </NavLink>
                    </Nav>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
