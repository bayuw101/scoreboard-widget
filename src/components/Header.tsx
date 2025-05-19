import { useMemo } from "react";
import type { Range } from "react-date-range";
import { widgetImages } from "../lib/data";
import type { OptionsType, ParameterType, SportType } from "../types";
import { hexToRgba } from "../utils/colorUtils";
import DatePicker from "./DatePicker";
import SportPicker from "./SportPicker";

interface HeaderProps {
  sports: SportType[];
  rootWidth: number;
  options: OptionsType;
  setDateRange: (dateRange: Range[]) => void;
  dateRange: Range[];
  selectedSport: SportType | null;
  setSelectedSport: (sport: SportType | null) => void;
  parameters?: ParameterType;
  eventsLoading?: boolean;
}

export type { HeaderProps };

const Header = ({
  sports,
  rootWidth,
  options,
  setDateRange,
  dateRange,
  selectedSport,
  setSelectedSport,
  eventsLoading,
}: HeaderProps) => {
  const isWide = rootWidth >= 900;

  const logoSrc = useMemo(() => {
    if (options.arbiterLogo && isWide && options.arbiterLogo === "full") {
      return widgetImages.arbiterLogo;
    }
    return widgetImages.arbiterMobileLogo;
  }, [options.arbiterLogo, isWide]);

  const outerStyle = useMemo(
    () => ({
      borderRightColor: hexToRgba(options.thirdColor, 0.7),
    }),
    [options.thirdColor]
  );

  const innerStyle = useMemo(
    () => ({
      backgroundColor: hexToRgba(options.thirdColor),
      borderRightColor: hexToRgba("#FFFFFF", 0.1),
    }),
    [options.thirdColor]
  );

  const renderLogoOrTitle = () => {
    if (!isWide && !options.arbiterLogo) return null;

    return (
      <div className="border-r-8 bg-white" style={outerStyle}>
        <div
          className="h-12 border-r-[12px] px-3 pr-5 flex items-center justify-center"
          style={innerStyle}
        >
          {options.arbiterLogo ? (
            <img
              src={logoSrc}
              alt="Logo"
              className="h-5 w-auto"
              loading="lazy"
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
    );
  };

  return (
    <div className="h-12 items-center justify-between z-50">
      <div
        className="flex items-center justify-between h-12"
        style={{ backgroundColor: hexToRgba(options.theme === "dark" && options.header === "bottom" ? options.secondaryColor : options.primaryColor) }}
      >
        {/* Left Section: Logo + Sport Picker */}
        <div className="flex items-center">
          {renderLogoOrTitle()}
          <SportPicker
            selectedSport={selectedSport}
            setSelectedSport={setSelectedSport}
            sports={sports}
            rootWidth={rootWidth}
            eventsLoading={eventsLoading}
            options={options}
          />
        </div>

        {/* Right Section: Date Picker */}
        {eventsLoading ? (
          <div className="rounded-md flex items-center justify-center mr-2 h-7 w-[100px] md:w-[200px] bg-gray-300 animate-pulse"></div>
        ) : (
          <div className="pr-3">
            <DatePicker
              setDateRange={setDateRange}
              dateRange={dateRange}
              options={options}
              rootWidth={rootWidth}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
