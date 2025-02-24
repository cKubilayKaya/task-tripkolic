import { setSelectedCategory } from "@/store/slices/filterSlice";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";

export default function FilterModalHeader({ categoryList, showCategoryList, handleCloseModal, setShowCategoryList }) {
  const dispatch = useDispatch();

  const changeCategoryList = (item) => {
    dispatch(setSelectedCategory(item));
    setShowCategoryList(false);
  };

  return (
    <div className="modal-header d-flex align-items-center justify-content-between">
      <div className="category-list">
        <button className="selected-category" onClick={() => setShowCategoryList(!showCategoryList)}>
          {categoryList.selectedCategory}
        </button>
        {showCategoryList && (
          <div className="categories">
            {categoryList?.categories?.map((item) => (
              <button key={item} onClick={() => changeCategoryList(item)}>
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
      <h4>Filter</h4>
      <button onClick={handleCloseModal} className="modal-header-close-button">
        <IoCloseSharp size={24} />
      </button>
    </div>
  );
}
