import type { Range } from "react-date-range";
import { widgetImages, type sportsType } from "../lib/data";
import type { optionsType, parametersType } from "../types";
import { hexToRgba } from "../utils/colorUtils";
import DatePicker from "./DatePicker";
import SportPicker from "./SportPicker";

interface SidebarProps {
  sports: sportsType[];
  rootWidth: number;
  options: optionsType;
  setDateRange: (dateRange: Range[]) => void;
  dateRange: Range[];
  selectedSport: sportsType | null;
  setSelectedSport: (sport: sportsType | null) => void;
  parameters?: parametersType;
}

const Sidebar = ({
  sports,
  rootWidth,
  options,
  setDateRange,
  dateRange,
  selectedSport,
  setSelectedSport,
}: SidebarProps) => {
  const secondaryColor = hexToRgba(options.secondaryColor);
  const secondaryBorder = hexToRgba(options.secondaryColor, 0.9);
  const lightWhiteBorder = hexToRgba("#FFFFFF", 0.1);
  const primaryColor = hexToRgba(options.primaryColor);

  return (
    <div className="h-12 z-50">
      {/* Top Bar */}
      <div className="border-r-8" style={{ borderRightColor: secondaryBorder }}>
        <div
          className="border-r-8 h-[28px] w-full flex items-center justify-center text-xs font-semibold text-white"
          style={{ backgroundColor: secondaryColor, borderRightColor: lightWhiteBorder }}
        >
          <span className="text-sm tracking-widest flex items-center mt-[2px]">
            SCOREBOARD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-4 h-4 ml-1 mt-[-2px]"
            >
              <path d="M8 4l8 8-8 8V4z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="flex flex-col items-center justify-between h-12"
        style={{ backgroundColor: primaryColor }}
      >
        {/* Sport Picker */}
        <div className="flex items-center justify-between w-full pt-2">
          <SportPicker
            selectedSport={selectedSport}
            setSelectedSport={setSelectedSport}
            sports={sports}
            rootWidth={rootWidth}
            forSidebar
          />
        </div>

        {/* Logo & Date Picker */}
        <div className="flex items-center justify-between w-full px-5">
          <div className="border-r border-gray-400 h-6 pr-5">
            <img
              src={widgetImages.arbiterMobileLogo}
              alt="Arbiter Logo"
              className="h-6"
            />
          </div>
          <DatePicker
            setDateRange={setDateRange}
            dateRange={dateRange}
            options={options}
            showPosition={options.header === "left" ? "right" : "left"}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
