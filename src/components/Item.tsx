import { useEffect, useRef, useState, useCallback } from "react";
import { widgetImages } from "../lib/data";
import type { OptionsType, ResourceType } from "../types";
import CanvasWhiteImage from "./CanvasWhiteImage";
import CanvasImage from "./CanvasImage";
import { hexToRgba } from "../utils/colorUtils";
import CanvasBlackImage from "./CanvasBlackImage";

interface ItemProps {
  event: ResourceType;
  options: OptionsType;
}

const Item = ({ event, options }: ItemProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const toggleDetails = () => setShowDetails((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(e.target as Node)) {
        setShowDetails(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderTeam = useCallback(
    (team: string, score: string, logo?: string) => (
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2 min-w-0">
          {options.teamLogoFilter == "colored" ? (
            <CanvasImage
              imageUrl={logo || widgetImages.team}
              fallbackImageUrl={widgetImages.team}
              className="w-5 h-5 shrink-0"
            />
          ) : options.teamLogoFilter == "white" ? (
            <CanvasWhiteImage
              imageUrl={logo || widgetImages.team}
              fallbackImageUrl={widgetImages.team}
              className="w-5 h-5 shrink-0"
            />
          ) : options.teamLogoFilter == "black" ? (
            <CanvasBlackImage
              imageUrl={logo || widgetImages.team}
              fallbackImageUrl={widgetImages.team}
              className="w-5 h-5 shrink-0"
            />
          ) : (
            <img
              src={logo || widgetImages.team}
              alt={`${team} logo`}
              className="w-5 h-5 shrink-0 multiply-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = widgetImages.team;
              }}
            />
          )}
          <span
            className="text-[12px] font-medium truncate team-wrapper pr-1"
            style={{ color: options.theme === "dark" ? "white" : "#1F2937" }}
          >
            {team}
          </span>
        </div>
        <span
          className="font-bold shrink-0 text-sm"
          style={{ color: options.theme === "dark" ? "white" : "#1F2937" }}
        >
          {score}
        </span>
      </div>
    ),
    [options.theme, options.teamLogoFilter]
  );
  const formattedDate =
    new Date(event.date).toDateString() === new Date().toDateString()
      ? "TODAY"
      : new Intl.DateTimeFormat("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }).format(new Date(event.date));

  return (
    <div className="carousel-item relative" ref={itemRef}>
      <div className="min-w-[250px]">
        {/* Header */}
        <div
          style={{ backgroundColor: options.secondaryColor }}
          className="truncate flex w-full items-start justify-between py-0 px-4 text-[13px] font-semibold text-white"
        >
          <span className="py-1">{event.sport.toUpperCase()}</span>
          {event.isLive && (
            <img
              src={widgetImages.live}
              alt="Live"
              className="h-[25px] animate-pulse"
            />
          )}
        </div>

        {/* Score Area */}
        <div
          style={{ backgroundColor: options.backgroundColor }}
          className="relative group overflow-hidden"
        >
          {options.location ? (
            <div
              style={{ borderColor: hexToRgba(options.primaryColor, 0.05) }}
              className="match-score p-4 pb-[10px] pt-[11px] flex flex-col items-center justify-between gap-[5px] border-x transition-transform duration-300 group-hover:-translate-y-30"
              onClick={toggleDetails}
            >
              <div
                className={`flex text-xs items-center justify-between w-full ${
                  options.theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <span className="font-semibold">{formattedDate}</span>
                <span>{event.time}</span>
              </div>
              {renderTeam(event.home, event.homeScore, event.homeLogo)}
              {!event.away ? (
                <div className="h-5"></div>
              ) : (
                renderTeam(event.away, event.awayScore, event.awayLogo)
              )}
              <div className="text-xs text-gray-400 w-full border-t-[1px] border-gray-400/20 flex gap-1 pt-[7.5px]">
                <img
                  src={widgetImages.pinLocation}
                  alt="Pin Icon"
                  className="h-4"
                  style={
                    options.theme === "dark" ? { filter: "invert(1)" } : {}
                  }
                />
                <span
                  className={`ml-1 mt-[1px] ${
                    options.theme === "dark" ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {event.location || "Location not available"}
                </span>
              </div>
            </div>
          ) : (
            <div
              style={{ borderColor: hexToRgba(options.primaryColor, 0.05) }}
              className="match-score p-4 pb-3 flex flex-col items-center justify-between gap-[5px] border-x transition-transform duration-300 group-hover:-translate-y-30"
              onClick={toggleDetails}
            >
              {renderTeam(event.home, event.homeScore, event.homeLogo)}
              {renderTeam(event.away, event.awayScore, event.awayLogo)}
              <div
                className={`flex items-center justify-between w-full text-xs ${
                  options.theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <span className="font-semibold">{formattedDate}</span>
                <span>{event.time}</span>
              </div>
            </div>
          )}

          {/* Detail Area */}
          <div
            style={{ backgroundColor: options.backgroundColor }}
            className={`absolute left-0 h-full w-full aspect-square z-10 flex flex-col items-center justify-between transition-all duration-300
              ${
                showDetails ? "top-0 opacity-100" : "top-full opacity-0"
              } group-hover:top-0 group-hover:opacity-100`}
          >
            {["Roster", "Statistics"].map((label) => (
              <a
                href={event?.eventLink ?? `https://arbiterlive.com/School/Calendar/${event.homeSchoolId}/`}
                target="_blank"
                key={label}
                className={`${
                  options.theme === "dark"
                    ? "hover:bg-gray-200/10 text-gray-300 border-y border-gray-500/20"
                    : "border-y border-gray-200 hover:bg-gray-200/30 text-gray-600"
                } w-full h-1/2 flex items-center justify-center font-semibold text-sm cursor-pointer`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
