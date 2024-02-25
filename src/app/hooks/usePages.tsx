import { useState, useEffect } from "react";

const usePages = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const prevPage = page - 1;
    const nextPage = page + 1;

    const formatNumber = (num: number) =>
      num < 10 ? `0${num}` : num.toString();

    setPageNumber(formatNumber(page));
    setPrevPageNumber(formatNumber(prevPage));
    setNextPageNumber(formatNumber(nextPage));
  }, [page]);

  const [pageNumber, setPageNumber] = useState("");
  const [prevPageNumber, setPrevPageNumber] = useState("");
  const [nextPageNumber, setNextPageNumber] = useState("");

  return {
    page,
    setPage,
    pageNumber,
    prevPageNumber,
    nextPageNumber,
  };
};

export default usePages;
