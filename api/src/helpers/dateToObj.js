function dayFully(day){
  switch(day) {
    case "Mon": return "Lunes"
    case "Tue": return "Martes"
    case "Wed": return "Miercoles"
    case "Thu": return "Jueves"
    case "Fri": return "Viernes"
    case "Sat": return "Sabado"
    default: return "Domingo"
  }
};

function monthFully(month){
  switch(month) {
    case "Jan": return "Enero"
    case "Feb": return "Febrero"
    case "Mar": return "Marzo"
    case "Apr": return "Abril"
    case "May": return "Mayo"
    case "Jun": return "Junio"
    case "Jul": return "Julio"
    case "Aug": return "Agosto"
    case "Sep": return "Septiembre"
    case "Oct": return "Octubre"
    case "Nov": return "Noviembre"
    default: return "Diciembre"
  }
};

function monthNum(month){
  switch(month) {
    case "Jan": return '01'
    case "Feb": return '02'
    case "Mar": return '03'
    case "Apr": return '04'
    case "May": return '05'
    case "Jun": return '06'
    case "Jul": return '07'
    case "Aug": return '08'
    case "Sep": return '09'
    case "Oct": return 10
    case "Nov": return 11
    default: return 12
  }
};

function shortcut(year, month, day, hour, minutes) {
  // let Year = parseInt(year);
  let Month = monthNum(month);
  // let Day = parseInt(day)
  const short = `${year}${Month}${day}${hour}${minutes}`
  return short;
}


module.exports = (date) => {
    let dateArray = date.toString().split(" ").slice(0, 6)
    let dateObj = {
      dayName: dayFully(dateArray[0]),
      month: monthFully(dateArray[1]),
      dayNumber: parseInt(dateArray[2]),
      year: dateArray[3],
      time: dateArray[4].slice(0,5),
      shortcut: parseInt(shortcut(dateArray[3], dateArray[1], dateArray[2], dateArray[4].slice(0,2), dateArray[4].slice(3,5))),
      datefull:''
    }
    let {dayName, dayNumber, month, year, time} = dateObj;
    dateObj.datefull = `${dayName} ${dayNumber} de ${month} de ${year} a las ${time}`
    return dateObj;
  }