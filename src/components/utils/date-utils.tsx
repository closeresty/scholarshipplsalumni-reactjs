export function formatDate(dateString: string): string {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const date: Date = new Date(dateString);
  const day: number = date.getDate();
  const month: string = months[date.getMonth()];
  const year: number = date.getFullYear();

  let hour: number = date.getHours();
  const amOrPm: string = hour >= 12 ? "pm" : "am";
  hour = hour % 12 || 12;
  const minute: number = date.getMinutes();
  const minuteStr: string = minute < 10 ? `0${minute}` : `${minute}`;

  let dayStr: string;
  switch (day) {
    case 1:
    case 21:
    case 31:
      dayStr = `${day}st`;
      break;
    case 2:
    case 22:
      dayStr = `${day}nd`;
      break;
    case 3:
    case 23:
      dayStr = `${day}rd`;
      break;
    default:
      dayStr = `${day}th`;
      break;
  }

  const formattedDate: string = `${dayStr} ${month} ${year} at ${hour}:${minuteStr} ${amOrPm}`;
  return formattedDate;
}
