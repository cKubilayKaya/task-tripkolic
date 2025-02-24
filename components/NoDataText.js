import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function NoDataText({ text }) {
  return (
    <div className="cards-wrapper-no-data d-flex align-items-center ">
      <BsFillInfoCircleFill size={24} />
      <p>{text}</p>
    </div>
  );
}
