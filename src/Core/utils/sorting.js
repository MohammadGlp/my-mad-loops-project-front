export const handleLikeSorting = (list, numSlice) => {
  const numDescending = [...list].sort((a, b) => b.like - a.like);

  return numDescending.slice(0, numSlice);
};

export const handleCostSorting = (list, numSlice) => {
  const numDescending = [...list].sort((a, b) => b.cost - a.cost);

  return numDescending.slice(0, numSlice);
};

export const handleDateSortingDes = (list) => {
  const numDescending = [...list].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );
  return numDescending;
};

export const handleDateSortingAs = (list, numSlice) => {
  const numAscending = [...list].sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  return numAscending.slice(0, numSlice);
};

export const handleViewSorting = (list, numSlice) => {
  const numDescending = [...list].sort((a, b) => b.view - a.view);

  console.log(numDescending);
  return numDescending.slice(0, numSlice);
};
