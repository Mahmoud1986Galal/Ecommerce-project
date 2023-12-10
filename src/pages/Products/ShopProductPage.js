import React from 'react'
import CategoryHeader from '../../component/Category/CategoryHeader'
import SearchCountResult from '../../component/Utility/SearchCountResult'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../component/Utility/SideFilter'
import AllProducts from '../../component/Products/AllProducts'
import Pagination from '../../component/Utility/Pagination'

const ShopProductPage = () => {
    return (
        <div style={{ minHeight: '30rem' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title='600 نتيجة بحث' />
                <Row className='d-flex flex-row justify-content-between'>
                    <Col sm='2' xs='2' md='1'>
                        <SideFilter />
                    </Col>
                    <Col sm='9' xs='9' md='10'>
                        <AllProducts />
                    </Col>
                </Row>
                <Pagination />
            </Container>

        </div>
    )
}

export default ShopProductPage