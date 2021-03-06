import React, { useState } from 'react'
import { Card, Button, Row, Col, Modal } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addToCart } from "../actions/cartAction"
import '../components/Pizza.css'

function Pizza({ pizza }) {
    const [varient, setVarient] = useState('small')
    const [quantity, setQuantity] = useState(1)
    const [topping, setTopping] = useState('Red Pepper')

    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(pizza, quantity, varient));
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>  
            <Card  className="card1" style={{margin : '10px'}} >  
                <Card.Img
                    variant="top"
                    src={pizza.image}
                    onClick={handleShow}
                    style={{ cursor: "pointer" , height: '300px' , padding: '10px'}}
                    className="cardImage"
                />
                <Card.Body style={{backgroundColor : '#EFFFFD'}}>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md={6}>
                                <h6>Varients</h6>
                                <select value={varient} onChange={(e) => setVarient(e.target.value)}>
                                    {pizza.varients.map((varient) => (
                                        <option


                                        >{varient}</option>
                                    ))}
                                </select>
                            </Col>
                            <Col md={6}>
                                <h6>Quantity</h6>
                                <select onChange={(e) => setQuantity(e.target.value)}>
                                    {[...Array(10).keys()].map((v, i) => (
                                        <option
                                            value={i + 1}


                                        >{i + 1}</option>
                                    ))}
                                </select>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Row>
                        <Col md={6}>Price: {pizza.prices[0][varient] * quantity} ???</Col>
                        <Col md={6}>
                            <Button
                                onClick={addToCartHandler}
                                className='bg-warning text-white'>Add to Cart</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>Rating : {pizza.rating}???</Col>
                    </Row>
                    <Row style={{ marginTop: '3px' }}>
                        <Col md={6}>

                            <h6>Topping</h6>
                            <select value={topping} onChange={(e) => setTopping(e.target.value)}>

                                {pizza.toppings.map((topping) => (
                                    <option


                                    >{topping}</option>
                                ))}

                            </select>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Card.Img
                            variant="top"
                            src={pizza.image}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                    <div>{pizza.description}</div>
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

export default Pizza