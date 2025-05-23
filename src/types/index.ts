export type LevelType = {
  levelId: string;
  levelName: string;
};

export type GenderType = {
  genderId: string;
  genderName: string;
};

export type ResourceType = {
  home: string;
  away: string;
  homeScore: string | "-";
  awayScore: string | "-";
  homeLogo?: string;
  awayLogo?: string;
  sport: string;
  sportLogo?: string;
  eventLink?: string;
  date: string;
  time?: string;
  location?: string;
  isLive?: boolean;
  homeSchoolId?: number;
};

export type OptionsType = {
  header?: "top" | "bottom" | "left" | "right" | false;
  theme?: "light" | "dark";
  vertical?: boolean;
  arbiterLogo?: "mini" | "full" | boolean;
  location?: boolean;
  primaryColor?: string;
  secondaryColor?: string;
  thirdColor?: string;
  backgroundColor?: string;
  hideSports?: boolean;
  teamLogoFilter?: "colored" | "white" | "black" | "none";
};

export type ParameterType = {
  sportId?: number[] | number;
  genderId?: number[] | number;
  levelId?: number[] | number;
};

export type SportType = {
  sportId: string | null;
  sportName: string;
  sportIcon?: string;
};

export type TeamType = {
  uniqueTeamId: number;
  isHome: boolean;
  score: number;
  teamName: string;
  entityId: number;
};

export type EventType = {
  uniqueGameId: number;
  gameId: number;
  fromDate: string;
  toDate: string;
  uniqueSiteId: number;
  siteName: string;
  uniqueSubSiteId: number;
  subSiteName: string;
  hsgenderId: number;
  hslevelId: number;
  genericSportId: number;
  teamValues: string | null; // Adjust type if needed
  teams: TeamType[];
};
