export function timeAgo(dateParam: Date) {
  const date = typeof dateParam === "object" ? dateParam : new Date(dateParam);
  const today = new Date();
  const seconds = Math.round((today.getTime() - date.getTime()) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const weeks = Math.round(days / 7);
  const months = Math.round(days / 30);
  const year = Math.round(months / 12);

  let timeCount;
  let timeUnit;

  if (seconds < 60) {
    timeCount = seconds;
    timeUnit = "second";
  } else if (minutes < 60) {
    timeCount = minutes;
    timeUnit = "minute";
  } else if (hours < 24) {
    timeCount = hours;
    timeUnit = "hour";
  } else if (days < 7) {
    timeCount = days;
    timeUnit = "day";
  } else if (weeks < 4) {
    timeCount = weeks;
    timeUnit = "week";
  } else if (months < 12) {
    timeCount = months;
    timeUnit = "month";
  } else {
    timeCount = year;
    timeUnit = "year";
  }

  const isPlural = timeCount > 1;
  return `${timeCount} ${timeUnit}${isPlural ? "s" : ""}`;
}
