import type { Range } from "react-date-range";

export const DEFAULT_DATE_RANGE = (): Range[] => {
  const today = new Date();
  return [
    {
      startDate: new Date(today.setDate(today.getDate() - 3)),
      endDate: new Date(today.setDate(today.getDate() + 7)),
      key: "selection",
    },
  ];
};