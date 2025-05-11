import Carousel from "./components/Carousel";
import type { optionsType } from "./types";

const Scoreboard = ({options}: {options: optionsType}) => {
  return (
    <div className="">
      <Carousel options={options} />
    </div>
  );
};

export default Scoreboard;
