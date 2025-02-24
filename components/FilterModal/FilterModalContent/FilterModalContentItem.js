import React from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { setActiveFilterItem } from "../../../store/slices/filterSlice";
import data from "@/data";
import getItemCount from "@/helpers/getItemCount";

export default function FilterModalContentItem({ item }) {
  const dispatch = useDispatch();

  const setActiveItem = (content) => {
    dispatch(setActiveFilterItem({ itemId: item.id, content }));
  };

  return (
    <div className="filter-modal-content-wrapper">
      <h4>{item?.name}</h4>
      <div className="filter-modal-content-items flex-wrap">
        {item?.items?.map((content) => (
          <button key={content} className={cn({ active: item?.active?.includes(content) })} onClick={() => setActiveItem(content)}>
            {content} ({getItemCount(data, content)})
          </button>
        ))}
      </div>
    </div>
  );
}
