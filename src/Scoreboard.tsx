import { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  genders,
  levels,
  resources,
  sports,
  widgetImages,
  type sportsType,
} from "./lib/data";
import Item from "./components/Item";
import Header from "./components/Header";
import ItemLoader from "./components/ItemLoader";
import Sidebar from "./components/Sidebar";
import type { optionsType, parametersType } from "./types";
import type { Range } from "react-date-range";
import { hexToRgba } from "./utils/colorUtils";
import { formatDate } from "./utils/dateUtils";

interface ScoreboardProps {
  options: optionsType;
  parameters: parametersType;
  rootWidth: number;
}

const getDefaultDateRange = (): Range[] => {
  const today = new Date();
  return [
    {
      startDate: new Date(today.setDate(today.getDate() - 3)),
      endDate: new Date(today.setDate(today.getDate() + 7)), // 4 days after original today
      key: "selection",
    },
  ];
};

const Scoreboard = ({ options, parameters, rootWidth }: ScoreboardProps) => {
  const [loading, setLoading] = useState(false);
  const [selectedSport, setSelectedSport] = useState<sportsType | null>(null);
  const [dateRange, setDateRange] = useState<Range[]>(getDefaultDateRange());
  var [useSidebar, setUseSidebar] = useState(
    options.header === "left" || options.header === "right"
  );

  const slides = useMemo(() => {
    const breakpoints = [
      { width: 1531, slides: 7 },
      { width: 1281, slides: 5 },
      { width: 1025, slides: 4 },
      { width: 900, slides: 3 },
      { width: 700, slides: 2 },
    ];

    const defaultSlides = 1;
    const headerOffset = useSidebar ? 1 : 0;

    for (const breakpoint of breakpoints) {
      if (rootWidth >= breakpoint.width) {
        setUseSidebar(true);
        return breakpoint.slides - headerOffset;
      }
    }
    setUseSidebar(false);
    return defaultSlides;
  }, [rootWidth, options.header]);


  const header = !useSidebar && slides === 1 ? "top" : options.header;

  const sportIds = useMemo(() => {
    const id = parameters.sportId;
    return id ? (Array.isArray(id) ? id.map(Number) : [Number(id)]) : [];
  }, [parameters.sportId]);

  const filteredSports = useMemo(() => {
    const filtered = sportIds.length
      ? sports.filter((s) => sportIds.includes(Number(s.sportId)))
      : sports;

    if (filtered.length === 1 && (parameters.genderId || parameters.levelId)) {
      const genderName = parameters.genderId
        ? genders.find((g) => Number(g.genderId) === parameters.genderId)
            ?.genderName
        : null;
      const levelName = parameters.levelId
        ? levels.find((l) => Number(l.levelId) === parameters.levelId)
            ?.levelName
        : null;

      filtered[0] = {
        ...filtered[0],
        sportName: [filtered[0].sportName, genderName, levelName]
          .filter(Boolean)
          .join(" "),
      };

      setSelectedSport(filtered[0]);
    }

    return filtered;
  }, [sportIds, parameters.genderId, parameters.levelId]);

  const initialSlideIndex = useMemo(() => {
    const today = formatDate(new Date().toISOString());
    const dates = resources.map((e) => formatDate(e.date));
    let index = resources.findIndex((e) => formatDate(e.date) === today);
  
    if (index === -1) {
      const uniqueDates = Array.from(new Set(dates)).sort((a, b) => b.localeCompare(a));
      const fallbackDate = uniqueDates.find((d) => d < today);
      index = resources.findIndex((e) => formatDate(e.date) === fallbackDate);
    }
  
    return index >= 0 ? index : 0;
  }, [resources]);

  const sliderSettings = useMemo(
    () => ({
      dots: false,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: slides,
      slidesToScroll: 1,
      initialSlide: initialSlideIndex,
      infinite:resources.length > slides,
    }),
    [slides]
  );

  const sliderLoaderSettings = useMemo(
    () => ({ ...sliderSettings, infinite: false }),
    [sliderSettings]
  );

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timeout);
  }, [selectedSport, dateRange]);

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
      />
    </div>
  );

  const renderSlider = () => {
    if (loading) {
      return (
        <div className="mt-[-28px]">
          <Slider {...sliderLoaderSettings}>
            {Array.from({ length: slides }).map((_, index) => (
              <ItemLoader key={index} options={options} />
            ))}
          </Slider>
        </div>
      );
    }

    return (
      <div className="mt-[-28px]">
        {resources.length > 0 ? (
          <Slider {...sliderSettings}>
            {resources.map((event, i) => (
              <Item key={i} event={event} options={options} />
            ))}
          </Slider>
        ) : (
          <div className="flex items-center justify-center h-[144px] pt-[28px]">
            <img
              src={widgetImages.noEvent}
              alt="No Events"
              className="mr-2 h-6 mt-[-3px]"
            />
            <p className="text-gray-500 text-lg font-semibold">
              No events available
            </p>
          </div>
        )}
      </div>
    );
  };

  return header === "top" || header === "bottom" ? (
    <>
      {header === "top" && renderHeader()}
      <div
        style={{ borderTop: `28px solid ${options.secondaryColor}` }}
        className="bg-gray-100 px-8 border-b-2 border-gray-300"
      >
        {renderSlider()}
      </div>
      {header === "bottom" && renderHeader()}
    </>
  ) : (
    <div className="flex w-full h-full">
      {header === "left" && renderSidebar()}
      <div
        className="slider bg-gray-100 border-b-2 border-gray-300 px-8"
        style={{
          width: `${(slides / (slides + 1)) * 100}%`,
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
