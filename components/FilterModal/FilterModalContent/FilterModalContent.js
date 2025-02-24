import React, { useEffect, useState } from "react";
import FilterModalContentItem from "./FilterModalContentItem";
import { useDispatch, useSelector } from "react-redux";
import { setGroupSizeReducer, setLocationReducer, setPriceReducer, setStartTimeReducer } from "@/store/slices/filterSlice";
import { GoSearch } from "react-icons/go";
import handleStartTimeRange from "@/helpers/handleStartTimeRange";
import timeToMinutes from "@/helpers/timeToMinutes";
import handleStartTimeTextFormat from "@/helpers/handleStartTimeTextFormat";

export default function FilterModalContent({ filterItems }) {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state?.filters);
  const [price, setPrice] = useState(filters?.price);
  const [location, setLocation] = useState(filters?.location);
  const [groupSize, setGroupSize] = useState(filters?.groupSize);
  const [startTime, setStartTime] = useState(timeToMinutes(filters?.startTime));
  const [startTimeText, setStartTimeText] = useState(filters?.startTime);

  useEffect(() => {
    setPrice(filters?.price);
    setGroupSize(filters?.groupSize);
    setLocation(filters?.location);
    setStartTime(timeToMinutes(filters?.startTime));
    setStartTimeText(filters?.startTime);
  }, [filters?.price, filters?.groupSize, filters?.location, filters?.startTime]);

  return (
    <div className="filter-modal-content">
      <div className="filter-modal-content-wrapper">
        <h4>Location</h4>
        <div className="filter-modal-content-items flex-wrap filter-modal-content-items-inputs filter-modal-content-items-location">
          <input
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              dispatch(setLocationReducer(e.target.value));
            }}
            className="filter-modal-content-items-text"
            placeholder="Where you wanna visit?"
          />
          <GoSearch size={24} />
        </div>
      </div>
      {filterItems?.map((item) => (
        <FilterModalContentItem key={item?.id} item={item} />
      ))}
      <div className="filter-modal-content-wrapper">
        <h4>Price</h4>
        <div className="filter-modal-content-items flex-wrap filter-modal-content-items-inputs" style={{ display: "flex", width: "100%" }}>
          <input
            type="range"
            min="0"
            max="5000"
            step="10"
            className="filter-modal-content-items-slice"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              dispatch(setPriceReducer(e.target.value));
            }}
          />
          <input
            type="text"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              dispatch(setPriceReducer(e.target.value));
            }}
            className="filter-modal-content-items-text"
          />
        </div>
      </div>
      <div className="filter-modal-content-wrapper">
        <h4>Group Size</h4>
        <div className="filter-modal-content-items flex-wrap filter-modal-content-items-inputs" style={{ display: "flex", width: "100%" }}>
          <input
            type="range"
            min="0"
            max="60"
            step="1"
            className="filter-modal-content-items-slice"
            value={groupSize}
            onChange={(e) => {
              setGroupSize(e.target.value);
              dispatch(setGroupSizeReducer(e.target.value));
            }}
          />
          <input
            type="text"
            value={groupSize}
            onChange={(e) => {
              setGroupSize(e.target.value);
              dispatch(setGroupSizeReducer(e.target.value));
            }}
            className="filter-modal-content-items-text"
          />
        </div>
      </div>
      <div className="filter-modal-content-wrapper">
        <h4>Start Time</h4>
        <div className="filter-modal-content-items flex-wrap filter-modal-content-items-inputs" style={{ display: "flex", width: "100%" }}>
          <input
            type="range"
            min="0"
            max="1439"
            step="1"
            value={startTime}
            onChange={(e) => handleStartTimeRange(e, setStartTime, setStartTimeText, setStartTimeReducer, dispatch)}
            className="filter-modal-content-items-slice"
          />
          <input
            type="text"
            value={startTimeText}
            onChange={(e) => handleStartTimeTextFormat(e, setStartTimeText, setStartTime)}
            className="filter-modal-content-items-text"
          />
        </div>
      </div>
    </div>
  );
}
