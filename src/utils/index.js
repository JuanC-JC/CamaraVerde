
export const  translateDate = (date) =>{

  const monthsDictionary = {
    January: 'Enero',
    February: 'Febrero',
    March: 'Marzo',
    April: 'Abril',
    May: 'Mayo',
    June: 'Junio',
    July: 'Julio',
    August: 'Agosto',
    September: 'Septiembre',
    October: 'Octubre',
    November: 'Noviembre',
    December: 'Diciembre'
  }

  const lista = date.split(' ')
  lista[0] = monthsDictionary[lista[0]]
  return lista.join(' ')
}



