import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Cart from '../components/Cart';
import '../css/bootstrap.min.css';

import { useStateValue } from '../context/state';

const ProductsArchive = () => {
    const [ { products } ] = useStateValue();
    return(
        <Container>
            <Row>
                <Col className="float-md-left">
                    <h2>Products Archive Page</h2>
                </Col>
                <Cart />
            </Row>
            <hr></hr>
            <Row>
                {
                    products.length !== 0 && products.map( (p, i) => (
                        <React.Fragment key={ i }>
                            <Product details={ p } key={ i } />
                        </React.Fragment>
                    ))
                }
            </Row>
        </Container>
    )
}

export default ProductsArchive;