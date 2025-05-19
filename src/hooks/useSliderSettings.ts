import { useMemo } from "react";
import type { OptionsType, ResourceType } from "../types";

export const useSliderSettings = (
    options: OptionsType,
    resources: ResourceType[],
    slides: number,
    prevResourcesLength: React.RefObject<number>
) => {
    return useMemo(() => {
        const infinite = resources.length > slides && resources.length > prevResourcesLength.current;
        prevResourcesLength.current = resources.length;

        const settings = {
            dots: false,
            speed: 1000,
            autoplay: true,
            vertical: options.vertical,
            autoplaySpeed: 3000,
            slidesToShow: slides,
            slidesToScroll: 1,
            infinite,
            arrows: !options.vertical,
        };
        return {sliderSettings: settings, sliderLoaderSettings: { ...settings, infinite: false }};
    }, [options, resources, slides]);
};
  