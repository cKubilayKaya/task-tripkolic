import searchData from "@/helpers/searchData";
import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function CardHeader({ cardHeaderTitle, setFilteredCards, setShowNoMatch, data, cardHeaderIsSearch = false }) {
  return (
    <div className="cards-header">
      <h3>{cardHeaderTitle}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti laudantium voluptatum doloribus quos facilis sapiente voluptatem nobis quasi
        numquam at placeat porro, tenetur inventore repudiandae assumenda dolorem culpa nisi!
      </p>
      {cardHeaderIsSearch && (
        <div className="cars-header-search">
          <IoIosSearch size={20} />
          <input type="text" placeholder="Search title or location..." onKeyUp={(e) => searchData(e.target.value, setFilteredCards, setShowNoMatch, data)} />
        </div>
      )}
    </div>
  );
}
