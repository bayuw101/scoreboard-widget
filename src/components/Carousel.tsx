import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { resources, sports, type sportsType } from "../lib/data";
import CarouselItem from "./CarouselItem";
import CarouselHeader from "./CarouselHeader";
import type { optionsType } from "../types";
import CarouselItemLoader from "./CarouselItemLoader";
import { useState, useMemo, useEffect } from "react";
import type { Range } from "react-date-range";

const Carousel = ({ options }: { options: optionsType }) => {
  const [loading, setLoading] = useState(false);
  const [selectedSport, setSelectedSport] = useState<sportsType | null>(null);
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    console.log("Selected Sport:", selectedSport);
    console.log("Date Range:", dateRange);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }
    , 100);
  }, [selectedSport, dateRange]);

  // Custom Next Arrow
  const CustomNextArrow = ({ className, style, onClick }: any) => (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, right: "-32px" }}
      onClick={onClick}
    />
  );

  // Custom Prev Arrow
  const CustomPrevArrow = ({ className, style, onClick }: any) => (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, left: "-32px" }}
      onClick={onClick}
    />
  );

  // Calculate the number of slides based on the root width
  const rootWidth =
    document.getElementById("arbiter-scoreboard")?.offsetWidth ||
    window.innerWidth;

  const slides = useMemo(() => {
    if (rootWidth >= 1531) return 6;
    if (rootWidth >= 1281) return 5;
    if (rootWidth >= 1025) return 4;
    if (rootWidth >= 900) return 3;
    if (rootWidth >= 700) return 2;
    return 1;
  }, [rootWidth]);

  const header = options.header || "top";

  // Common slider settings
  const settings = {
    dots: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: slides,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const settingsLoader = {
    ...settings,
    infinite: false,
  };

  return (
    <>
      {/* Render Header */}
      {header === "top" && (
        <CarouselHeader
          sports={sports}
          rootWidth={rootWidth}
          options={options}
          setSelectedSport={setSelectedSport}
          selectedSport={selectedSport}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      )}

      {/* Carousel Content */}
      <div
        style={{ borderTop: `28px solid ${options.secondaryColor}` }}
        className="bg-gray-100 px-8 border-b-2 border-gray-300"
      >
        <div className="mt-[-28px]">
          {!loading ? (
            <Slider {...settings}>
              {resources.map((event, index) => (
                <CarouselItem key={index} event={event} options={options} />
              ))}
            </Slider>
          ) : (
            <Slider {...settingsLoader}>
              {Array.from({ length: slides }).map((_, index) => (
                <CarouselItemLoader key={index} options={options} />
              ))}
            </Slider>
          )}
        </div>
      </div>

      {/* Render Footer */}
      {header === "bottom" && (
        <CarouselHeader
          sports={sports}
          rootWidth={rootWidth}
          options={options}
          setSelectedSport={setSelectedSport}
          selectedSport={selectedSport}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      )}
    </>
  );
};

export default Carousel;
