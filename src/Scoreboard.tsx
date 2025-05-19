import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header, { type HeaderProps } from "./components/Header";
import Sidebar, { type SidebarProps } from "./components/Sidebar";
import type { OptionsType, ParameterType, SportType } from "./types";
import type { Range } from "react-date-range";
import { useEvents } from "./hooks/useGetEvents.ts";

import { useSports } from "./hooks/useGetSports.ts";
import { useFilteredEvents } from "./hooks/useFilteredEvents.ts";
import { useSlidesToShow } from "./hooks/useSlidesToShow.ts";
import { DEFAULT_DATE_RANGE } from "./utils/dateRangeUtils.ts";
import { useInitialSlideIndex } from "./hooks/useInitialSlideIndex.ts";
import {
  SliderSection,
  type SliderSectionProps,
} from "./components/Slider.tsx";

interface ScoreboardProps {
  options: OptionsType;
  token: string;
  parameters: ParameterType;
  rootWidth: number;
  rootHeight: number;
  itemHeight: number;
}

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
  const sliderRef = useRef<Slider | null>(null);

  const { sports, sportIds } = useSports(parameters, events, setSelectedSport);
  const { resources } = useFilteredEvents({
    events,
    dateRange,
    selectedSport,
    sportIds,
    setLoading,
  });
  const {slides, col} = useSlidesToShow(options, rootWidth, rootHeight, itemHeight);

  const initialSlideIndex = useInitialSlideIndex(resources);

  useEffect(() => {
    if (!loading && !eventsLoading && sliderRef.current) {
      sliderRef.current.slickGoTo(initialSlideIndex, true);
    }
  }, [initialSlideIndex, loading, eventsLoading]);

  useEffect(() => {
    setLoading(false);
  }, [resources]);

  const sidebar = options.header === "left" || options.header === "right";
  const header = sidebar && col === 1 ? "top" : options.header;

  const sliderSettings = {
    sliderRef,
    loading,
    eventsLoading,
    slides,
    resources,
    options,
  } as SliderSectionProps;

  if (header === "top" || header === "bottom") {
    const headerSettings = {
      sports,
      rootWidth,
      options,
      setSelectedSport,
      selectedSport,
      dateRange,
      setDateRange,
      parameters,
      eventsLoading,
    } as HeaderProps;

    return (
      <>
        {header === "top" && <Header {...headerSettings} />}
        <div
          style={{
            borderTop: `28px solid ${
              options.vertical
                ? options.backgroundColor
                : options.secondaryColor
            }`,
            backgroundColor: options.backgroundColor,
          }}
          className={`${
            options.vertical || "px-8"
          } ${options.theme === "dark" ? "" : "border-b-2 border-gray-300"}`}
        >
          <SliderSection {...sliderSettings} />
        </div>
        {header === "bottom" && <Header {...headerSettings} />}
      </>
    );
  } else {
    const sidebarSettings = {
      sports,
      rootWidth,
      options,
      setSelectedSport,
      selectedSport,
      dateRange,
      setDateRange,
      parameters,
      eventsLoading,
      slides,
    } as SidebarProps;
    return (
      <div className="flex w-full" style={{ height: itemHeight }}>
        {header === "left" && <Sidebar {...sidebarSettings} />}
        <div
          className="slider bg-gray-100 px-8"
          style={{
            width: `${sidebar ? (slides / (slides + 1)) * 100 : 100}%`,
            height: itemHeight,
            borderTop: `28px solid ${options.secondaryColor}`,
            backgroundColor: options.backgroundColor,
          }}
        >
          <SliderSection {...sliderSettings} />
        </div>
        {header === "right" && <Sidebar {...sidebarSettings} />}
      </div>
    );
  }
};

export default Scoreboard;
