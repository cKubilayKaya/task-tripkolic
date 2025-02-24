import React, { useState } from "react";
import ReactModal from "react-modal";
import { HiMenuAlt2 } from "react-icons/hi";
import FilterModalHeader from "./FilterModalHeader";
import FilterModalContent from "./FilterModalContent/FilterModalContent";
import FilterModalFooter from "./FilterModalFooter";
import { useSelector } from "react-redux";

export default function FilterModal() {
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const filters = useSelector((state) => state.filters);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>
        <HiMenuAlt2 size={24} />
      </button>
      <ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
        <div className="modal-wrapper">
          <FilterModalHeader
            setShowModal={setShowModal}
            categoryList={filters}
            handleCloseModal={handleCloseModal}
            showCategoryList={showCategoryList}
            setShowCategoryList={setShowCategoryList}
          />
          <FilterModalContent filterItems={filters?.filterItems} />
          <FilterModalFooter handleCloseModal={handleCloseModal} />
        </div>
      </ReactModal>
    </div>
  );
}
