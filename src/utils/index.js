export const translateDate = (date) => {
  const monthsDictionary = {
    January: "Enero",
    February: "Febrero",
    March: "Marzo",
    April: "Abril",
    May: "Mayo",
    June: "Junio",
    July: "Julio",
    August: "Agosto",
    September: "Septiembre",
    October: "Octubre",
    November: "Noviembre",
    December: "Diciembre",
  };

  const lista = date.split(" ");
  lista[0] = monthsDictionary[lista[0]];
  return lista.join(" ");
};

export const transformDate = (date) => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let result = date.split("T")[0].replace(/\-/g, ",");

  let newDate = new Date(result);

  return (
    months[newDate.getMonth()] +
    " " +
    newDate.getDay() +
    "," +
    " " +
    newDate.getFullYear()
  );
};
