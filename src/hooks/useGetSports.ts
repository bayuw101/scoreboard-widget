import { useMemo } from "react";
import type { EventType, ParameterType, SportType } from "../types";
import { genders, levels, sports } from "../lib/data";
import { showErrorToast } from "../utils/toastUtils";

export const useSports = (parameters:ParameterType, events:EventType[], setSelectedSport:React.Dispatch<React.SetStateAction<SportType | null>>) => {
  const sportIds = useMemo(() => {
    const id = parameters.sportId;
    return id ? (Array.isArray(id) ? id.map(Number) : [Number(id)]) : [];
  }, [parameters.sportId]);

  const filteredSports = useMemo(() => {
      if (!sportIds.length && Array.isArray(events) && events.length) {
        const uniqueSportIds = Array.from(
          new Set(events.map((e) => +e.genericSportId))
        );
        return sports.filter((s) => uniqueSportIds.includes(+s.sportId));
      }
  
      const filtered = sportIds.length
        ? sports.filter((s) => sportIds.includes(+s.sportId))
        : sports;
      
      if (filtered.length === 0) {
        showErrorToast(`Arbiter Scoreboard : Invalid sportId`);
        return [];
      }
  
      if (filtered.length === 1 && (parameters.genderId || parameters.levelId)) {
        const selectedGender = genders.find((g) => +g.genderId === parameters.genderId);
        const gender = parameters.genderId
          ? selectedGender?.genderName
          : null;
        if (parameters.genderId && !selectedGender) {
          showErrorToast(`Arbiter Scoreboard : Invalid genderId`);
          return [];
        }
  
        const level = parameters.levelId
          ? levels.find((l) => +l.levelId === parameters.levelId)?.levelName
          : null;
        if (parameters.levelId && !level) {
          showErrorToast(`Arbiter Scoreboard : Invalid levelId`);
          return [];
        }
  
        const sport = filtered[0];
  
        filtered[0] = {
          ...filtered[0],
          sportName: [sport.sportName, gender, level].filter(Boolean).join(" "),
          sportIcon: sport.sportIcon,
        };
        setSelectedSport(filtered[0]);
      }
  
      return filtered;
    }, [sportIds, parameters.genderId, parameters.levelId, events]);

  return { sports:filteredSports, sportIds };
};
