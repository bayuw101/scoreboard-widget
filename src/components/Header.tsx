import { useMemo } from "react";
import type { Range } from "react-date-range";
import { widgetImages, type sportsType } from "../lib/data";
import type { optionsType, parametersType } from "../types";
import { hexToRgba } from "../utils/colorUtils";
import DatePicker from "./DatePicker";
import SportPicker from "./SportPicker";

interface HeaderProps {
  sports: sportsType[];
  rootWidth: number;
  options: optionsType;
  setDateRange: (dateRange: Range[]) => void;
  dateRange: Range[];
  selectedSport: sportsType | null;
  setSelectedSport: (sport: sportsType | null) => void;
  parameters?: parametersType;
}

const Header = ({
  sports,
  rootWidth,
  options,
  setDateRange,
  dateRange,
  selectedSport,
  setSelectedSport,
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
        style={{ backgroundColor: hexToRgba(options.primaryColor) }}
      >
        {/* Left Section: Logo + Sport Picker */}
        <div className="flex items-center">
          {renderLogoOrTitle()}
          <SportPicker
            selectedSport={selectedSport}
            setSelectedSport={setSelectedSport}
            sports={sports}
            rootWidth={rootWidth}
          />
        </div>

        {/* Right Section: Date Picker */}
        <DatePicker
          setDateRange={setDateRange}
          dateRange={dateRange}
          options={options}
        />
      </div>
    </div>
  );
};

export default Header;
