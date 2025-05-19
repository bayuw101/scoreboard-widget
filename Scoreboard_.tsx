import { useEffect, useMemo, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { genders, levels, sports, widgetImages } from "./lib/data";
import Item from "./components/Item";
import Header from "./components/Header";
import ItemLoader from "./components/ItemLoader";
import Sidebar from "./components/Sidebar";
import type {
  OptionsType,
  ParameterType,
  ResourceType,
  SportType,
} from "./types";
import type { Range } from "react-date-range";
import { hexToRgba } from "./utils/colorUtils";
import { formatDate } from "./utils/dateUtils";
import { useEvents } from "./hooks/useGetEvents.ts";

import { showErrorToast } from "./utils/toastUtils.ts";

interface ScoreboardProps {
  options: OptionsType;
  token: string;
  parameters: ParameterType;
  rootWidth: number;
  rootHeight?: number;
  itemHeight: number;
}

const DEFAULT_DATE_RANGE = (): Range[] => {
  const today = new Date();
  return [
    {
      startDate: new Date(today.setDate(today.getDate() - 3)),
      endDate: new Date(today.setDate(today.getDate() + 7)),
      key: "selection",
    },
  ];
};

const getInitialSlideIndex = (resources: ResourceType[]): number => {
  if (!resources.length) return 0;
  const todayStr = formatDate(new Date().toISOString());

  const todayMatch = resources.findIndex(
    (event) => formatDate(event.date) === todayStr
  );
  if (todayMatch >= 0) return todayMatch;

  const pastDates = resources
    .map((event, index) => ({ date: formatDate(event.date), index }))
    .filter((d) => d.date < todayStr)
    .sort((a, b) => b.date.localeCompare(a.date));

  return pastDates.length ? pastDates[0].index : 0;
};

const Scoreboard = ({
  options,
  token,
  parameters,
  rootWidth,
  rootHeight,
  itemHeight,
}: ScoreboardProps) => {
  const [loading, setLoading] = useState(false);
  const [selectedSport, setSelectedSport] = useState<SportType | null>(null);
  const [dateRange, setDateRange] = useState<Range[]>(DEFAULT_DATE_RANGE);
  const { events, eventsLoading } = useEvents(token);
  const prevResourcesLength = useRef(0);
  const sliderRef = useRef<Slider | null>(null);

  // Memoized values

  const sportIds = useMemo(() => {
    const id = parameters.sportId;
    return id ? (Array.isArray(id) ? id.map(Number) : [Number(id)]) : [];
  }, [parameters.sportId]);

  const filteredSports = useMemo(() => {
    if (!sportIds.length && Array.isArray(events) && events.length) {
      const uniqueSportIds = Array.from(
        new Set(events.map((e) => +e.genericSportId))
      );
      return sports.filter((s) => uniqueSportIds.includes(+s.sportId));
    }

    const filtered = sportIds.length
      ? sports.filter((s) => sportIds.includes(+s.sportId))
      : sports;
    
    if (filtered.length === 0) {
      showErrorToast(`Arbiter Scoreboard : Invalid sportId`);
      return;
    }

    if (filtered.length === 1 && (parameters.genderId || parameters.levelId)) {
      const selectedGender = genders.find((g) => +g.genderId === parameters.genderId);
      const gender = parameters.genderId
        ? selectedGender?.genderName
        : null;
      if (parameters.genderId && !selectedGender) {
        showErrorToast(`Arbiter Scoreboard : Invalid genderId`);
        return;
      }

      const level = parameters.levelId
        ? levels.find((l) => +l.levelId === parameters.levelId)?.levelName
        : null;
      if (parameters.levelId && !level) {
        showErrorToast(`Arbiter Scoreboard : Invalid levelId`);
        return;
      }

      const sport = filtered[0];

      filtered[0] = {
        ...filtered[0],
        sportName: [sport.sportName, gender, level].filter(Boolean).join(" "),
        sportIcon: sport.sportIcon,
      };
      setSelectedSport(filtered[0]);
    }

    return filtered;
  }, [sportIds, parameters.genderId, parameters.levelId, events]);

  const resources = useMemo(() => {
    if (!events?.length) return [];

    setLoading(true);

    const startDate = dateRange[0]?.startDate;
    const endDate = dateRange[0]?.endDate;

    if (!startDate || !endDate) return [];

    const start = new Date(startDate.setHours(0, 0, 0, 0));
    const end = new Date(endDate.setHours(23, 59, 59, 999));

    return events
      .filter((event) => {
        const eventDate = new Date(event.fromDate);
        const home = event.teams.find((t) => t.isHome);
        const away = event.teams.find((t) => !t.isHome);
        const matchesSport =
          !selectedSport ||
          !selectedSport.sportId ||
          +event.genericSportId === +selectedSport.sportId;
        const matchesSportId = sportIds.length
          ? sportIds.includes(+event.genericSportId)
          : true;

        return (
          home &&
          away &&
          eventDate >= start &&
          eventDate <= end &&
          matchesSport &&
          matchesSportId
        );
      })
      .sort(
        (a, b) =>
          new Date(a.fromDate).getTime() - new Date(b.fromDate).getTime()
      )
      .map((event) => {
        const home = event.teams.find((t) => t.isHome)!;
        const away = event.teams.find((t) => !t.isHome)!;

        const sportName = [
          sports.find((s) => +s.sportId === +event.genericSportId)?.sportName,
          genders.find((g) => +g.genderId === +event.hsgenderId)?.genderName,
          levels.find((l) => +l.levelId === +event.hslevelId)?.levelName,
        ]
          .filter(Boolean)
          .join(" ")
          .replace(/(girls|boys) \1/gi, "$1");

        const eventDate = new Date(event.fromDate);

        return {
          home: home.teamName,
          away: away.teamName,
          homeScore: (home.score === 0 ? "0" : home.score || "-") as string,
          awayScore: (away.score === 0 ? "0" : away.score || "-") as string,
          homeLogo: "https://assets.arbitersports.com/logos/organization/28776",
          awayLogo: "https://assets.arbitersports.com/logos/organization/28776",
          sport: sportName,
          sportLogo: "",
          location: event.siteName || "TBD",
          date: eventDate.toLocaleDateString(),
          time: eventDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          homeSchoolId: home.entityId,
        };
      });
  }, [events, dateRange, selectedSport]);

  const useSidebar = options.header === "left" || options.header === "right";
  const slides = useMemo(() => {
    if (options.vertical) {
      return Math.floor((rootHeight || 0) / itemHeight);
    }

    const breakpoints = [
      { width: 1531, slides: 6 },
      { width: 1281, slides: 5 },
      { width: 1025, slides: 4 },
      { width: 900, slides: 3 },
      { width: 700, slides: 2 },
    ];

    const headerOffset = useSidebar ? 1 : 0;
    for (const bp of breakpoints) {
      if (rootWidth >= bp.width) return bp.slides - headerOffset;
    }
    return 1;
  }, [rootWidth, useSidebar, options.vertical, rootHeight, itemHeight]);

  const header = useSidebar && slides === 1 ? "top" : options.header;

  const initialSlideIndex = useMemo(
    () => getInitialSlideIndex(resources),
    [resources, events]
  );

  const sliderSettings = useMemo(() => {
    const shouldInfinite =
      resources.length > slides &&
      resources.length > prevResourcesLength.current;
    prevResourcesLength.current = resources.length;

    return {
      dots: false,
      speed: 1000,
      autoplay: true,
      vertical: options.vertical,
      autoplaySpeed: 3000,
      slidesToShow: slides,
      slidesToScroll: 1,
      infinite: shouldInfinite,
      arrows: !options.vertical,
    };
  }, [slides, initialSlideIndex, resources.length, events]);

  const sliderLoaderSettings = useMemo(
    () => ({ ...sliderSettings, infinite: false }),
    [sliderSettings]
  );

  useEffect(() => {
    if (!loading && !eventsLoading && sliderRef.current) {
      sliderRef.current.slickGoTo(initialSlideIndex, true);
    }
  }, [initialSlideIndex, loading, eventsLoading]);

  useEffect(() => {
    setLoading(false);
  }, [resources]);

  const renderHeader = () => (
    <Header
      sports={filteredSports}
      rootWidth={rootWidth}
      options={options}
      setSelectedSport={setSelectedSport}
      selectedSport={selectedSport}
      dateRange={dateRange}
      setDateRange={setDateRange}
      parameters={parameters}
      eventsLoading={eventsLoading}
    />
  );

  const renderSidebar = () => (
    <div
      className="sidebar"
      style={{
        width: `${(1 / (slides + 1)) * 100}%`,
        minWidth: "100px",
        backgroundColor: hexToRgba(options.primaryColor),
      }}
    >
      <Sidebar
        sports={filteredSports}
        rootWidth={rootWidth}
        options={options}
        setDateRange={setDateRange}
        dateRange={dateRange}
        selectedSport={selectedSport}
        setSelectedSport={setSelectedSport}
        parameters={parameters}
        eventsLoading={eventsLoading}
      />
    </div>
  );

  const renderSlider = () => {
    if (loading || eventsLoading) {
      return (
        <div className="mt-[-28px]">
          <Slider {...sliderLoaderSettings}>
            {Array.from({ length: slides }).map((_, index) => (
              <ItemLoader key={`loader-${index}`} options={options} />
            ))}
          </Slider>
        </div>
      );
    }

    return (
      <div className="mt-[-28px]">
        {resources.length > 0 ? (
          <Slider ref={sliderRef} {...sliderSettings}>
            {resources.map((event) => (
              <Item
                key={`${event.home}-${event.away}-${event.date}`}
                event={event}
                options={options}
              />
            ))}
          </Slider>
        ) : (
          <div className="flex items-center justify-center h-[144px] pt-[28px]">
            <img
              src={widgetImages.noEvent}
              alt="No Events"
              className="mr-2 h-6 mt-[-3px]"
              loading="lazy"
            />
            <p className="text-gray-500 text-lg font-semibold">
              No events available
            </p>
          </div>
        )}
      </div>
    );
  };

  if (header === "top" || header === "bottom") {
    return (
      <>
        {header === "top" && renderHeader()}
        <div
          style={{
            borderTop: `28px solid ${
              options.vertical
                ? options.backgroundColor
                : options.secondaryColor
            }`,
          }}
          className={`bg-gray-100 ${
            options.vertical || "px-8"
          } border-b-2 border-gray-300`}
        >
          {renderSlider()}
        </div>
        {header === "bottom" && renderHeader()}
      </>
    );
  }

  return (
    <div className="flex w-full" style={{ height: itemHeight }}>
      {header === "left" && renderSidebar()}
      <div
        className="slider bg-gray-100 border-b-2 border-gray-300 px-8"
        style={{
          width: `${useSidebar ? (slides / (slides + 1)) * 100 : 100}%`,
          height: itemHeight,
          borderTop: `28px solid ${options.secondaryColor}`,
        }}
      >
        {renderSlider()}
      </div>
      {header === "right" && renderSidebar()}
    </div>
  );
};

export default Scoreboard;
