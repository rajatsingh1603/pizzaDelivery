import React, { useState } from 'react'
import { Form, Col, Row, Button } from "react-bootstrap"
import { useDispatch} from "react-redux"
import {filterPizza} from "../actions/pizzaAction"


function Filter() {
    const [searchkey, setsearchkey] = useState('')
    const [category, setcategory] = useState('all')
    const dispatch = useDispatch();
    return (
        <div className='p-4 bg-light mt-4 mb-4'>
            <Form>
                <Row>
                    <Col>
                        <Form.Control
                            value={searchkey}
                            onChange={e => setsearchkey(e.target.value)}
                            placeholder='Search pizza...'
                        />
                    </Col>
                    <Col>
                        <select
                            value={category}
                            onChange={e => setcategory(e.target.value)}
                            className='form-select'
                        >
                            <option>All</option>
                            <option>veg</option>\
                            <option>nonveg</option>
                        </select>

                    </Col>
                    <Col>
                        <Button
                        onClick={()=> {dispatch(filterPizza(searchkey,category))}}
                        style={{backgroundColor: '#56BBF1'}}
                        >Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Filter