import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import slider4 from '../../images/slider4.png';
import laptops from '../../images/laptops.png';

const DiscountSection = () => {
    return (
        <Container>
            <Row className='d-flex text-center align-items-center my-3 mx-2 discount-backcolor'>
                <Col sm='6'>
                    <div className='discount-title'>
                        خصم يصل حتى 30% على اجهزة اللابتوب و المحمول
                    </div>
                </Col>
                <Col sm='3'>
                    <img alt='slider4' src={slider4} className='dicount-img' />
                </Col>
                <Col sm='3'>
                    <img alt='laptops' src={laptops} className='dicount-img' />
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection