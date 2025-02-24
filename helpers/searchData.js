const searchData = (query, setFilteredCards, setShowNoMatch, data) => {
  if (query?.length < 1) {
    setFilteredCards([]);
    setShowNoMatch(false);
  } else {
    const lowercasedQuery = query?.toLowerCase();
    const filtered = data?.filter((card) => card?.title?.toLowerCase()?.includes(lowercasedQuery) || card?.location?.toLowerCase()?.includes(lowercasedQuery));
    if (filtered?.length < 1) {
      setShowNoMatch(true);
      setFilteredCards([]);
    } else {
      setShowNoMatch(false);
      setFilteredCards(filtered);
    }
  }
};

export default searchData;
