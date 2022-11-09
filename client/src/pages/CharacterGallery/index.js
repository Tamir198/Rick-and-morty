import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import { AllCharacters } from "components";
import { config } from "constants/config";
import { useHandleCurrPage } from "./useHandleCurrPage";

import styles from "./CharacterGallery.module.css";

const CharacterGallery = () => {
  const {
    pageCount,
    startingPageNum,
    pageRangeDisplayed,
    marginPagesDisplayed,
  } = config;

  const { currPage, handlePageClick } = useHandleCurrPage({ startingPageNum });

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
