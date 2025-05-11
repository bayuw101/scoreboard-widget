import { widgetImages } from "../lib/data";
import type { optionsType } from "../types";

interface CarouselItemProps {
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

const CarouselItem = ({ event, options }: CarouselItemProps) => {
  const renderTeam = (team: string, logo: string, score: string) => (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-2">
        <img
          src={logo || widgetImages.team}
          alt={team}
          className="w-6 h-6"
          onError={(e) => {
            (e.target as HTMLImageElement).src = widgetImages.team;
          }}
        />
        <span className="text-sm font-medium">{team}</span>
      </div>
      <span className="font-bold">{score}</span>
    </div>
  );

  return (
    <div className="carousel-item relative">
      <div className="min-w-[250px]">
        <div style={{
          backgroundColor: options.secondaryColor,
        }} className="flex w-full items-start justify-between py-0 px-4 text-sm font-semibold text-white">
          <span className="py-1">{event.sport.toUpperCase()}</span>
          {event.isLive && (
            <img
              src={widgetImages.live}
              alt="live-icon"
              className="h-[25px] animate-pulse"
            />
          )}
        </div>
        <div className="relative group overflow-hidden">
          <div className="match-score p-4 flex flex-col items-center justify-between gap-2 border-x-[1px] border-gray-200 transition-transform duration-300 group-hover:-translate-y-30">
            {renderTeam(event.home, event.homeLogo, event.homeScore)}
            {renderTeam(event.away, event.awayLogo, event.awayScore)}
            <div className="flex items-center justify-between w-full text-sm text-gray-500">
              <div>
                {new Date(event.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div>{event.time} PM</div>
            </div>
          </div>
          <div className="p-0 flex-col match-detail absolute top-full left-0 h-full w-full aspect-square transition-all duration-300 z-10 flex items-center justify-between group-hover:top-0 group-hover:opacity-100 opacity-0">
            <div className="border-y-[1px] border-gray-200 hover:bg-gray-200/30 text-gray-600 w-full h-1/2 flex items-center justify-center font-semibold text-sm cursor-pointer">
              Roster
            </div>
            <div className="border-y-[1px] border-gray-200 hover:bg-gray-200/30 text-gray-600 w-full h-1/2 flex items-center justify-center font-semibold text-sm cursor-pointer">
              Statistics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
