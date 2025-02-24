import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "@/store/slices/favoritesSlice";
import filtersReducer from "@/store/slices/filterSlice";
import filteredCardsReducer from "@/store/slices/filteredCards";
import basketReducer from "@/store/slices/basketSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    filters: filtersReducer,
    filteredCards: filteredCardsReducer,
    basket: basketReducer,
  },
});

export default store;
