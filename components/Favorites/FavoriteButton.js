import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@/store/slices/favoritesSlice";
import { MdFavorite } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import cn from "classnames";
import { toast } from "react-toastify";

const FavoriteButton = ({ card }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.id === card?.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(card));
      toast.info("Removed from favorites");
    } else {
      dispatch(addFavorite(card));
      toast.success("Added to favorites");
    }
  };

  return (
    <button className={cn("favorite", isFavorite && "favorited")} onClick={handleFavoriteClick}>
      {isFavorite ? <MdFavorite size={24} /> : <CiHeart size={24} />}
    </button>
  );
};

export default FavoriteButton;
