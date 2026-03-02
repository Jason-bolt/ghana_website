import PRESIDENTS from "@/data/presidents";

export const getPresident = (slug: string) => {
  return (
    PRESIDENTS.firstRepublicPresidents.find(
      (president) => president.alt === slug,
    ) ||
    PRESIDENTS.secondRepublicPresidents.find(
      (president) => president.alt === slug,
    ) ||
    PRESIDENTS.thirdRepublicPresidents.find(
      (president) => president.alt === slug,
    ) ||
    PRESIDENTS.fourthRepublicPresidents.find(
      (president) => president.alt === slug,
    )
  );
};
