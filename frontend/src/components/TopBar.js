import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import {useSelector} from "react-redux"

function TopBar() {
    
    const cartState = useSelector((state) => state.cartReducer);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Pizza-On-Taste</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/cart">
                                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
                            </LinkContainer>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default TopBar
