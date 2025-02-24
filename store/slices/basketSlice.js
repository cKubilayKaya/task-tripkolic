import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addBasket: (state, action) => {
      let newItem = { ...action.payload, isBasket: action?.payload?.isBasket ? false : true };
      state.push(newItem);
    },
    removeBasket: (state, action) => {
      return state.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const { addBasket, removeBasket } = basketSlice.actions;
export default basketSlice.reducer;
