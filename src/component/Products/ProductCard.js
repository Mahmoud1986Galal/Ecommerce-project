import React from 'react';
import { Card, Col } from 'react-bootstrap';
import favoff from '../../images/fav-off.png';
import rate from '../../images/rate.png'

const ProductCard = ({ img }) => {
    return (
        <Col xs='6' sm='6' md='4' lg='3' className='d-flex'>
            <Card style={{ width: '25rem' }} className='my-2 px-2 py-2'>
                <Card.Img variant="top" src={img} />
                <div className='d-flex justify-content-end mx-2 pt-2'>
                    <img alt='favoff' src={favoff} className='text-center' style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className='card-title'>
                            كوبون لابتوبات ومنتجات ذكية جيب اس اسود
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <img alt='rate' src={rate} width='14rem' height='14rem' />
                                <div className='card-rate mx-2'>4.5</div>
                            </div>
                            <div className='d-flex'>
                                <div className='card-price'>888</div>
                                <div className='card-currency'>جنيه</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard