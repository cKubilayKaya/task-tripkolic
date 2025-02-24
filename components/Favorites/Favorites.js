import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "@/components/Cards/Card";
import CardHeader from "../Cards/CardHeader";
import NoDataText from "../NoDataText";

export default function Favorites({ cardHeaderTitle, cardHeaderIsSearch }) {
  const favorites = useSelector((state) => state.favorites);
  const [filteredCards, setFilteredCards] = useState();
  const [showNoMatch, setShowNoMatch] = useState(false);

  return (
    <div className="container cards favorites">
      <CardHeader
        cardHeaderTitle={cardHeaderTitle}
        cardHeaderIsSearch={cardHeaderIsSearch}
        setFilteredCards={setFilteredCards}
        setShowNoMatch={setShowNoMatch}
        data={favorites}
      />
      <div className="cards-wrapper favorites-wrapper">
        {showNoMatch ? (
          <p className="no-favorite">No data matching this filter was found.</p>
        ) : favorites.length > 0 ? (
          filteredCards?.length > 0 ? (
            filteredCards.map((favorite) => <Card key={favorite?.id} card={favorite} />)
          ) : (
            favorites.map((favorite) => <Card key={favorite?.id} card={favorite} />)
          )
        ) : (
          <NoDataText text="You do not have a favorite card." />
        )}
      </div>
    </div>
  );
}
