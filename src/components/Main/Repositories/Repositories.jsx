import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import s from './Repositories.module.css';
import OneRepository from './OneRepository/OneRepository';

function Repositories({ dataRepos }) {
  const countRepos = dataRepos.length;
  const arrayRepositories = dataRepos.map((element) => (
    <OneRepository
      key={element.id}
      name={element.name}
      description={element.description}
      url={element.html_url}
    />
  ));
  const countReposPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(countRepos / countReposPage);
  let lastIndex = 0;
  let firstIndex = 0;
  if (currentPage === pageCount) {
    lastIndex = countRepos;
    firstIndex = currentPage * countReposPage - countReposPage;
  } else {
    lastIndex = currentPage * countReposPage;
  }
  if (lastIndex < countRepos) {
    firstIndex = lastIndex - countReposPage;
  }
  const array = arrayRepositories.slice(firstIndex, lastIndex);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };
  return (
    <div className={s.repositories}>
      <div className={s.wrapper__title}>
        <h2 className={s.title}>Repositories({countRepos})</h2>
      </div>
      <div className={s.wrapper__repositories}>{array}</div>
      <div className={s.wrapper__pagination}>
        <span className={s.text}>
          {firstIndex + 1}-{lastIndex} of {countRepos} items
        </span>
        <ReactPaginate
          previousLabel="<"
          breakLabel="..."
          nextLabel=">"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={`pagination pagination-sm ${s.paginationMargin}`}
          previousClassName="page-item"
          pageClassName="page-item"
          breakClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          pageLinkClassName="page-link"
          breakLinkClassName="page-link"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
}

Repositories.propTypes = {
  dataRepos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      html_url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Repositories;
