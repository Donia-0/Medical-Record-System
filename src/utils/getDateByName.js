const getDayName = (dateString) =>
  new Intl.DateTimeFormat("en-Us", { weekday: "long" }).format(
    new Date(dateString)
  );
export default getDayName;
