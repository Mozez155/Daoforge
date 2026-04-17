/**
 * Format a Unix timestamp or ISO string as a relative time string.
 * e.g. "2 hours ago", "3 days ago"
 */
export function formatRelativeTime(input: number | string | Date): string {
  const date = input instanceof Date ? input : new Date(typeof input === "number" ? input * 1000 : input);
  const now = Date.now();
  const diffMs = now - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);

  if (diffSec < 60) return "just now";
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)} minute${Math.floor(diffSec / 60) === 1 ? "" : "s"} ago`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} hour${Math.floor(diffSec / 3600) === 1 ? "" : "s"} ago`;
  if (diffSec < 2592000) return `${Math.floor(diffSec / 86400)} day${Math.floor(diffSec / 86400) === 1 ? "" : "s"} ago`;
  return formatDate(date);
}

/**
 * Format a countdown from now to a future Unix timestamp.
 * e.g. "Ends in 3 days", "Ends in 2 hours"
 */
export function formatCountdown(unixTimestamp: number): string {
  const diffMs = unixTimestamp * 1000 - Date.now();
  if (diffMs <= 0) return "Ended";

  const diffSec = Math.floor(diffMs / 1000);
  if (diffSec < 3600) return `Ends in ${Math.floor(diffSec / 60)} minute${Math.floor(diffSec / 60) === 1 ? "" : "s"}`;
  if (diffSec < 86400) return `Ends in ${Math.floor(diffSec / 3600)} hour${Math.floor(diffSec / 3600) === 1 ? "" : "s"}`;
  return `Ends in ${Math.floor(diffSec / 86400)} day${Math.floor(diffSec / 86400) === 1 ? "" : "s"}`;
}

/**
 * Format a Date or Unix timestamp as a human-readable date string.
 * e.g. "Apr 17, 2026"
 */
export function formatDate(input: number | string | Date): string {
  const date = input instanceof Date ? input : new Date(typeof input === "number" ? input * 1000 : input);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

/**
 * Format a Date or Unix timestamp as a full date + time string.
 * e.g. "Apr 17, 2026, 14:30"
 */
export function formatDateTime(input: number | string | Date): string {
  const date = input instanceof Date ? input : new Date(typeof input === "number" ? input * 1000 : input);
  return date.toLocaleString("en-US", {
    year: "numeric", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
}
