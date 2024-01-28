import Moment from 'react-moment';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

function Paginate() {
  const [currentPage, setCurrentPage] = useState(0);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const year = 2023;
  const monthPerPage = 1;
  const pageCount = months.length / monthPerPage;

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const renderMonths = () => {
    const start = currentPage * monthPerPage;
    const end = start + monthPerPage;
    return months.slice(start, end).map((month, index) => (
      <div key={index}>
        <Moment format="MMMM YYYY">{`${month} ${year}`}</Moment>
      </div>
    ));
  };

  return (
    <div>
      {renderMonths()}
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        // containerClassName={''}
        // previousLinkClassName={''}
        // nextLinkClassName={''}
        // disabledClassName={''}
        // activeClassName={''}
      />
    </div>
  );
}

export default Paginate;
