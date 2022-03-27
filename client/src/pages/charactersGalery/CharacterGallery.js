import React, { useState } from 'react'
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import AllCharacters from '../../componenets/AllCharacters'

import Styles from './ChracterGalery.module.css'

const CharacterGallery = () => {
  const [currPage, setCurrPage] = useState();
  const [pageCount, setPageCount] = useState(42);

  const handlePageClick = (event) => {
    setCurrPage(event.selected +1 );
  };

  return (
    <div>
      <AllCharacters pageNum={currPage} />  
      <ReactPaginate className={Styles.test}
         nextLabel="Next"
         previousLabel="Previous"
         onPageChange={handlePageClick}
         pageRangeDisplayed={5}
         marginPagesDisplayed={3}
         pageCount={pageCount}
         breakClassName	={Styles.test}
         breakLabel="..."
      />
    </div>
  )
}

export default CharacterGallery
