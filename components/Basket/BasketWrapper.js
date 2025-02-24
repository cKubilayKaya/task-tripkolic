import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "@/components/Cards/Card";
import CardHeader from "../Cards/CardHeader";
import NoDataText from "../NoDataText";

export default function BasketWrapper({ cardHeaderTitle, cardHeaderIsSearch }) {
  const basket = useSelector((state) => state.basket);
  const [filteredCards, setFilteredCards] = useState();
  const [showNoMatch, setShowNoMatch] = useState(false);

  return (
    <div className="container cards basket">
      <CardHeader
        cardHeaderTitle={cardHeaderTitle}
        cardHeaderIsSearch={cardHeaderIsSearch}
        setFilteredCards={setFilteredCards}
        setShowNoMatch={setShowNoMatch}
        data={basket}
      />
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
