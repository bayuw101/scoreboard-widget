
import { useMemo } from "react";
import { formatDate }from "../utils/dateUtils";
import type { ResourceType } from "../types";

export const useInitialSlideIndex = (resources:ResourceType[]) => {
    return useMemo(() => {
      if (!resources.length) return 0;
      const todayStr = formatDate(new Date().toISOString());
      const match = resources.findIndex((e) => formatDate(e.date) === todayStr);
      if (match >= 0) return match;
  
      const pastDates = resources
        .map((e, i) => ({ date: formatDate(e.date), index: i }))
        .filter((d) => d.date < todayStr)
        .sort((a, b) => b.date.localeCompare(a.date));
  
      return pastDates.length ? pastDates[0].index : 0;
    }, [resources]);
  };