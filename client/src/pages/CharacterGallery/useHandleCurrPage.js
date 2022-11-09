import { useState, useCallback } from "react";

export const useHandleCurrPage = ({ startingPageNum }) => {
  const [currPage, setCurrPage] = useState(startingPageNum);

  const handlePageClick = useCallback(({ selected }) => {
    setCurrPage(selected + 1);
  }, []);

  return { currPage, handlePageClick };
};
