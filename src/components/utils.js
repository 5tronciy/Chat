export const getTime = (isoTime) => {
  const time = new Date(isoTime);
  return `${time.getHours()}:${time.getMinutes().toString().padStart(2, "0")}`;
};

export const generateId = () => {
  return Math.random().toString();
};
