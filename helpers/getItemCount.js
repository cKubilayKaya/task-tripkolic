const getItemCount = (data, content) => {
  return data?.filter((i) => {
    if (i?.theme === content) return content;
    if (i?.activity === content) return content;
    if (i?.vehicle === content) return content;
    if (i?.features?.some((f) => f === content)) return content;
  })?.length;
};

export default getItemCount;
