import React, {useEffect} from 'react'
import {Container,Row,Col} from "react-bootstrap"
import {useDispatch,useSelector} from "react-redux"
import Pizza from './Pizza'
import {getAllPizzas} from "../actions/pizzaAction"
import Filter from './Filter'

function Main() {
    const dispatch = useDispatch();
    const pizzastate = useSelector(state => state.getAllPizzaReducer)
    const {loading,pizzas,error} = pizzastate

    useEffect(()=>{
        dispatch(getAllPizzas())
    }, [dispatch]);
  return (
    <>
        <Container>
        {loading ? (<h1>Loading..</h1>)
        : error ? (<h1>Error while fetching data</h1>)
        :  (<Row>
        <Filter />
                {pizzas.map(pizza => (
                    <Col md={4}>
                        <Pizza pizza={pizza} />
                    </Col>
                ))}
            </Row>)
        }
           
        </Container>
    </>
  )
}

export default Main