import { setSelectedCategory } from "@/store/slices/filterSlice";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";

export default function FilterModalHeader({ categoryList, showCategoryList, handleCloseModal, setShowCategoryList }) {
  const dispatch = useDispatch();

  const changeCategoryList = (item) => {
    dispatch(setSelectedCategory(item));
    setShowCategoryList(false);
  };

  return (
    <div className="modal-header d-flex align-items-center justify-content-between">
      <div className="category-list">
        <OutsideClickHandler
          onOutsideClick={() => {
            setShowCategoryList(false);
          }}
        >
          <button
            className="selected-category"
            onClick={(e) => {
              e.stopPropagation();
              setShowCategoryList(!showCategoryList);
            }}
          >
            {categoryList.selectedCategory}
          </button>
          {showCategoryList && (
            <div className="categories" onClick={(e) => e.stopPropagation()}>
              {categoryList?.categories?.map((item) => (
                <button key={item} onClick={() => changeCategoryList(item)}>
                  {item}
                </button>
              ))}
            </div>
          )}
        </OutsideClickHandler>
      </div>
      <h4>Filter</h4>
      <button onClick={handleCloseModal} className="modal-header-close-button">
        <IoCloseSharp size={24} />
      </button>
    </div>
  );
}
