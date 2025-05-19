import Slider from "react-slick";
import Item from "./Item";
import ItemLoader from "./ItemLoader";
import { widgetImages } from "../lib/data";
import { useSliderSettings } from "../hooks/useSliderSettings";
import { useRef } from "react";

interface SliderSectionProps {
  sliderRef: React.RefObject<Slider>;
  loading: boolean;
  eventsLoading: boolean;
  slides: number;
  resources: any[];
  options: any;
}

export type { SliderSectionProps };

export const SliderSection = ({
  sliderRef,
  loading,
  eventsLoading,
  slides,
  resources,
  options,
}: SliderSectionProps) => {
  const prevResourcesLength = useRef(0);
  const { sliderSettings, sliderLoaderSettings } = useSliderSettings(
    options,
    resources,
    slides,
    prevResourcesLength
  );
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
        <div className={`flex items-center justify-center pt-[28px] ${options.location ? "h-[144px]" : "h-[125px]"}`}>
          <img
            src={widgetImages.noEvent}
            alt="No Events"
            className="mr-2 h-6 mt-[-3px]"
            loading="lazy"
          />
          <p className={`${options.theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} text-lg font-semibold`}>
            No events available
          </p>
        </div>
      )}
    </div>
  );
};
