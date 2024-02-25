"use client";

import React, { useEffect } from "react";
import usePages from "@hooks/usePages";

const Pages = () => {
  const { page, prevPageNumber, pageNumber, nextPageNumber } = usePages();

  useEffect(() => {
    console.log({ page, prevPageNumber, pageNumber, nextPageNumber });
  }, [page, prevPageNumber, pageNumber, nextPageNumber]);

  return (
    <section>
      <div className="fixed top-1/2 left-4 z-50">
        <div className="flex flex-col">
          <div
            className={`text-2xl mx-12 text-light/50 font-secondary ${
              page === 1 ? "opacity-0" : ""
            }`}
          >
            {prevPageNumber}
          </div>
          <div className="flex flex-row-reverse items-center">
            <div className="line w-12 h-1 bg-accent" />
            <div className="text-2xl mx-4 text-light font-secondary">
              {pageNumber}
            </div>
          </div>
          <div className="text-2xl mx-12 text-light/50 font-secondary">
            {nextPageNumber}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pages;
