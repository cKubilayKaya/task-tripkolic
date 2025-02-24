import React from "react";
import Link from "next/link";
import { MdFavorite } from "react-icons/md";
import { HiMiniUserCircle } from "react-icons/hi2";
import { useSelector } from "react-redux";
import FilterModal from "../FilterModal/FilterModal";
import { SlBasket } from "react-icons/sl";

const Header = () => {
  const favorites = useSelector((state) => state.favorites);
  const basket = useSelector((state) => state.basket);

  return (
    <div className="header d-flex align-items-center">
      <header className="container ">
        <nav className="navbar">
          <div>
            <FilterModal />
          </div>
          <Link href={"/"} className="logo-title">
            Tripkolic
          </Link>
          <div className="right-navbar">
            <Link href="/favorites" className="favorites-link">
              <MdFavorite size={24} />
              <span className="favorites-link-number">{favorites?.length}</span>
            </Link>
            <Link href="/basket" className="basket-link">
              <SlBasket size={24} />
              <span className="basket-link-number">{basket?.length}</span>
            </Link>
            <button>
              <HiMiniUserCircle size={28} />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
