import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    selectedCategory: "Tours",
    categories: ["Tours", "Tickets", "Rent", "Transfer"],
    price: "0",
    groupSize: "0",
    location: "",
    startTime: "00:00",
    filterItems: [
      {
        id: 1,
        name: "Theme",
        items: ["Island Tour", "Land Tour", "Safari"],
        active: [],
      },
      {
        id: 2,
        name: "Activity",
        items: ["Swimming", "Running", "Elephant Care", "Snorkelling"],
        active: [],
      },
      {
        id: 3,
        name: "Vehicle",
        items: ["Yacht", "Speedboat", "Safari", "Catamaran", "Speed Catamaran"],
        active: [],
      },
      {
        id: 4,
        name: "Features",
        items: ["Transfer", "Halal Food", "Vegetarian Food"],
        active: [],
      },
    ],
  },

  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setPriceReducer(state, action) {
      state.price = action.payload;
    },
    setStartTimeReducer(state, action) {
      state.startTime = action.payload;
    },
    setGroupSizeReducer(state, action) {
      state.groupSize = action.payload;
    },
    setLocationReducer(state, action) {
      state.location = action.payload;
    },
    resetFilter(state, action) {
      state.filterItems.forEach((filter) => {
        filter.active = [];
      });
      state.price = 0;
      state.groupSize = 0;
      state.location = "";
      state.startTime = "00:00";
      state.selectedCategory = "Tours";
    },

    setActiveFilterItem(state, action) {
      const { itemId, content } = action.payload;
      state.filterItems = state.filterItems.map((filterItem) => {
        if (filterItem.id === itemId) {
          const isActive = filterItem.active.includes(content);
          return {
            ...filterItem,
            active: isActive ? filterItem.active.filter((activeItem) => activeItem !== content) : [...filterItem.active, content],
          };
        }
        return filterItem;
      });
    },
  },
});

export const { setSelectedCategory, setStartTimeReducer, setLocationReducer, setPriceReducer, setGroupSizeReducer, resetFilter, setActiveFilterItem } =
  filterSlice.actions;
export default filterSlice.reducer;
