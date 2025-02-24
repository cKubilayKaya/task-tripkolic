import timeToMinutes from "./timeToMinutes";

const filterItemsHandler = (data, filters) => {
  let filteredCategory = data?.filter((d) => d?.category === filters?.selectedCategory);
  let filteredActives = filters?.filterItems?.filter((f) => f?.active?.length >= 1);
  let filteredCardItems = filteredCategory
    ?.filter((item) => {
      return filteredActives?.every((filter) => {
        return filter.active.some((activeItem) => {
          if (filter.name === "Theme") return item.theme === activeItem.split(" (")[0];
          if (filter.name === "Activity") return item.activity === activeItem;
          if (filter.name === "Vehicle") return item.vehicle === activeItem;
          if (filter.name === "Features") return item.features.includes(activeItem.split(" (")[0]);
          return true;
        });
      });
    })
    ?.filter((filteredCardItem) => filteredCardItem?.location?.toLocaleLowerCase()?.includes(filters?.location?.toLocaleLowerCase()))
    ?.filter((filteredCardItem) => timeToMinutes(filteredCardItem?.startTime) >= timeToMinutes(filters?.startTime))
    ?.filter((filteredCardItem) => parseInt(filteredCardItem?.price?.replace(/,/g, "")) >= parseInt(filters?.price))
    ?.filter((filteredCardItem) => parseInt(filteredCardItem?.groupSize) >= parseInt(filters?.groupSize));
  return filteredCardItems;
};

export default filterItemsHandler;
