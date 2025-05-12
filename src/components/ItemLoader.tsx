import type { optionsType } from "../types";

interface ItemLoaderProps {
  options: optionsType;
}

const ItemLoader = ({ options }: ItemLoaderProps) => {
  // Reusable skeleton loader for team rows
  const renderTeam = () => (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-2 animate-pulse">
        <div className="w-6 h-6 bg-gray-300 rounded-full" />
        <div className="w-36 h-6 bg-gray-300 rounded" />
      </div>
      <div className="w-10 h-6 bg-gray-300 animate-pulse rounded"></div>
    </div>
  );

  // Reusable skeleton loader for text
  const renderTextSkeleton = (width: string) => (
    <div className={`h-4 bg-gray-300 rounded animate-pulse ${width}`}></div>
  );

  return (
    <div className="carousel-item relative">
      <div className="min-w-[250px]">
        {/* Header */}
        <div
          style={{ backgroundColor: options.secondaryColor }}
          className="flex w-full items-start justify-between py-0 px-4 text-sm font-semibold text-white"
        >
          <div className="py-1 animate-pulse">
            <div className="w-36 h-5 bg-gray-300 rounded" />
          </div>
        </div>

        {/* Content */}
        <div className="relative group overflow-hidden">
          <div className="match-score p-4 flex flex-col items-center justify-between gap-2 border-x-[1px] border-gray-200">
            {renderTeam()}
            {renderTeam()}
            <div className="h-5 flex items-center justify-between w-full text-sm text-gray-500">
              {renderTextSkeleton("w-28")}
              {renderTextSkeleton("w-15")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemLoader;