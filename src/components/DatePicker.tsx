import { useEffect, useRef, useState, useMemo } from "react";
import {
  DateRangePicker,
  type Range,
  type RangeKeyDict,
} from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import type { optionsType } from "../types";

interface DatePickerProps {
  setDateRange: (dateRange: Range[]) => void;
  dateRange: Range[];
  options: optionsType;
  showPosition?: "right" | "left";
}

const DatePicker = ({
  setDateRange,
  dateRange,
  showPosition = "left",
}: DatePickerProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Memoized formatted date range string
  const formattedRange = useMemo(() => {
    const start = dateRange[0].startDate?.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const end = dateRange[0].endDate?.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return `${start} - ${end}`;
  }, [dateRange]);

  const toggleDatePicker = () => setShowDatePicker((prev) => !prev);

  const handleDateChange = (ranges: RangeKeyDict) => {
    const { startDate, endDate, key } = ranges.selection;
    setDateRange([{ startDate, endDate, key }]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={datePickerRef}
      className="p-4 relative flex items-center justify-center gap-2 cursor-pointer"
    >
      <span
        className="text-gray-100 text-xs font-semibold mt-[2px] hidden md:block mr-2"
        onClick={toggleDatePicker}
      >
        {formattedRange}
      </span>
      <button
        className="text-gray-100 hover:text-gray-300 flex items-center"
        onClick={toggleDatePicker}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 2.25v1.5m7.5-1.5v1.5M3.75 9h16.5M4.5 5.25h15a2.25 2.25 0 012.25 2.25v11.25a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 18.75V7.5a2.25 2.25 0 012.25-2.25z"
          />
        </svg>
      </button>
      {showDatePicker && (
        <div
          className={`${
            showPosition == "left" ? "right-0 md:left-0" : "left-0 md:right-0"
          }select-date absolute top-full mt-2 z-50 shadow-lg bg-white rounded-md p-4`}
        >
          <DateRangePicker ranges={dateRange} onChange={handleDateChange} />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
