import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { LuMoveDownRight } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../Favorites/FavoriteButton";
import BasketButton from "../Basket/BasketButton";

export default function Card({ card }) {
  return (
    <div className="main-card">
      <div className="main-card-image-wrapper">
        <Image src={card?.imageSrc} alt={card?.title} layout="fill" objectFit="cover" />
        <div className="main-card-image-wrapper-overlay"></div>
        <div className="main-card-image-wrapper-info">
          {card?.discount ? <p className="discount">{card?.discount}% OFF</p> : ""}
          <p className="category">{card?.category}</p>
          <FavoriteButton card={card} />
        </div>
      </div>
      <div className="main-card-info-wrapper">
        <div className="info-wrapper-top d-flex align-items-center justify-content-between">
          <div className="info-wrapper-star d-flex align-items-center ">
            <IoStarSharp />
            <p>
              {card?.starCount} <span>({card?.commentCount})</span>
            </p>
          </div>
          <div className="info-wrapper-location d-flex align-items-center">
            <HiLocationMarker />
            <p>{card?.location}</p>
          </div>
        </div>
        <h3 className="info-title">{card?.title}</h3>
        <div className="info-price d-flex align-items-center justify-content-end">
          {card?.oldPrice && (
            <p className="old-price">
              THB {card?.oldPrice} <LuMoveDownRight />
            </p>
          )}
          <p className="new-price">THB {card?.price}</p>
        </div>
        <div className="info-bottom d-flex align-items-center justify-content-between">
          <Link href={`/${card?.id}`} className="info-bottom-link">
            <span>Details</span>
            <IoIosArrowForward />
          </Link>
          <BasketButton card={card} />
        </div>
      </div>
    </div>
  );
}
