import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SubTitle from '../Utility/SubTitle'
import ProductCard from './ProductCard';

const CardProductContainer = ({ title, btntitle, img, pathtext }) => {
    return (
        <Container>
            <SubTitle title={title} btntitle={btntitle} pathtext={pathtext} />
            <Row className='my-2 d-flex justify-content-around'>
                <ProductCard img={img} />
                <ProductCard img={img} />
                <ProductCard img={img} />
                <ProductCard img={img} />
            </Row>
        </Container>
    )
}

export default CardProductContainer