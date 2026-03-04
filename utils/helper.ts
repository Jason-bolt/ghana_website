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

const allPresidents = [
  ...PRESIDENTS.firstRepublicPresidents,
  ...PRESIDENTS.secondRepublicPresidents,
  ...PRESIDENTS.thirdRepublicPresidents,
  ...PRESIDENTS.fourthRepublicPresidents,
];

export const getPresidentSlugs = (): string[] => {
  const seen = new Set<string>();
  return allPresidents.filter((p) => {
    if (seen.has(p.alt)) return false;
    seen.add(p.alt);
    return true;
  }).map((p) => p.alt);
};
