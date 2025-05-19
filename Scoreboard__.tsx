import { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { widgetImages } from "./lib/data";

import Item from "./components/Item";
import ItemLoader from "./components/ItemLoader";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import { useEvents } from "./hooks/useGetEvents";
import { hexToRgba } from "./utils/colorUtils";

import { DEFAULT_DATE_RANGE } from "./utils/dateRangeUtils";
import {
  useSportFilters,
  useFilteredResources,
  useSlideCount,
  useSliderSettings,
} from "./utils/hooks";

import type { ScoreboardProps } from "./types";
import { getInitialSlideIndex } from "./utils/sliderUtils";

const Scoreboard = ({
  options,
  token,
  parameters,
  rootWidth,
  rootHeight,
  itemHeight,
}: ScoreboardProps) => {
  const [loading, setLoading] = useState(false);
  const [dateRange, setDateRange] = useState(DEFAULT_DATE_RANGE);
  const [selectedSport, setSelectedSport] = useState(null);
  const sliderRef = useRef<Slider | null>(null);
  const prevResourcesLength = useRef(0);

  const { events, eventsLoading } = useEvents(token);
  const sportIds = useMemo(() => {
    const id = parameters.sportId;
    return id ? (Array.isArray(id) ? id.map(Number) : [Number(id)]) : [];
  }, [parameters.sportId]);

  const filteredSports = useSportFilters({
    events,
    sportIds,
    parameters,
    setSelectedSport,
  });

  const resources = useFilteredResources({
    events,
    dateRange,
    selectedSport,
    sportIds,
    setLoading,
  });

  const slides = useSlideCount({
    rootWidth,
    rootHeight,
    itemHeight,
    vertical: options.vertical,
    hasSidebar: options.header === "left" || options.header === "right",
  });

  const initialSlideIndex = useMemo(
    () => getInitialSlideIndex(resources),
    [resources, events]
  );

  const sliderSettings = useSliderSettings({
    options,
    resources,
    slides,
    prevResourcesLength,
  });

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

  const header = options.header === "left" || options.header === "right"
    ? slides === 1
      ? "top"
      : options.header
    : options.header;

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
          width: `${options.header === "left" || options.header === "right"
            ? (slides / (slides + 1)) * 100
            : 100}%`,
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
