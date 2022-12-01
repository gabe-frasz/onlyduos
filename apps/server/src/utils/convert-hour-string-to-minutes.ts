export const convertHourStringToMinutes = (hour: string) => {
  const [hours, minutes] = hour.split(":").map(Number);

  return hours * 60 + minutes;
};
