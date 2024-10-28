import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getPassingPercentage(passedTests: number, failedTests: number) {
  const totalTests = passedTests + failedTests;

  // Calculate percentage only if there are tests
  if (totalTests === 0) return "0%";

  const passingPercentage = (passedTests / totalTests) * 100;

  // Return as a formatted string, rounded to the nearest whole number
  return `${Math.round(passingPercentage)}%`;
}
