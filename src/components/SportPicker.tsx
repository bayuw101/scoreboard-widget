import { useEffect, useState, useMemo, useRef } from "react";
import type { OptionsType, SportType } from "../types";
import { widgetImages } from "../lib/data";

interface SportPickerProps {
  selectedSport: SportType | null;
  setSelectedSport: (sport: SportType | null) => void;
  sports: SportType[];
  rootWidth: number;
  forSidebar?: boolean;
  eventsLoading?: boolean;
  options:OptionsType
}

const SportPicker = ({
  selectedSport,
  setSelectedSport,
  sports,
  rootWidth,
  forSidebar = false,
  eventsLoading,
  options
}: SportPickerProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [moreSportSelected, setMoreSportSelected] = useState(false);

  const visibleCount = rootWidth <= 1025 || forSidebar ? 0 : 5;
  const visibleSports = sports.slice(0, visibleCount);
  const moreSports = sports.slice(visibleCount);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const filteredMoreSports = useMemo(() => {
    return moreSports.filter((sport) =>
      sport.sportName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, moreSports]);

  const handleSportClick = (sport: SportType) => {
    setShowMore(false);
    const isDeselecting =
      selectedSport?.sportId === sport.sportId || sport.sportId === null;
    setSelectedSport(isDeselecting ? null : sport);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowMore(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderSportButton = (sport: SportType) => {
    const isActive = selectedSport?.sportId === sport.sportId;

    return eventsLoading ? (
      <div
        key={sport.sportId}
        className="animate-pulse bg-gray-300 h-[28px] px-2 py-1 rounded-md w-[110px]"
      ></div>
    ) : (
      <button
        key={sport.sportId}
        className={`text-sm cursor-pointer h-[28px] px-2 py-1 flex items-center gap-1 ${
          isActive
            ? "bg-white text-black rounded-md"
            : "text-gray-100 hover:text-gray-300 "
        }`}
        onClick={() => {
          handleSportClick(sport);
          setMoreSportSelected(false);
        }}
      >
        <div className="flex items-center gap-2">
          {sport.sportIcon ? (
            <img
              src={sport.sportIcon}
              alt={sport.sportName}
              className={`w-4 h-4 object-contain filter ${
                !isActive && "invert"
              }`}
            />
          ) : (
            <div
              className={`w-4 h-4 border-3 border-black rounded-full ${
                !isActive && "invert"
              }`}
            ></div>
          )}
          <span>{sport.sportName}</span>
        </div>
        {isActive && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mt-[-1px] text-gray-500 hover:text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent button click
              setSelectedSport(null); // Clear selection
            }}
          >
            <path
              fillRule="evenodd"
              d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10l-4.95-4.95a1 1 0 011.414-1.414L10 8.586z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    );
  };

  const renderSportDropdownItem = (sport: SportType) =>
    eventsLoading ? (
      <div></div>
    ) : (
      <button
        key={sport.sportId}
        onClick={() => {
          handleSportClick(sport);
          setMoreSportSelected(true);
        }}
        className={`block px-4 py-2 text-sm w-full text-left cursor-pointer whitespace-nowrap z-10 ${
          selectedSport?.sportId === sport.sportId
            ? "bg-[#E41F26] text-white"
            : "hover:bg-[#e41f2680] hover:text-white"
        }`}
      >
        <div className="flex items-center gap-2">
          {sport.sportIcon ? (
            <img
              src={sport.sportIcon}
              alt={sport.sportName}
              className={`w-4 h-4 object-contain filter ${
                selectedSport?.sportId === sport.sportId && "invert"
              }`}
            />
          ) : (
            <div
              className={`w-4 h-4 border-3 border-black rounded-full ${
                selectedSport?.sportId === sport.sportId && "invert"
              }`}
            ></div>
          )}
          <span>{sport.sportName}</span>
        </div>
      </button>
    );

  const renderSportsDropdown = () => {
    return (<div
      ref={dropdownRef}
      className={`relative more-sports ${forSidebar ? "w-full" : ""}`}
    >
      <button
        className={`text-sm cursor-pointer flex items-center h-[28px] px-2 py-1 ${
          forSidebar ? "w-full" : ""
        } ${
          !selectedSport || moreSportSelected
            ? (forSidebar ? "bg-gray-200/10 text-white" : "bg-white text-black")+" rounded-md"
            : "text-gray-100 hover:text-gray-300"
        }`}
        onClick={() => setShowMore((prev) => !prev)}
      >
        <span className="flex items-center justify-between w-full">
          {selectedSport && moreSportSelected ? (
            <div className="flex items-center gap-2">
              {selectedSport.sportIcon && (
                <img
                  src={selectedSport.sportIcon}
                  alt={selectedSport.sportName}
                  className={`w-4 h-4 object-contain filter ${
                    !(!selectedSport || moreSportSelected) || (forSidebar) && "invert"
                  }`}
                />
              )}
              <span>{selectedSport.sportName}</span>
            </div>
          ) : selectedSport && !moreSportSelected ? (
            <div className="flex items-center gap-2">
              {widgetImages.more && (
                <img
                  src={widgetImages.more}
                  alt={widgetImages.more}
                  className={`w-4 h-4 object-contain filter ${
                    (!(!selectedSport || moreSportSelected) || options.theme === "dark") && "invert"
                  }`}
                />
              )}
              <span>More Sports</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {widgetImages.sports && (
                <img
                  src={widgetImages.sports}
                  alt={widgetImages.sports}
                  className={`w-4 h-4 object-contain filter ${(forSidebar) && "invert"}`}
                />
              )}
              <span>All Sports</span>
            </div>
          )}
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
          className={`absolute bg-white text-black rounded-md shadow-md z-20 ${
            forSidebar ? "w-full mt-2 rounded-md" : "w-auto"
          } min-w-[12rem]`}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            className="block w-full px-4 py-2 text-sm border-b border-gray-300 focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="max-h-[200px] overflow-y-auto">
            <button
              onClick={() => {
                handleSportClick({
                  sportId: null,
                  sportName: "All Sports",
                  sportIcon: widgetImages.sports,
                } as SportType);
                setMoreSportSelected(true);
              }}
              className=" z-10 block w-full px-4 py-2 text-sm text-left hover:bg-[#E41F26] hover:text-white"
            >
              <div className="flex items-center gap-2">
                {widgetImages.sports && (
                  <img
                    src={widgetImages.sports}
                    alt={widgetImages.sports}
                    className="w-4 h-4 object-contain"
                  />
                )}
                <span>All Sports</span>
              </div>
            </button>
            {filteredMoreSports.map(renderSportDropdownItem)}
          </div>
        </div>
      )}
    </div>
  )};

  return (
    <div
      className={`flex items-center h-12 border-l-0 border-[#595180] ${
        forSidebar ? "w-full" : ""
      }`}
    >
      <div
        className={`flex space-x-1 px-2.5 font-semibold items-center border-[#3c365a] ${
          forSidebar ? "w-full" : ""
        }`}
      >
        {sports.length > 1 ? (
          <>
            {moreSports.length > 0 &&
              (eventsLoading ? (
                <div className="animate-pulse bg-gray-300 h-[28px] px-2 py-1 rounded-md w-[100px]"></div>
              ) : (
                renderSportsDropdown()
              ))}
            {!forSidebar && visibleSports.map(renderSportButton)}
          </>
        ) : (
          <div
            className={`flex items-center gap-2 text-sm px-2 py-1 text-gray-100 ${
              forSidebar
                ? "w-full justify-start flex border-[1px] border-[#ffffff40] rounded-sm py-1"
                : "h-[28px]"
            }`}
          >
            <img
              src={sports[0].sportIcon}
              alt={sports[0].sportName}
              className="w-4 h-4 object-contain filter invert"
            />
            <span className="mt-[2px]">{sports[0].sportName}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportPicker;
