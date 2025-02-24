import Favorites from "@/components/Favorites/Favorites";
import React from "react";

export default function favorites() {
  return (
    <div>
      <Favorites cardHeaderTitle={"Tripkolic Favorites"} cardHeaderIsSearch={true} />
    </div>
  );
}
