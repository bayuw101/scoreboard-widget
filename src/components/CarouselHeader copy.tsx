import { useEffect, useState } from "react";
import { DateRangePicker, type Range, type RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main CSS file
import "react-date-range/dist/theme/default.css"; // Theme CSS file
import { widgetImages, type sportsType } from "../lib/data";
import type { optionsType } from "../types";
import { hexToRgba } from "../utils/colorUtils";

interface CarouselHeaderProps {
  sports: sportsType[];
  rootWidth: number;
  options: optionsType;
  setDateRange: (dateRange: Range[]) => void;
  dateRange: Range[];
  selectedSport: sportsType | null;
  setSelectedSport: (sport: sportsType | null) => void;
}

const CarouselHeader = ({
  sports,
  rootWidth,
  options,
  setDateRange,
  dateRange,
  selectedSport,
  setSelectedSport,
}: CarouselHeaderProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleSportClick = (sport: sportsType) => {
    if(selectedSport && selectedSport.sportId === sport.sportId) {
      setSelectedSport(null);
      return;
    }
    setSelectedSport(sport);
  };
  const handleDateChange = (ranges:RangeKeyDict) => {
    return setDateRange([
      {
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
        key: ranges.selection.key,
      },
    ]);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const moreSportsElement = document.querySelector(".more-sports");
      const calendarElement = document.querySelector(".select-date");
      if (
        moreSportsElement &&
        !moreSportsElement.contains(event.target as Node)
      ) {
        setShowMore(false);
      }

      if (calendarElement && !calendarElement.contains(event.target as Node)) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-12 items-center justify-between z-50">
      <div
        style={{
          backgroundColor: hexToRgba(options.primaryColor),
        }}
        className={`flex items-center justify-between h-12`}
      >
        <div className="flex items-center justify-between">
          <div
            style={{
              borderRightColor: hexToRgba(options.thirdColor, 0.7),
            }}
            className="border-r-8 bg-white hidden md:block"
          >
            <div
              style={{
                borderRightColor: hexToRgba("#FFFFFF", 0.1),
                backgroundColor: hexToRgba(options.thirdColor),
              }}
              className={`h-12 border-r-[12px] p-1 px-3 pr-5 flex items-center justify-center`}
            >
              {options.arbiterLogo ? (
                <img
                  src="https://assets-api.rschooltoday.com/widget/Arbiter-Logo-White.png"
                  alt="Logo"
                  className="h-5 w-auto"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = widgetImages.favicon;
                  }}
                />
              ) : (
                <h2 className="text-white font-extrabold tracking-wider ml-1">
                  SCOREBOARD
                </h2>
              )}
            </div>
          </div>
          <div className="border-l-0 border-[#595180]">
            <div className="flex space-x-4 border-[#3c365a] border-l-0 h-12 px-4 font-semibold">
              <button className="text-sm text-gray-100 hover:text-gray-300 cursor-pointer">
                All Sports
              </button>
              {sports.slice(0, rootWidth <= 1025 ? 0 : 5).map((sport) => (
                <button
                  key={sport.sportId}
                  className={`text-sm cursor-pointer px-2 py-1 ${
                  selectedSport?.sportId === sport.sportId
                    ? "bg-white text-black rounded-md"
                    : "text-gray-100 hover:text-gray-300"
                  }`}
                  onClick={() => handleSportClick(sport)}
                >
                  {sport.sportName}
                </button>
              ))}
              {sports.length > (rootWidth <= 1025 ? 0 : 5) && (
                <div className="relative z-10 more-sports">
                  <button
                    className="text-sm text-gray-100 hover:text-gray-300 cursor-pointer h-full flex items-center"
                    onClick={() => setShowMore((prev) => !prev)}
                  >
                    More
                  </button>
                  {showMore && (
                    <div className="absolute  text-black  bg-white rounded-md shadow-lg w-auto min-w-[12rem]">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="block w-full px-4 py-2 text-sm border-b border-gray-300 focus:outline-none"
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <div className="max-h-[200px] overflow-y-auto overflow-x-hidden">
                        {sports
                          .slice(rootWidth <= 1025 ? 0 : 5)
                          .filter((sport) =>
                            sport.sportName
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          )
                          .map((sport) => (
                            <button
                              key={sport.sportId}
                              onClick={() => handleSportClick(sport)}
                              className="block px-4 py-2 text-sm hover:bg-[#E41F26] hover:text-white w-full text-left cursor-pointer whitespace-nowrap"
                            >
                              {sport.sportName}
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-4 relative select-date flex items-center justify-center gap-2">
          <span className="text-gray-100 text-xs font-semibold mt-[2px] hidden md:block">
            {`${dateRange[0].startDate?.toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })} - ${dateRange[0].endDate?.toLocaleDateString("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}`}
          </span>
          <button
            className="text-gray-100 hover:text-gray-300 cursor-pointer flex items-center"
            onClick={() => setShowDatePicker((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 2.25v1.5m7.5-1.5v1.5M3.75 9h16.5M4.5 5.25h15a2.25 2.25 0 012.25 2.25v11.25a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 18.75V7.5a2.25 2.25 0 012.25-2.25z"
              />
            </svg>
          </button>
          {showDatePicker && (
            <div className="absolute top-full right-0 mt-2 z-50 shadow-lg bg-white rounded-md p-4">
              <DateRangePicker
                ranges={dateRange}
                onChange={handleDateChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselHeader;
