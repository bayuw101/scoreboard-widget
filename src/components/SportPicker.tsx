import { useEffect, useState, useMemo } from "react";
import type { sportsType } from "../lib/data";

interface SportPickerProps {
  selectedSport: sportsType | null;
  setSelectedSport: (sport: sportsType | null) => void;
  sports: sportsType[];
  rootWidth: number;
  forSidebar?: boolean;
}

const SportPicker = ({
  selectedSport,
  setSelectedSport,
  sports,
  rootWidth,
  forSidebar = false,
}: SportPickerProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [moreSportSelected, setMoreSportSelected] = useState(false);

  const visibleCount = rootWidth <= 1025 || forSidebar ? 0 : 5;
  const visibleSports = sports.slice(0, visibleCount);
  const moreSports = sports.slice(visibleCount);

  const filteredMoreSports = useMemo(() => {
    return moreSports.filter((sport) =>
      sport.sportName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, moreSports]);

  const handleSportClick = (sport: sportsType) => {
    setShowMore(false);
    const isDeselecting =
      selectedSport?.sportId === sport.sportId || sport.sportId === null;
    setSelectedSport(isDeselecting ? null : sport);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const moreSportsEl = document.querySelector(".more-sports");
      if (moreSportsEl && !moreSportsEl.contains(event.target as Node)) {
        setShowMore(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderSportButton = (sport: sportsType) => (
    <button
      key={sport.sportId}
      className={`text-sm cursor-pointer h-[28px] px-2 py-1 ${
        selectedSport?.sportId === sport.sportId
          ? "bg-white text-black rounded-md"
          : "text-gray-100 hover:text-gray-300"
      }`}
      onClick={() => {
        handleSportClick(sport);
        setMoreSportSelected(false);
      }}
    >
      {sport.sportName}
    </button>
  );

  const renderSportDropdownItem = (sport: sportsType) => (
    <button
      key={sport.sportId}
      onClick={() => {
        handleSportClick(sport);
        setMoreSportSelected(true);
      }}
      className={`block px-4 py-2 text-sm w-full text-left cursor-pointer whitespace-nowrap ${
        selectedSport?.sportId === sport.sportId
          ? "bg-[#E41F26] text-white"
          : "hover:bg-[#e41f2680] hover:text-white"
      }`}
    >
      {sport.sportName}
    </button>
  );

  const renderSportsDropdown = () => (
    <div className={`relative z-10 more-sports ${forSidebar ? "w-full" : ""}`}>
      <button
        className={`text-sm cursor-pointer flex items-center h-[28px] px-2 py-1 ${
          forSidebar ? "w-full" : ""
        } ${
          !selectedSport || moreSportSelected
            ? "bg-white text-black rounded-md"
            : "text-gray-100 hover:text-gray-300"
        } ${showMore ? "rounded-b-none" : ""}`}
        onClick={() => setShowMore((prev) => !prev)}
      >
        <span className="flex items-center justify-between w-full">
          {selectedSport && moreSportSelected
            ? selectedSport.sportName
            : selectedSport && !moreSportSelected
            ? "More Sports"
            : "All Sports"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ml-1 transition-transform ${
              showMore ? "rotate-90" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={showMore ? "M9 5l7 7-7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
        </span>
      </button>

      {showMore && (
        <div
          className={`absolute bg-white text-black rounded-md shadow-md ${
            forSidebar ? "w-full" : "w-auto"
          } min-w-[12rem] ${
            (moreSportSelected || !selectedSport) &&
            (forSidebar ? "rounded-t-none" : "rounded-tl-none")
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            className="block w-full px-4 py-2 text-sm border-b border-gray-300 focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="max-h-[200px] overflow-y-auto">
            <button
              onClick={() => {
                handleSportClick({
                  sportId: null,
                  sportName: "All Sports",
                } as sportsType);
                setMoreSportSelected(true);
              }}
              className="block w-full px-4 py-2 text-sm text-left hover:bg-[#E41F26] hover:text-white"
            >
              All Sports
            </button>
            {filteredMoreSports.map(renderSportDropdownItem)}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`flex items-center h-12 border-l-0 border-[#595180] ${
        forSidebar ? "w-full" : ""
      }`}
    >
      <div
        className={`flex space-x-4 px-4 font-semibold items-center border-[#3c365a] ${
          forSidebar ? "w-full" : ""
        }`}
      >
        {sports.length > 1 ? (
          <>
            {moreSports.length > 0 && renderSportsDropdown()}
            {!forSidebar && visibleSports.map(renderSportButton)}
          </>
        ) : (
          <button className={`text-sm px-2 py-1 text-gray-100 ${forSidebar ?  "w-full justify-start flex border-[1px] border-[#ffffff40] rounded-sm py-1" : "h-[28px]"}`}>
            {sports[0].sportName}
          </button>
        )}
      </div>
    </div>
  );
};

export default SportPicker;
