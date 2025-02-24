import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import { useSelector } from "react-redux";
import NoDataText from "../NoDataText";

export default function Cards({ cardHeaderTitle }) {
  const filteredCards = useSelector((state) => state?.filteredCards);

  return (
    <div className="container cards">
      <CardHeader cardHeaderTitle={cardHeaderTitle} />
      <div className="cards-wrapper">
        {filteredCards?.length >= 1 ? (
          filteredCards?.map((card) => <Card key={card?.id} card={card} />)
        ) : (
          <NoDataText text="No data found matching this filter." />
        )}
      </div>
    </div>
  );
}
