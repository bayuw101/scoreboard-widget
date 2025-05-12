import { useEffect, useRef, useState, useCallback } from "react";
import { widgetImages } from "../lib/data";
import type { optionsType } from "../types";

interface ItemProps {
  event: {
    home: string;
    away: string;
    homeScore: string | "-";
    awayScore: string | "-";
    homeLogo: string;
    awayLogo: string;
    sport: string;
    sportLogo: string;
    date: string;
    time: string;
    isLive?: boolean;
  };
  options: optionsType;
}

const Item = ({ event, options }: ItemProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  const toggleDetails = () => setShowDetails(prev => !prev);

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
    (team: string, logo: string, score: string) => (
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <img
            src={logo || widgetImages.team}
            alt={`${team} logo`}
            className="w-6 h-6"
            onError={(e) => {
              (e.target as HTMLImageElement).src = widgetImages.team;
            }}
          />
          <span className="text-sm font-medium">{team}</span>
        </div>
        <span className="font-bold">{score}</span>
      </div>
    ),
    []
  );

  const formattedDate = new Intl.DateTimeFormat("en-US", {
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
          className="flex w-full items-start justify-between py-0 px-4 text-sm font-semibold text-white"
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
        <div className="relative group overflow-hidden">
          <div
            className="match-score p-4 flex flex-col items-center justify-between gap-2 border-x border-gray-200 transition-transform duration-300 group-hover:-translate-y-30"
            onClick={toggleDetails}
          >
            {renderTeam(event.home, event.homeLogo, event.homeScore)}
            {renderTeam(event.away, event.awayLogo, event.awayScore)}
            <div className="flex items-center justify-between w-full text-sm text-gray-500">
              <span>{formattedDate}</span>
              <span>{event.time} PM</span>
            </div>
          </div>

          {/* Detail Area */}
          <div
            style={{ backgroundColor: options.backgroundColor }}
            className={`absolute left-0 h-full w-full aspect-square z-10 flex flex-col items-center justify-between transition-all duration-300
              ${showDetails ? "top-0 opacity-100" : "top-full opacity-0"} group-hover:top-0 group-hover:opacity-100`}
          >
            {["Roster", "Statistics"].map((label) => (
              <div
                key={label}
                className="border-y border-gray-200 hover:bg-gray-200/30 text-gray-600 w-full h-1/2 flex items-center justify-center font-semibold text-sm cursor-pointer"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
