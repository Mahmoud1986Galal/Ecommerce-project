import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
    const handlePageClick = (e) => {
        console.log(e)
    }
    return (
        <div sm='2'>
            <ReactPaginate
                breakLabel="..."
                nextLabel="التالى "
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={100}
                previousLabel=" السابق"
                containerClassName='pagination justify-content-center p-3'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                nextClassName='page-item'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                activeClassName='active'
                activeLinkClassName='active'
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Pagination