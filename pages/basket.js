import BasketWrapper from "@/components/Basket/BasketWrapper";
import PageHead from "@/components/PageHead";
import React from "react";

export default function Basket() {
  return (
    <div>
      <PageHead title="Basket | Tripkolic" />
      <BasketWrapper cardHeaderTitle={"Tripkolic Basket"} cardHeaderIsSearch={true} />
    </div>
  );
}
