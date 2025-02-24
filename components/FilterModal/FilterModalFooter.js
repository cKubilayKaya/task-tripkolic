import React from "react";
import { resetFilter } from "@/store/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import data from "@/data";
import { setFilteredCards } from "@/store/slices/filteredCards";
import filterItemsHandler from "@/helpers/filterItemsHandler";

export default function FilterModalFooter({ handleCloseModal }) {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state?.filters);

  const enableSearch = () => {
    dispatch(setFilteredCards(filterItemsHandler(data, filters)));
    handleCloseModal();
  };

  const resetFilterHandler = () => dispatch(resetFilter());

  return (
    <div className="filter-modal-footer ">
      <div className="filter-modal-footer-buttons d-flex align-items-center justify-content-between">
        <button className="filter-modal-footer-reset-button" onClick={resetFilterHandler}>
          Reset
        </button>
        <button className="filter-modal-footer-search-button" onClick={enableSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
