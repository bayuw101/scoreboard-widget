export const widgetImages = {
  favicon: 'https://assets-api.rschooltoday.com/widget/favicon.png',
  liveWhite: 'https://assets-api.rschooltoday.com/widget/live-white.png',
  noEvent: 'https://assets-api.rschooltoday.com/widget/no-event.png',
  live: 'https://assets-api.rschooltoday.com/widget/live.png',
  team: 'https://assets-api.rschooltoday.com/widget/team.png',
  arbiterLogo: 'https://assets-api.rschooltoday.com/widget/Arbiter-Logo-White.png',
  arbiterMobileLogo: 'https://assets-api.rschooltoday.com/widget/Arbiter-Favicon-White.png',
}

export type sportsType = {
  sportId: string | null;
  sportName: string;
};
export type levelsType = {
  levelId: string;
  levelName: string;
};
export type gendersType = {
  genderId: string;
  genderName: string;
};

export type resourcesType = {
  home: string;
  away: string;
  homeScore: string | "-";
  awayScore: string | "-";
  homeLogo?: string;
  awayLogo?: string;
  sport: string;
  sportLogo?: string;
  date: string;
  time?: string;
};

export const sports = [
  {
    sportId: "1",
    sportName: "Baseball",
  },
  {
    sportId: "2",
    sportName: "Basketball",
  },
  {
    sportId: "3",
    sportName: "Field Hockey",
  },
  {
    sportId: "4",
    sportName: "Football",
  },
  {
    sportId: "5",
    sportName: "Hockey",
  },
  {
    sportId: "6",
    sportName: "Lacrosse",
  },
  {
    sportId: "7",
    sportName: "Ringette",
  },
  {
    sportId: "8",
    sportName: "Soccer",
  },
  {
    sportId: "9",
    sportName: "Softball",
  },
  {
    sportId: "10",
    sportName: "Swimming",
  },
  {
    sportId: "11",
    sportName: "Track - Outdoor",
  },
  {
    sportId: "12",
    sportName: "Volleyball",
  },
  {
    sportId: "13",
    sportName: "Water Polo",
  },
  {
    sportId: "14",
    sportName: "Wrestling",
  },
  {
    sportId: "15",
    sportName: "Squash",
  },
  {
    sportId: "16",
    sportName: "Tennis",
  },
  {
    sportId: "17",
    sportName: "Golf",
  },
  {
    sportId: "18",
    sportName: "Gymnastics",
  },
  {
    sportId: "19",
    sportName: "Soccer Boys Varsity",
  },
  {
    sportId: "20",
    sportName: "Other",
  },
  {
    sportId: "21",
    sportName: "Curling",
  },
  {
    sportId: "22",
    sportName: "Boxing",
  },
  {
    sportId: "23",
    sportName: "Mixed Martial Arts",
  },
  {
    sportId: "24",
    sportName: "Cricket",
  },
  {
    sportId: "25",
    sportName: "Cross Country",
  },
  {
    sportId: "26",
    sportName: "Bowling",
  },
  {
    sportId: "27",
    sportName: "Ski",
  },
  {
    sportId: "28",
    sportName: "Snowboarding",
  },
  {
    sportId: "29",
    sportName: "Racquetball",
  },
  {
    sportId: "30",
    sportName: "Competitive Cheerleading",
  },
  {
    sportId: "31",
    sportName: "Sideline Cheerleading",
  },
  {
    sportId: "32",
    sportName: "Equestrian",
  },
  {
    sportId: "33",
    sportName: "Badminton",
  },
  {
    sportId: "34",
    sportName: "Powerlifting",
  },
  {
    sportId: "35",
    sportName: "Riflery",
  },
  {
    sportId: "36",
    sportName: "Archery",
  },
  {
    sportId: "37",
    sportName: "Rowing/Crew",
  },
  {
    sportId: "38",
    sportName: "Flag Football",
  },
  {
    sportId: "39",
    sportName: "Cross Country Skiing",
  },
  {
    sportId: "40",
    sportName: "Figure Skating",
  },
  {
    sportId: "41",
    sportName: "Dance",
  },
  {
    sportId: "42",
    sportName: "Pom Pon",
  },
  {
    sportId: "43",
    sportName: "Sailing",
  },
  {
    sportId: "44",
    sportName: "Surfing",
  },
  {
    sportId: "45",
    sportName: "Synchronized Swimming",
  },
  {
    sportId: "46",
    sportName: "Track - Indoor",
  },
  {
    sportId: "47",
    sportName: "Diving",
  },
  {
    sportId: "49",
    sportName: "Football - 8 player",
  },
  {
    sportId: "50",
    sportName: "Fencing",
  },
  {
    sportId: "51",
    sportName: "Netball",
  },
  {
    sportId: "52",
    sportName: "Marching Band",
  },
  {
    sportId: "69",
    sportName: "Tennis - Team",
  },
  {
    sportId: "70",
    sportName: "Ultimate Frisbee",
  },
  {
    sportId: "71",
    sportName: "Softball - Slow Pitch",
  },
  {
    sportId: "72",
    sportName: "Football - 6 player",
  },
  {
    sportId: "73",
    sportName: "Decathlon",
  },
  {
    sportId: "74",
    sportName: "Football - 9 player",
  },
  {
    sportId: "75",
    sportName: "Bass Fishing",
  },
  {
    sportId: "76",
    sportName: "Canoe Paddling",
  },
  {
    sportId: "77",
    sportName: "Mountain Biking",
  },
  {
    sportId: "78",
    sportName: "Rodeo",
  },
  {
    sportId: "79",
    sportName: "Dance - Jazz",
  },
  {
    sportId: "80",
    sportName: "Drill Team",
  },
  {
    sportId: "81",
    sportName: "Trap Shooting",
  },
  {
    sportId: "82",
    sportName: "Rock Climbing",
  },
  {
    sportId: "83",
    sportName: "Volleyball - Sand",
  },
  {
    sportId: "84",
    sportName: "Cycling",
  },
  {
    sportId: "85",
    sportName: "Floor Hockey",
  },
  {
    sportId: "86",
    sportName: "Lacrosse - Boys",
  },
  {
    sportId: "87",
    sportName: "Lacrosse - Girls",
  },
  {
    sportId: "88",
    sportName: "Esports",
  },
  {
    sportId: "89",
    sportName: "Bocce",
  },
  {
    sportId: "90",
    sportName: "Pickleball",
  },
];

export const levels = [
  {
    levelId: "1",
    levelName: "Varsity",
  },
  {
    levelId: "2",
    levelName: "Junior Varsity",
  },
  {
    levelId: "3",
    levelName: "Sophomore",
  },
  {
    levelId: "4",
    levelName: "Freshman",
  },
  {
    levelId: "6",
    levelName: "8th",
  },
  {
    levelId: "7",
    levelName: "7th",
  },
  {
    levelId: "10",
    levelName: "6th",
  },
  {
    levelId: "12",
    levelName: "Professional",
  },
  {
    levelId: "13",
    levelName: "Division I",
  },
  {
    levelId: "14",
    levelName: "Division II",
  },
  {
    levelId: "15",
    levelName: "Division III",
  },
  {
    levelId: "16",
    levelName: "Junior College",
  },
  {
    levelId: "17",
    levelName: "NAIA",
  },
  {
    levelId: "18",
    levelName: "Adult",
  },
  {
    levelId: "19",
    levelName: "Youth",
  },
  {
    levelId: "20",
    levelName: "Other",
  },
  {
    levelId: "21",
    levelName: "5th",
  },
  {
    levelId: "22",
    levelName: "4th",
  },
  {
    levelId: "23",
    levelName: "3rd",
  },
  {
    levelId: "24",
    levelName: "2nd",
  },
  {
    levelId: "25",
    levelName: "1st",
  },
  {
    levelId: "26",
    levelName: "Kindergarten",
  },
  {
    levelId: "27",
    levelName: "7/8th",
  },
  {
    levelId: "28",
    levelName: "5/6th",
  },
  {
    levelId: "29",
    levelName: "6/7/8th",
  },
  {
    levelId: "30",
    levelName: "7/8/9th",
  },
  {
    levelId: "31",
    levelName: "4/5/6th",
  },
  {
    levelId: "32",
    levelName: "Unified",
  },
  {
    levelId: "33",
    levelName: "Froshmore",
  },
  {
    levelId: "34",
    levelName: "Elementary",
  },
  {
    levelId: "35",
    levelName: "Middle School",
  },
  {
    levelId: "36",
    levelName: "C-Team",
  },
];

export const genders = [
  {
    genderId: "1",
    genderName: "Boys",
  },
  {
    genderId: "2",
    genderName: "Girls",
  },
  {
    genderId: "3",
    genderName: "Co-ed",
  },
];

export const resources2 = [
  {
    home: "Manchester City",
    away: "Arsenal",
    homeScore: "2",
    awayScore: "1",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/e/ec/Manchester_City_FC_badge.svg",
    awayLogo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    sport: "Football",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Premier_League_Logo.png",
    date: "2023-10-01",
    time: "16:00",
    isLive: true,
  },
  {
    home: "Liverpool",
    away: "Chelsea",
    homeScore: "3",
    awayScore: "2",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC_logo.png",
    awayLogo: "https://upload.wikimedia.org/wikipedia/en/a/a9/Chelsea_FC.svg",
    sport: "Football",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Premier_League_Logo.png",
    date: "2023-10-01",
    time: "16:00",
    isLive: true,
  },
  {
    home: "Real Madrid",
    away: "Barcelona",
    homeScore: "1",
    awayScore: "1",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    sport: "Football",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/La_Liga_logo.png",
    date: "2023-10-02",
    time: "18:00",
  }
];


export const resources = [
  {
    home: "Manchester City",
    away: "Arsenal",
    homeScore: "2",
    awayScore: "1",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/e/ec/Manchester_City_FC_badge.svg",
    awayLogo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    sport: "Football",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Premier_League_Logo.png",
    date: "2025-05-10",
    time: "16:00",
    isLive: true,
  },
  {
    home: "Liverpool",
    away: "Chelsea",
    homeScore: "3",
    awayScore: "2",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC_logo.png",
    awayLogo: "https://upload.wikimedia.org/wikipedia/en/a/a9/Chelsea_FC.svg",
    sport: "Football",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Premier_League_Logo.png",
    date: "2025-05-10",
    time: "16:00",
    isLive: true,
  },
  {
    home: "Real Madrid",
    away: "Barcelona",
    homeScore: "1",
    awayScore: "1",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    sport: "Football",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/La_Liga_logo.png",
    date: "2025-05-11",
    time: "18:00",
  },
  {
    home: "Golden State Warriors",
    away: "Los Angeles Lakers",
    homeScore: "120",
    awayScore: "115",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Los_Angeles_Lakers_logo.svg",
    sport: "Basketball",
    sportLogo: "https://upload.wikimedia.org/wikipedia/en/0/03/NBA_logo.svg",
    date: "2025-05-12",
    time: "20:00",
  },
  {
    home: "New York Yankees",
    away: "Boston Red Sox",
    homeScore: "5",
    awayScore: "3",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Yankees_Primary_Logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/6/6d/Boston_Red_Sox_cap_logo.svg",
    sport: "Baseball",
    sportLogo: "https://upload.wikimedia.org/wikipedia/en/a/a6/MLB_logo.svg",
    date: "2025-05-13",
    time: "19:00",
  },
  {
    home: "Roger Federer",
    away: "Rafael Nadal",
    homeScore: "6",
    awayScore: "4",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_ball.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_ball.svg",
    sport: "Tennis",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_ball.svg",
    date: "2025-05-14",
    time: "15:00",
  },
  {
    home: "Paris Saint-Germain",
    away: "Bayern Munich",
    homeScore: "3",
    awayScore: "2",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_München_logo_%282017%29.svg",
    sport: "Football",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/UEFA_Champions_League_logo_2.svg",
    date: "2025-05-15",
    time: "21:00",
  },
  {
    home: "Milwaukee Bucks",
    away: "Brooklyn Nets",
    homeScore: "110",
    awayScore: "108",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Brooklyn_Nets_newlogo.svg",
    sport: "Basketball",
    sportLogo: "https://upload.wikimedia.org/wikipedia/en/0/03/NBA_logo.svg",
    date: "2025-05-16",
    time: "19:30",
  },
  {
    home: "Chicago Cubs",
    away: "St. Louis Cardinals",
    homeScore: "7",
    awayScore: "6",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Chicago_Cubs_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/a/ab/St._Louis_Cardinals_logo.svg",
    sport: "Baseball",
    sportLogo: "https://upload.wikimedia.org/wikipedia/en/a/a6/MLB_logo.svg",
    date: "2025-05-17",
    time: "18:00",
  },
  {
    home: "Novak Djokovic",
    away: "Andy Murray",
    homeScore: "7",
    awayScore: "5",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_ball.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_ball.svg",
    sport: "Tennis",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_ball.svg",
    date: "2025-05-18",
    time: "14:00",
  },
];
