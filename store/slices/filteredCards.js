import { createSlice } from "@reduxjs/toolkit";

const filteredCards = createSlice({
  name: "filteredCards",
  initialState: [
    {
      id: 1,
      title: "Phi phi, khai islands tour with speed boat full day",
      imageSrc:
        "https://www.travelandleisure.com/thmb/nDDNqO2EctQhiIfZrxeXTF47zhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg",
      discount: "30",
      category: "Tours",
      isFavorite: false,
      isBasket: false,
      starCount: "4.3",
      commentCount: "20",
      location: "Phuket",
      oldPrice: "1,020",
      price: "1,400",
      theme: "Island Tour",
      activity: "Swimming",
      vehicle: "Yacht",
      features: ["Transfer", "Halal Food"],
      startTime: "08:00",
      groupSize: 20,
    },
    {
      id: 2,
      title: "Bangkok City and Temples Tour",
      imageSrc:
        "https://www.travelandleisure.com/thmb/nDDNqO2EctQhiIfZrxeXTF47zhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg",
      discount: "25",
      category: "Tours",
      isFavorite: true,
      isBasket: false,
      starCount: "4.7",
      commentCount: "35",
      location: "Bangkok",
      oldPrice: "800",
      price: "1,000",
      theme: "Land Tour",
      activity: "Running",
      vehicle: "Speedboat",
      features: ["Vegetarian Food"],
      startTime: "09:00",
      groupSize: 15,
    },
    {
      id: 7,
      title: "Pattaya Coral Island Tour",
      imageSrc:
        "https://www.travelandleisure.com/thmb/nDDNqO2EctQhiIfZrxeXTF47zhE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-koh-phi-phi-PLACESTHAILAND1023-09b9d347b3cd4844b4ae19e4e06a9a6d.jpg",
      discount: "40",
      category: "Tours",
      isFavorite: false,
      isBasket: false,
      starCount: "4.4",
      commentCount: "45",
      location: "Pattaya",
      oldPrice: "1,000",
      price: "1,300",
      theme: "Land Tour",
      activity: "Running",
      vehicle: "Speedboat",
      features: ["Vegetarian Food", "Halal Food"],
      startTime: "12:00",
      groupSize: 60,
    },
  ],

  reducers: {
    setFilteredCards(state, action) {
      return action.payload;
    },
  },
});

export const { setFilteredCards } = filteredCards.actions;
export default filteredCards.reducer;
