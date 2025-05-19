import type { ParameterType } from "../types/index.ts";

/**
 * Validates if the provided data matches the expected ParameterType structure.
 * @param data - The data to validate.
 * @returns True if the data is of type ParameterType, otherwise false.
 */
export function isParameterType(data: any): data is ParameterType {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  // Example validation logic based on the assumed structure of ParameterType
  if (
    "sportId" in data &&
    typeof data.sportId !== "number" &&
    (typeof data.sportId !== "number" && (!Array.isArray(data.sportId) || data.sportId.some((id: any) => typeof id !== "number")))
  ) {
    return false;
  }

  if ("genderId" in data && typeof data.genderId !== "number") {
    return false;
  }

  if ("levelId" in data && typeof data.levelId !== "number") {
    return false;
  }

  if ("dateRange" in data) {
    const { startDate, endDate } = data.dateRange || {};
    if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
      return false;
    }
  }

  return true;
}
