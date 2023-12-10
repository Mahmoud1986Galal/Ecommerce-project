import React from 'react'
import BrandContainer from '../../component/Brand/BrandContainer'
import Pagination from '../../component/Utility/Pagination'

const AllBrandPage = () => {
    return (
        <div style={{ minHeight: '30rem' }}>
            <BrandContainer />
            <Pagination />
        </div>
    )
}

export default AllBrandPage