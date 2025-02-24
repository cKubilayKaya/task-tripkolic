import Favorites from "@/components/Favorites/Favorites";
import PageHead from "@/components/PageHead";
import React from "react";

export default function favorites() {
  return (
    <div>
      <PageHead title="Favorites | Tripkolic" />
      <Favorites cardHeaderTitle={"Tripkolic Favorites"} cardHeaderIsSearch={true} />
    </div>
  );
}
