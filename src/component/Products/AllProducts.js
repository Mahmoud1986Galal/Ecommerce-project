import React from 'react'
import CardProductContainer from './CardProductContainer'
import clothes from '../../images/clothe.png';
import laptop from '../../images/labtop.png';
import item from '../../images/item.png'

const AllProducts = () => {
    return (
        <div className='mt-3 d-flex flex-row flex-wrap'>
            <CardProductContainer img={clothes} title='' btntitle='' />
            <CardProductContainer img={laptop} title='' btntitle='' />
            <CardProductContainer img={item} title='' btntitle='' />
        </div>
    )
}

export default AllProducts