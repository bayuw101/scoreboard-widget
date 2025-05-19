// hooks/useFilteredEvents.ts
import { useMemo, useEffect } from "react";
import { sports, genders, levels } from "../lib/data";
import type { EventType, SportType } from "../types";
import type { Range } from "react-date-range";

export function useFilteredEvents({
  events,
  dateRange,
  selectedSport,
  sportIds,
  setLoading,
}: {
  events: EventType[];
  dateRange: Range[];
  selectedSport: SportType | null;
  sportIds: number[];
  setLoading: (val: boolean) => void;
}) {
  const resources = useMemo(() => {
    if (!events?.length) return [];

    setLoading(true);

    const startDate = dateRange[0]?.startDate;
    const endDate = dateRange[0]?.endDate;

    if (!startDate || !endDate) return [];

    const start = new Date(startDate.setHours(0, 0, 0, 0));
    const end = new Date(endDate.setHours(23, 59, 59, 999));

    return events
      .filter((event) => {
        const eventDate = new Date(event.fromDate);
        const home = event.teams.find((t) => t.isHome);
        const away = event.teams.find((t) => !t.isHome);
        const matchesSport =
          !selectedSport ||
          !selectedSport.sportId ||
          +event.genericSportId === +selectedSport.sportId;
        const matchesSportId = sportIds.length
          ? sportIds.includes(+event.genericSportId)
          : true;

        return (
          home &&
          away &&
          eventDate >= start &&
          eventDate <= end &&
          matchesSport &&
          matchesSportId
        );
      })
      .sort(
        (a, b) =>
          new Date(a.fromDate).getTime() - new Date(b.fromDate).getTime()
      )
      .map((event) => {
        const home = event.teams.find((t) => t.isHome)!;
        const away = event.teams.find((t) => !t.isHome)!;

        const sportName = [
          sports.find((s) => +s.sportId === +event.genericSportId)?.sportName,
          genders.find((g) => +g.genderId === +event.hsgenderId)?.genderName,
          levels.find((l) => +l.levelId === +event.hslevelId)?.levelName,
        ]
          .filter(Boolean)
          .join(" ")
          .replace(/(girls|boys) \1/gi, "$1");

        const eventDate = new Date(event.fromDate);

        return {
          home: home.teamName.length > 28 
            ? home.teamName.replace("High School", "HS") 
            : home.teamName,
          away: away.teamName.length > 28 
            ? away.teamName.replace("High School", "HS") 
            : away.teamName,
          homeScore: (home.score === 0 ? "0" : home.score || "-") as string,
          awayScore: (away.score === 0 ? "0" : away.score || "-") as string,
          homeLogo: "https://assets.arbitersports.com/logos/organization/"+home.entityId,
          awayLogo: "https://assets.arbitersports.com/logos/organization/"+away.entityId,
          sport: sportName,
          sportLogo: "",
          location: event.siteName || "TBD",
          date: eventDate.toLocaleDateString(),
          time: eventDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          homeSchoolId: home.entityId,
        };
      });
  }, [events, dateRange, selectedSport, sportIds]);

  useEffect(() => {
    setLoading(false);
  }, [resources, setLoading]);

  return { resources };
}