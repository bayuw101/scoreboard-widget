import type { Range } from "react-date-range";
export const DEFAULT_DATE_RANGE = (): Range[] => {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 55);

  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + 30);

  return [
    {
      startDate,
      endDate,
      key: "selection",
    },
  ];
};