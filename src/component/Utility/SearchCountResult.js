import React from 'react';
import UnopDropdown from 'unop-react-dropdown';
import sort from '../../images/sort.png'

const SearchCountResult = ({ title }) => {
    const handler = () => {

    }
    return (

        <div className='d-flex justify-content-between pt-3 px-2'>
            <div className='sub-tile'>{title}</div>
            <div className='search-count-text p[-4] d-flex'>
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className='mx-1'>
                            <img
                                width='20rem'
                                height='20rem'
                                alt='sort'
                                src={sort}
                                className='ms-2'
                            />
                            ترتيب حسب
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover
                >
                    <div className='card-filter'>
                        <div className='border-bottom card-filter-item'>الاعلى تقييما</div>
                        <div className='border-bottom card-filter-item'>الاكثر مبيعا</div>
                        <div className='border-bottom card-filter-item'>
                            السعر من الاسفل للاعلى
                        </div>
                        <div className='border-bottom card-filter-item'>
                            السعر من الاعلى للاسفل
                        </div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult