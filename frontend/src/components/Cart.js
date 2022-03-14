import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { AiFillMinusCircle, AiFillPlusCircle, AiFillDelete } from "react-icons/ai"
import {addToCart,deleteFromCart} from "../actions/cartAction"

function Cart() {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
    const dispatch = useDispatch()
    const subTotal = cartItems.reduce((x,item) => x + item.price,0)

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>Cart</h1>
                        <Row>
                            {cartItems.map((item) => (
                                <>
                                    <Col md={7}>
                                        <h6>{item.name}[{item.varient}]</h6>
                                        <h6>
                                            {" "}
                                            Price: {item.quantity} X {item.prices[0][item.varient]} = {" "}
                                            {item.price}
                                        </h6>
                                        <h6>Quantity :
                                            <AiFillMinusCircle
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>{dispatch(addToCart(item,item.quantity-1,item.varient))}}

                                            /> &nbsp;
                                            {item.quantity} &nbsp;
                                            <AiFillPlusCircle
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>{dispatch(addToCart(item,item.quantity+1,item.varient))}}
                                            />
                                        </h6>
                                    </Col>
                                    <Col md={5}>
                                        <img alt={item.name} src={item.image} style={{ width: "80px", height: "80px", margin: "10px" }} />
                                        <AiFillDelete 
                                        className='text-danger' 
                                        style={{ cursor: "pointer", marginLeft: "15px"}} 
                                        onClick={()=>{dispatch(deleteFromCart(item))}}

                                        />
                                    </Col>
                                    <hr />
                                </>
                            ))}
                        </Row>
                    </Col>
                    <Col md={4}>
                        <h1>Payment info.</h1>
                        <h4>Sub total</h4>
                        <h4>{subTotal} /-</h4>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart