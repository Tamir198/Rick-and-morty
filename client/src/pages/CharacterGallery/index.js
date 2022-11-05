import { useState, useCallback } from "react";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import { AllCharacters } from "components";
import { config } from "constants/config";

import styles from "./CharacterGallery.module.css";

const CharacterGallery = () => {
  //TODO: use separated hook for this
  const {
    pageCount,
    startingPageNum,
    pageRangeDisplayed,
    marginPagesDisplayed,
  } = config;

  const [currPage, setCurrPage] = useState(startingPageNum);

  //todo change all handlers to use callback
  const handlePageClick = useCallback(({ selected }) => {
    setCurrPage(selected + 1);
  }, []);

  return (
    <div>
      <AllCharacters pageNum={currPage} />
      <div className={styles.footer}>
        <p className={styles.currentPage}>
          Page {currPage} / {pageCount}
        </p>
        <ReactPaginate
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageClick}
          pageRangeDisplayed={pageRangeDisplayed}
          marginPagesDisplayed={marginPagesDisplayed}
          pageCount={pageCount}
          breakLabel="..."
        />
      </div>
    </div>
  );
};

export default CharacterGallery;
