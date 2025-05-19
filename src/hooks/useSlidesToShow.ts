import { useMemo } from "react";
import type { OptionsType } from "../types";

export const useSlidesToShow = (
  options: OptionsType,
  rootWidth: number,
  rootHeight: number,
  itemHeight: number
) => {
  return useMemo(() => {
    if (options.vertical) return {slides: Math.floor((rootHeight || 0) / itemHeight), col: 1};

    const breakpoints = [
      { width: 1531, slides: 6 },
      { width: 1281, slides: 5 },
      { width: 1025, slides: 4 },
      { width: 900, slides: 3 },
      { width: 700, slides: 2 },
    ];
    const headerOffset = options.header === "left" || options.header === "right" ? 1 : 0;
    for (const bp of breakpoints) {
      if (rootWidth >= bp.width) return {slides: bp.slides - headerOffset, col: bp.slides};
    }
    return {slides: 1, col: 1};
  }, [rootWidth, rootHeight, itemHeight]);
};
