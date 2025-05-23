import { schoolYears } from "../lib/data";
import type { EventType, TeamType } from "../types";

export function rename(teamName: string): string {
  if (!teamName) return "";
  const suffixRegex =
    /\s?(High School|Junior High|Middle School|Elementary School|High|Junior|Middle|Elementary|School)$/;
  return teamName.replace(suffixRegex, "").trim();
}

export function getTeamLink({
  event,
  homeTeam,
}: {
  event: EventType;
  homeTeam: TeamType;
}): string {
  if (!event || !homeTeam) return "#";

  const schoolYear = getSchoolYearByDate(event.fromDate);
  if (!schoolYear) return "#";

  const { uniqueGameId } = event;
  const { entityId, uniqueTeamId } = homeTeam;
  const { SchoolYearID } = schoolYear;

  return `https://arbiterlive.com/Teams/Game/${uniqueGameId}/${entityId}/${uniqueTeamId}/${SchoolYearID}`;
}

export function getSchoolYearByDate(
  gameDate: string | Date
): { StartDate: string; EndDate: string; SchoolYearID: number } | null {
  const gameDateObj = new Date(gameDate);

  return (
    schoolYears.find(({ StartDate, EndDate }) => {
      const startDate = new Date(StartDate);
      const endDate = new Date(EndDate);
      return gameDateObj >= startDate && gameDateObj < endDate;
    }) || null
  );
}