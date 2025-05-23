import { useEffect, useRef, useState, useMemo } from "react";
import {
  DateRangePicker,
  type Range,
  type RangeKeyDict,
} from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import type { OptionsType } from "../types";

interface DatePickerProps {
  setDateRange: (dateRange: Range[]) => void;
  dateRange: Range[];
  options: OptionsType;
  showPosition?: "right" | "left";
  rootWidth: number;
}

const DatePicker = ({
  setDateRange,
  dateRange,
  showPosition = "left",
  rootWidth,
  options,
}: DatePickerProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);

  const formattedRange = useMemo(() => {
    const startDate = dateRange[0].startDate;
    const endDate = dateRange[0].endDate;
  
    if (!startDate || !endDate) return null;
  
    const startDay = startDate.getDate();
    const startMonth = startDate.toLocaleString("en-US", { month: "short" });
    const startYear = startDate.getFullYear();
  
    const endDay = endDate.getDate();
    const endMonth = endDate.toLocaleString("en-US", { month: "short" });
    const endYear = endDate.getFullYear();
  
    let formatted = "";
  
    if (
      startDay === endDay &&
      startMonth === endMonth &&
      startYear === endYear
    ) {
      // Same date → May 20, 2025
      formatted = `${startMonth} ${startDay}, ${startYear}`;
    } else if (startYear === endYear) {
      if (startMonth === endMonth) {
        // Same month/year → May 20 - 25, 2025
        formatted = `${startMonth} ${startDay} to ${endDay}, ${startYear}`;
      } else {
        // Same year, different months → May 20 - Jun 10, 2025
        formatted = `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
      }
    } else {
      // Different years → Dec 31, 2024 - Jan 2, 2025
      formatted = `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
    }
  
    return formatted;
  }, [dateRange, rootWidth]);

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
  
  const widgetId = useMemo(() => `widget-${Math.random().toString(36).substr(2, 9)}`, []);
  useEffect(() => {
    if (!options.primaryColor || !datePickerRef.current) return;
  
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .${widgetId} .rdrSelected, .${widgetId} .rdrInRange, .${widgetId} .rdrStartEdge, .${widgetId} .rdrEndEdge
      {
        background: ${options.thirdColor} !important;
        color: white !important;
      }
  
      .${widgetId} .rdrDay:hover {
        background: ${options.thirdColor}1c !important;
        color: white !important;
      }
    `;
    datePickerRef.current.appendChild(styleTag);
  
    return () => {
      // Cleanup: remove old style tag
      styleTag.remove();
    };
  }, [options.primaryColor]);

  return (
    <div
      ref={datePickerRef}
      style={{
        paddingTop: options.location ? "10px" : "6px",
        paddingBottom: options.location ? "10px" : "6px",
        paddingLeft: options.location ? "10px" : "6px",
        paddingRight: "0px", // now there's no conflict
      }}
      className={`pr-0 relative flex items-center justify-center gap-2 cursor-pointer ${widgetId} `}
    >
      <span
        style={{
          fontSize: rootWidth < 480 ? "10px" : "12px",
          marginRight: rootWidth < 480 ? "4px" : "8px",
        }}
        className="text-gray-100 text-xs font-semibold mt-[2px] block"
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
          viewBox="0 0 25 24"
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
