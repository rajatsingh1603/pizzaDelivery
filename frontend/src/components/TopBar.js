import React, { useState } from 'react'
import { Navbar, Container, Nav, Modal, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useSelector } from "react-redux"
import '../components/Topbar.css'
import QRImage from '../QR/QRCode.png'
import cartImg from '../QR/cartImg.png'
import loginImg from '../QR/enter.png'

function TopBar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cartState = useSelector((state) => state.cartReducer);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand onClick={handleShow} href="#"><img src='https://companiesmarketcap.com/img/company-logos/512/PZZA.png' className='topBarimg' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/login">
                                <Nav.Link>
                                <img src={loginImg} className="loginImg" />
                                Login
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/cart">

                                <Nav.Link>
                                    <img src={cartImg} className="cartImg" />
                                    Cart
                                    {cartState.cartItems.length}
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal
                show={show}
                onHide={handleClose}

                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title>Hurrah 🍕🍕. Scan & Enjoy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='qrdiv'>
                        <img src={QRImage} className="qrimg" />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TopBar
