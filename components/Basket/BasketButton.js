import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { toast } from "react-toastify";
import { addBasket, removeBasket } from "@/store/slices/basketSlice";

const BasketButton = ({ card }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const isBasket = basket.some((fav) => fav.id === card?.id);

  const handleBasketClick = () => {
    if (isBasket) {
      dispatch(removeBasket(card));
      toast.info("Removed from basket");
    } else {
      dispatch(addBasket(card));
      toast.success("Added to basket");
    }
  };

  return (
    <button className={cn("basket info-bottom-button", isBasket && "isBasketButton")} onClick={handleBasketClick}>
      {isBasket ? "Remove From Basket" : "Book Now"}
    </button>
  );
};

export default BasketButton;
