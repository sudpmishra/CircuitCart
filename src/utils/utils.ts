export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export function formatRelativeDate(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.round((date.getTime() - now.getTime()) / 1000);

  const absoluteDiff = Math.abs(diffInSeconds);
  const isFuture = diffInSeconds > 0;

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (absoluteDiff >= 10 * 365 * 24 * 60 * 60) {
    return isFuture ? "after a long time" : "a long time ago";
  }

  const timeIntervals: { value: number; unit: Intl.RelativeTimeFormatUnit }[] =
    [
      { value: 60, unit: "second" }, // 1 min
      { value: 60 * 60, unit: "minute" }, // 1 hour
      { value: 24 * 60 * 60, unit: "hour" }, // 1 day
      { value: 7 * 24 * 60 * 60, unit: "day" }, // 1 week
      { value: 30 * 24 * 60 * 60, unit: "week" }, // 1 month (approx)
      { value: 12 * 30 * 24 * 60 * 60, unit: "month" }, // 1 year (approx)
      { value: 10 * 365 * 24 * 60 * 60, unit: "year" }, // 10 years
    ];

  for (let i = 0; i < timeIntervals.length; i++) {
    const { value } = timeIntervals[i];
    if (absoluteDiff < value) {
      const previousInterval = timeIntervals[i - 1];
      const formattedValue = Math.round(
        absoluteDiff / (previousInterval?.value || 1)
      );
      return rtf.format(
        isFuture ? formattedValue : -formattedValue,
        previousInterval?.unit || "second"
      );
    }
  }

  return rtf.format(
    isFuture
      ? Math.round(absoluteDiff / 31536000)
      : -Math.round(absoluteDiff / 31536000),
    "year"
  );
}

export const ITEMS_PER_PAGE = 18;
