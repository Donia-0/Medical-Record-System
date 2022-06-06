export default function (columns) {
  var newColumns = [];
  columns.forEach((element) => {
    if (element.name === "Action") {
    } else {
      newColumns.push(element);
    }
  });
  if (!localStorage.patientId) {
    return newColumns;
  } else {
    return columns;
  }
}
