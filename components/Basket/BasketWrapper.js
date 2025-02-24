import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "@/components/Cards/Card";
import CardHeader from "../Cards/CardHeader";
import NoDataText from "../NoDataText";

export default function BasketWrapper({ cardHeaderTitle, cardHeaderIsSearch }) {
  const basket = useSelector((state) => state.basket);
  const [filteredCards, setFilteredCards] = useState();
  const [showNoMatch, setShowNoMatch] = useState(false);

  const searchData = (query) => {
    if (query?.length > 1 && filteredCards?.length < 1) {
      setShowNoMatch(true);
    } else {
      setShowNoMatch(false);
    }
    if (query?.length < 1) {
      setFilteredCards([]);
    } else {
      const lowercasedQuery = query.toLowerCase();
      const filtered = basket.filter((card) => card.title.toLowerCase().includes(lowercasedQuery) || card.location.toLowerCase().includes(lowercasedQuery));
      setFilteredCards(filtered);
    }
  };

  return (
    <div className="container cards basket">
      <CardHeader cardHeaderTitle={cardHeaderTitle} cardHeaderIsSearch={cardHeaderIsSearch} searchData={searchData} />
      <div className="cards-wrapper">
        {showNoMatch ? (
          <p>No data matching this filter was found.</p>
        ) : basket.length > 0 ? (
          filteredCards?.length > 0 ? (
            filteredCards.map((bsk) => <Card key={bsk?.id} card={bsk} />)
          ) : (
            basket.map((bsk) => <Card key={bsk?.id} card={bsk} />)
          )
        ) : (
          <NoDataText text="You do not have a data in your basket." />
        )}
      </div>
    </div>
  );
}
