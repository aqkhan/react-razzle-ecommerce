import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import Utils from '../utils/commonFuncs';

import { useStateValue } from '../context/state';

const Product = ({ details }) => {
    const [ {cartItems}, dispatch ] = useStateValue();
    return(
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ details.thumb } />
                <Card.Body>
                    <Card.Title style={{ fontSize: '1em' }}>{ Utils.trim(details.productTitle, 70) }</Card.Title>
                        <Card.Text style={{ fontSize: '0.7em' }}>{ Utils.trim( details.description, 142 ) }</Card.Text>
                        <div className="float-left">
                            <p>${ details.price }</p>
                        </div>
                        <div className="float-right">
                            <Button variant="primary" onClick={ () => dispatch({
                               type: 'addToCart',
                               cartItem: details
                            }) } >Add to cart</Button>
                        </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Product;