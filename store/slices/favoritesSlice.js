import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      let newItem = { ...action.payload, isFavorite: action?.payload?.isFavorite ? false : true };
      state.push(newItem);
    },
    removeFavorite: (state, action) => {
      return state.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
