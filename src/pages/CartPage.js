import React from 'react';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import Cart from '../components/Cart';
import { useStateValue } from '../context/state';
import { Link } from 'react-router-dom';

const CartPage = () => {

    const [ { cartItems }, dispatch ] = useStateValue();
    return(
        <Container>
            <Row>
                <Col className="float-md-left">
                    <Link to="/products-archive"><h2>Products Archive Page</h2></Link>
                </Col>
                <Cart />
            </Row>
            <hr></hr>
            <Row>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems && cartItems.map( (item, i) => (
                            <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{ item.productTitle }</td>
                            <td>1</td>
                            <td>${ item.price }</td>
                            </tr>
                        ))
                    }
                </tbody>
                </Table>
                <Button className="text-right" onClick={ () => dispatch({
                    type: 'clearCart'
                }) }>Clear Cart</Button>
            </Row>
        </Container>
    )
}

export default CartPage