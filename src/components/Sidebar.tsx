import type { Range } from "react-date-range";
import { widgetImages } from "../lib/data";
import type { OptionsType, ParameterType, SportType } from "../types";
import { hexToRgba } from "../utils/colorUtils";
import DatePicker from "./DatePicker";
import SportPicker from "./SportPicker";

interface SidebarProps {
  sports: SportType[];
  rootWidth: number;
  options: OptionsType;
  setDateRange: (dateRange: Range[]) => void;
  dateRange: Range[];
  selectedSport: SportType | null;
  setSelectedSport: (sport: SportType | null) => void;
  parameters?: ParameterType;
  eventsLoading?: boolean;
  slides: number;
}

export type { SidebarProps };

const Sidebar = ({
  sports,
  rootWidth,
  options,
  setDateRange,
  dateRange,
  selectedSport,
  setSelectedSport,
  eventsLoading,
  slides,
}: SidebarProps) => {
  const secondaryColor = hexToRgba(options.secondaryColor);
  const lightWhiteBorder = secondaryColor;
  const secondaryBorder = secondaryColor;
  const primaryColor = hexToRgba(options.primaryColor, 0.85);

  const renderSidebar = () => (
    <div className="h-12 z-50">
      {/* Top Bar */}
      <div className="border-r-8" style={{ borderRightColor: secondaryBorder }}>
        <div
          className="border-r-8 h-[28px] w-full flex items-center justify-center text-xs font-semibold text-white"
          style={{
            backgroundColor: secondaryColor,
            borderRightColor: lightWhiteBorder,
          }}
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
      >
        {/* Sport Picker */}
        <div className="flex items-center justify-between w-full" style={{
          paddingTop: !options.location ? "4px" : "15px",
        }}>
          {eventsLoading ? (
            <div className="flex items-center h-12 w-full">
              <div className="flex space-x-4 mx-4 rounded-md bg-gray-300 h-7 animate-pulse items-center w-full">

              </div>
            </div>
          ) : (
            <SportPicker
              selectedSport={selectedSport}
              setSelectedSport={setSelectedSport}
              sports={sports}
              rootWidth={rootWidth}
              forSidebar
              eventsLoading={eventsLoading}
              options={options}
            />
          )}
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

          {eventsLoading ? (
            <div  style={{
              margin: options.location ? "8px" : "3.5px",
              marginRight: options.location ? "-4px" : "0px",
            }} className="rounded-md flex items-center justify-center h-7 w-[100px] md:w-[160px] bg-gray-300 animate-pulse"></div>
          ) : (
            <DatePicker
              setDateRange={setDateRange}
              dateRange={dateRange}
              options={options}
              showPosition={options.header === "left" ? "right" : "left"}
              rootWidth={rootWidth}
            />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="sidebar"
      style={{
        width: `${(1 / (slides + 1)) * 100}%`,
        minWidth: "100px",
        backgroundColor: primaryColor,
      }}
    >
      {renderSidebar()}
    </div>
  );
};

export default Sidebar;
