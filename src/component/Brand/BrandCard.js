import React from 'react'
import { Card, Col } from 'react-bootstrap'

const BrandCard = ({ img }) => {
    return (
        <Col xs='6' sm='6' md='4' lg='2' className='my-2 d-flex justify-content-center'>
            <Card style={{ width: '25rem' }} className='my-2'>
                <Card.Img variant="top" src={img} />
            </Card>
        </Col>
    )
}

export default BrandCard