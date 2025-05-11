export const widgetImages = {
  favicon: 'https://assets-api.rschooltoday.com/widget/favicon.png',
  liveWhite: 'https://assets-api.rschooltoday.com/widget/live-white.png',
  noEvent: 'https://assets-api.rschooltoday.com/widget/no-event.png',
  live: 'https://assets-api.rschooltoday.com/widget/live.png',
  team: 'https://assets-api.rschooltoday.com/widget/team.png',
}

export type sportsType = {
  sportId: string;
  sportName: string;
  sportIcon: string;
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
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Baseball.jpg",
  },
  {
    sportId: "2",
    sportName: "Basketball",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Basketball.jpg",
  },
  {
    sportId: "3",
    sportName: "Field Hockey",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/FieldHockey.jpg",
  },
  {
    sportId: "4",
    sportName: "Football",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Football.jpg",
  },
  {
    sportId: "5",
    sportName: "Hockey",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Hockey.jpg",
  },
  {
    sportId: "6",
    sportName: "Lacrosse",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Lacrosse.jpg",
  },
  {
    sportId: "7",
    sportName: "Ringette",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Ringette.jpg",
  },
  {
    sportId: "8",
    sportName: "Soccer",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Soccer.jpg",
  },
  {
    sportId: "9",
    sportName: "Softball",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Softball.jpg",
  },
  {
    sportId: "10",
    sportName: "Swimming",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Swimming.jpg",
  },
  {
    sportId: "11",
    sportName: "Track - Outdoor",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Track.jpg",
  },
  {
    sportId: "12",
    sportName: "Volleyball",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Volleyball.jpg",
  },
  {
    sportId: "13",
    sportName: "Water Polo",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/WaterPolo.jpg",
  },
  {
    sportId: "14",
    sportName: "Wrestling",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Wrestling.jpg",
  },
  {
    sportId: "15",
    sportName: "Squash",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Squash.jpg",
  },
  {
    sportId: "16",
    sportName: "Tennis",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Tennis.jpg",
  },
  {
    sportId: "17",
    sportName: "Golf",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Golf.jpg",
  },
  {
    sportId: "18",
    sportName: "Gymnastics",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Gymnastics.jpg",
  },
  {
    sportId: "19",
    sportName: "Soccer Boys Varsity",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Rugby.jpg",
  },
  {
    sportId: "20",
    sportName: "Other",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Other.jpg",
  },
  {
    sportId: "21",
    sportName: "Curling",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Curling.jpg",
  },
  {
    sportId: "22",
    sportName: "Boxing",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Boxing.jpg",
  },
  {
    sportId: "23",
    sportName: "Mixed Martial Arts",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/MMA.jpg",
  },
  {
    sportId: "24",
    sportName: "Cricket",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Cricket.jpg",
  },
  {
    sportId: "25",
    sportName: "Cross Country",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/CrossCountry.jpg",
  },
  {
    sportId: "26",
    sportName: "Bowling",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Bowling.jpg",
  },
  {
    sportId: "27",
    sportName: "Ski",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Ski.jpg",
  },
  {
    sportId: "28",
    sportName: "Snowboarding",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Snowboarding.jpg",
  },
  {
    sportId: "29",
    sportName: "Racquetball",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Racquetball.jpg",
  },
  {
    sportId: "30",
    sportName: "Competitive Cheerleading",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/CompetitiveCheer.jpg",
  },
  {
    sportId: "31",
    sportName: "Sideline Cheerleading",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/SidelineCheer.jpg",
  },
  {
    sportId: "32",
    sportName: "Equestrian",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Equestrian.jpg",
  },
  {
    sportId: "33",
    sportName: "Badminton",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Badminton.jpg",
  },
  {
    sportId: "34",
    sportName: "Powerlifting",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Powerlifting.jpg",
  },
  {
    sportId: "35",
    sportName: "Riflery",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Riflery.jpg",
  },
  {
    sportId: "36",
    sportName: "Archery",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Archery.jpg",
  },
  {
    sportId: "37",
    sportName: "Rowing/Crew",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Rowing.jpg",
  },
  {
    sportId: "38",
    sportName: "Flag Football",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/FlagFootball.jpg",
  },
  {
    sportId: "39",
    sportName: "Cross Country Skiing",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/CrossCountrySkiing.jpg",
  },
  {
    sportId: "40",
    sportName: "Figure Skating",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/FigureSkating.jpg",
  },
  {
    sportId: "41",
    sportName: "Dance",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Dance.jpg",
  },
  {
    sportId: "42",
    sportName: "Pom Pon",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/PomPon.jpg",
  },
  {
    sportId: "43",
    sportName: "Sailing",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Sailing.jpg",
  },
  {
    sportId: "44",
    sportName: "Surfing",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Surfing.jpg",
  },
  {
    sportId: "45",
    sportName: "Synchronized Swimming",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/SynchronizedSwimming.jpg",
  },
  {
    sportId: "46",
    sportName: "Track - Indoor",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/IndoorTrack.jpg",
  },
  {
    sportId: "47",
    sportName: "Diving",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Diving.jpg",
  },
  {
    sportId: "49",
    sportName: "Football - 8 player",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Football8.jpg",
  },
  {
    sportId: "50",
    sportName: "Fencing",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Fencing.jpg",
  },
  {
    sportId: "51",
    sportName: "Netball",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Netball.jpg",
  },
  {
    sportId: "52",
    sportName: "Marching Band",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/MarchingBand.jpg",
  },
  {
    sportId: "69",
    sportName: "Tennis - Team",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/TeamTennis.jpg",
  },
  {
    sportId: "70",
    sportName: "Ultimate Frisbee",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/UltimateFrisbee.jpg",
  },
  {
    sportId: "71",
    sportName: "Softball - Slow Pitch",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/SlowPitchSoftball.jpg",
  },
  {
    sportId: "72",
    sportName: "Football - 6 player",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Football6.jpg",
  },
  {
    sportId: "73",
    sportName: "Decathlon",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Decathlon.jpg",
  },
  {
    sportId: "74",
    sportName: "Football - 9 player",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Football9.jpg",
  },
  {
    sportId: "75",
    sportName: "Bass Fishing",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/BassFishing.jpg",
  },
  {
    sportId: "76",
    sportName: "Canoe Paddling",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/CanoePaddling.jpg",
  },
  {
    sportId: "77",
    sportName: "Mountain Biking",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/MountainBiking.jpg",
  },
  {
    sportId: "78",
    sportName: "Rodeo",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Rodeo.jpg",
  },
  {
    sportId: "79",
    sportName: "Dance - Jazz",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/JazzDance.jpg",
  },
  {
    sportId: "80",
    sportName: "Drill Team",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/DrillTeam.jpg",
  },
  {
    sportId: "81",
    sportName: "Trap Shooting",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/TrapShooting.jpg",
  },
  {
    sportId: "82",
    sportName: "Rock Climbing",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/RockClimbing.jpg",
  },
  {
    sportId: "83",
    sportName: "Volleyball - Sand",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/SandVolleyball.jpg",
  },
  {
    sportId: "84",
    sportName: "Cycling",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Cycling.jpg",
  },
  {
    sportId: "85",
    sportName: "Floor Hockey",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/FloorHockey.jpg",
  },
  {
    sportId: "86",
    sportName: "Lacrosse - Boys",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/BoysLacrosse.jpg",
  },
  {
    sportId: "87",
    sportName: "Lacrosse - Girls",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/GirlsLacrosse.jpg",
  },
  {
    sportId: "88",
    sportName: "Esports",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Esports.jpg",
  },
  {
    sportId: "89",
    sportName: "Bocce",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Bocce.jpg",
  },
  {
    sportId: "90",
    sportName: "Pickleball",
    sportIcon: "https://app.arbitersports-beta.com/images/sports/square/Pickleball.jpg",
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
    date: "2023-10-03",
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
    date: "2023-10-04",
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
    date: "2023-10-05",
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
    date: "2023-10-06",
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
    date: "2023-10-07",
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
    date: "2023-10-08",
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
    date: "2023-10-09",
    time: "14:00",
  },
  {
    home: "New Zealand",
    away: "South Africa",
    homeScore: "28",
    awayScore: "24",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/31/New_Zealand_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/South_Africa_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-10",
    time: "17:00",
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
    date: "2023-10-06",
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
    date: "2023-10-07",
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
    date: "2023-10-08",
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
    date: "2023-10-09",
    time: "14:00",
  },
  {
    home: "New Zealand",
    away: "South Africa",
    homeScore: "28",
    awayScore: "24",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/31/New_Zealand_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/South_Africa_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-10",
    time: "17:00",
  },
  {
    home: "Manchester United",
    away: "Liverpool",
    homeScore: "2",
    awayScore: "2",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC_logo.png",
    sport: "Football",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Premier_League_Logo.png",
    date: "2023-10-12",
    time: "18:30",
  },
  {
    home: "Golden State Warriors",
    away: "Boston Celtics",
    homeScore: "115",
    awayScore: "112",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg",
    sport: "Basketball",
    sportLogo: "https://upload.wikimedia.org/wikipedia/en/0/03/NBA_logo.svg",
    date: "2023-10-13",
    time: "20:00",
  },
  {
    home: "New York Yankees",
    away: "Los Angeles Dodgers",
    homeScore: "4",
    awayScore: "3",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Yankees_Primary_Logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/6/69/Los_Angeles_Dodgers_Logo.svg",
    sport: "Baseball",
    sportLogo: "https://upload.wikimedia.org/wikipedia/en/a/a6/MLB_logo.svg",
    date: "2023-10-14",
    time: "19:00",
  },
  {
    home: "Roger Federer",
    away: "Novak Djokovic",
    homeScore: "6",
    awayScore: "7",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_ball.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_ball.svg",
    sport: "Tennis",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_ball.svg",
    date: "2023-10-15",
    time: "15:00",
  },
  {
    home: "New Zealand All Blacks",
    away: "Australia Wallabies",
    homeScore: "32",
    awayScore: "18",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/31/New_Zealand_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3f/Australia_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-16",
    time: "17:00",
  },
  {
    home: "India",
    away: "Pakistan",
    homeScore: "300",
    awayScore: "280",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3e/India_national_cricket_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Pakistan_cricket_team_logo.svg",
    sport: "Cricket",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4e/ICC_Cricket_World_Cup_logo.svg",
    date: "2023-10-17",
    time: "14:00",
  },
  {
    home: "Real Madrid",
    away: "Atletico Madrid",
    homeScore: "3",
    awayScore: "1",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
    sport: "Football",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/La_Liga_logo.png",
    date: "2023-10-18",
    time: "21:00",
  },
  {
    home: "Los Angeles Lakers",
    away: "Miami Heat",
    homeScore: "102",
    awayScore: "99",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Los_Angeles_Lakers_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg",
    sport: "Basketball",
    sportLogo: "https://upload.wikimedia.org/wikipedia/en/0/03/NBA_logo.svg",
    date: "2023-10-19",
    time: "22:00",
  },
  {
    home: "Chicago Cubs",
    away: "San Francisco Giants",
    homeScore: "5",
    awayScore: "4",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Chicago_Cubs_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/5/58/San_Francisco_Giants_Logo.svg",
    sport: "Baseball",
    sportLogo: "https://upload.wikimedia.org/wikipedia/en/a/a6/MLB_logo.svg",
    date: "2023-10-20",
    time: "19:30",
  },
  {
    home: "Serena Williams",
    away: "Naomi Osaka",
    homeScore: "6",
    awayScore: "4",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_ball.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_ball.svg",
    sport: "Tennis",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tennis_ball.svg",
    date: "2023-10-21",
    time: "16:00",
  },
  {
    home: "England",
    away: "South Africa",
    homeScore: "25",
    awayScore: "20",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/5/55/England_rugby_textlogo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/South_Africa_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-22",
    time: "18:00",
  },
  {
    home: "New Zealand",
    away: "South Africa",
    homeScore: "28",
    awayScore: "24",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/31/New_Zealand_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/South_Africa_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-10",
    time: "17:00",
  },
  {
    home: "England",
    away: "France",
    homeScore: "18",
    awayScore: "22",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/e/e4/England_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4f/France_national_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-11",
    time: "20:00",
  },
  {
    home: "Australia",
    away: "Wales",
    homeScore: "15",
    awayScore: "27",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Australia_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Wales_national_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-12",
    time: "14:30",
  },
  {
    home: "Ireland",
    away: "Scotland",
    homeScore: "32",
    awayScore: "19",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/f/f2/Ireland_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/Scotland_national_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-13",
    time: "16:00",
  },
  {
    home: "Japan",
    away: "Italy",
    homeScore: "21",
    awayScore: "20",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/1/16/Japan_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/1/1f/Italy_national_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-14",
    time: "12:00",
  },
  {
    home: "Argentina",
    away: "Fiji",
    homeScore: "26",
    awayScore: "25",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/2/28/Argentina_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/b/b3/Fiji_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-15",
    time: "19:30",
  },
  {
    home: "Tonga",
    away: "Samoa",
    homeScore: "19",
    awayScore: "21",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/8/83/Tonga_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/e/e6/Samoa_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-16",
    time: "15:00",
  },
  {
    home: "Georgia",
    away: "Uruguay",
    homeScore: "30",
    awayScore: "17",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/e/eb/Georgia_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Uruguay_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-17",
    time: "13:00",
  },
  {
    home: "Namibia",
    away: "Canada",
    homeScore: "16",
    awayScore: "35",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/49/Namibia_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/45/Canada_national_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-18",
    time: "18:45",
  },
  {
    home: "Romania",
    away: "Portugal",
    homeScore: "23",
    awayScore: "20",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4f/Romania_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/6/66/Portugal_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-19",
    time: "11:00",
  },
  {
    home: "New Zealand",
    away: "South Africa",
    homeScore: "28",
    awayScore: "24",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/31/New_Zealand_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/South_Africa_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-10",
    time: "17:00",
  },
  {
    home: "England",
    away: "France",
    homeScore: "18",
    awayScore: "22",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/e/e4/England_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/4/4f/France_national_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-11",
    time: "20:00",
  },
  {
    home: "Australia",
    away: "Wales",
    homeScore: "15",
    awayScore: "27",
    homeLogo:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Australia_rugby_union_team_logo.svg",
    awayLogo:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Wales_national_rugby_union_team_logo.svg",
    sport: "Soccer Boys Varsity",
    sportLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Rugby_World_Cup_Logo_2019.svg",
    date: "2023-10-12",
    time: "14:30",
  },
];
