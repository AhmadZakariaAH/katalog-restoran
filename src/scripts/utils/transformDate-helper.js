const transformDate = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesdays",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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
    "December",
  ];
  const dayName = days[date.getDay()];
  const dateNum = date.getDate();
  const monthName = months[date.getMonth()];
  const yearNum = date.getFullYear();
  const formattedDate = `${dayName}, ${dateNum} ${monthName} ${yearNum}`;
  return formattedDate;
};

export default transformDate;
