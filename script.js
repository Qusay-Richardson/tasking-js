function currentTimeShow() {
  let currentDate = new Date();
  let month = "";
  let day = "";
  month = getMonth(currentDate.getMonth());
  day = dayName(currentDate.getDay());
  let TimeResult = `Дата: ${currentDate.getDate()} ${month} ${currentDate.getFullYear()} року <br>
  День: ${day} <br>
  Час: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  let result = document.getElementById("timeResult");
  result.innerHTML = TimeResult;
}
function getMonth(monthNum) {
  let month = "";
  switch (monthNum) {
    case 0:
      {
        month = "січня";
      }
      break;
    case 1:
      {
        month = "лютого";
      }
      break;
    case 2:
      {
        month = "березня";
      }
      break;
    case 3:
      {
        month = "квітня";
      }
      break;
    case 4:
      {
        month = "травня";
      }
      break;
    case 5:
      {
        month = "червня";
      }
      break;
    case 6:
      {
        month = "липня";
      }
      break;
    case 7:
      {
        month = "серпня";
      }
      break;
    case 8:
      {
        month = "вересня";
      }
      break;
    case 9:
      {
        month = "жовтня";
      }
      break;
    case 10:
      {
        month = "листопада";
      }
      break;
    case 11:
      {
        month = "грудня";
      }
      break;
    default: {
    }
  }
  return month;
}
function dayName(day) {
  switch (day) {
    case 0:
      {
        day = "неділя";
      }
      break;
    case 1:
      {
        day = "понеділок";
      }
      break;
    case 2:
      {
        day = "вівторок";
      }
      break;
    case 3:
      {
        day = "середа";
      }
      break;
    case 4:
      {
        day = "четвер";
      }
      break;
    case 5:
      {
        day = "п'ятниця";
      }
      break;
    case 6:
      {
        day = "субота";
      }
      break;
    default: {
      alert("Помилка!");
    }
  }
  return day;
}
function dayNumber() {
  let currentDate = new Date();
  let dayNum = currentDate.getDамy();
  if (dayNum === 0) {
    dayNum = 7;
  }
  return dayNum;
}
function currentDayShow() {
  let currentDate = new Date();
  let day = dayName(currentDate.getDay());
  let dayNum = dayNumber();
  let DayResult = `Номер дня: ${dayNum} <br>Назва дня: ${day}`;
  let result = document.getElementById("dayResult");
  result.innerHTML = DayResult;
}

function dateSearch() {
  let currentDate = new Date();
  let daysAgo = document.getElementById("daysAgo");
  currentDate.setDate(currentDate.getDate() - daysAgo.value);
  let daysAgoResult = document.getElementById("daysAgoResult");
  daysAgoResult.value = `${currentDate.getFullYear()}:${
    currentDate.getMonth() + 1
  }:${currentDate.getDate()}`;
}

function lastday() {
  let year = document.getElementById("lastdayYear");
  let month = document.getElementById("lastdayMonth");
  if (year.value === "" || month.value === "") {
    year.value = "Рік";
    month.value = "Місяць";
    return "";
  }
  let currentDate = new Date(year.value, month.value);
  currentDate.setDate(currentDate.getDate() - 1);
  let lastdayResult = document.getElementById("lastdayResult");
  lastdayResult.innerHTML = `Останній день ${getMonth(
    currentDate.getMonth()
  )}: ${currentDate.getDate()}`;
}

function secondShow() {
  let currentDate = new Date();
  let date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  let past = 0;
  past = currentDate - date.setDate(date.getDate() - 1);
  past = past / 1000;
  date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  let to = 0;
  to = date.setDate(date.getDate() + 1) - currentDate;
  to = to / 1000;
  let secondResult = document.getElementById("secondResult");
  secondResult.innerHTML = `Від початку: ${past}, До кінця: ${to}`;
}
function dateShow() {
  let currentDate = new Date(2022, 1, 1);
  let dateResult = document.getElementById("dateResult");
  let day,
    month = 0;
  if (currentDate.getDate() < 10) day = "0" + currentDate.getDate();
  else day = currentDate.getDay();
  if (currentDate.getMonth() < 10) {
    month = currentDate.getMonth() + 1;
    month = "0" + month;
  } else month = currentDate.getMonth() + 1;
  dateResult.innerHTML = `${day}.${month}.${currentDate.getFullYear()}`;
}
function stringToDate(inputDate) {
  let datemas = inputDate.split(".");
  let date = new Date(datemas[2], datemas[1] - 1, datemas[0]);
  return date;
}
function stringToTime(inputDate, inputTime) {
  let timemas = inputTime.split(":");
  let date = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate(),
    timemas[0],
    timemas[1],
    timemas[2]
  );
  return date;
}
function dateDifference() {
  let date1 = document.getElementById("date1");
  let date2 = document.getElementById("date2");
  if (date1.value === "" || date2.value === "") {
    date1.value = "DD.MM.YYYY";
    date1.value = "DD.MM.YYYY";
  }
  date1 = stringToDate(date1.value);
  date2 = stringToDate(date2.value);
  let dateDifferenceResult = document.getElementById("dateDifferenceResult");
  let dateDifference = new Date();
  dateDifference = date1 - date2;
  dateDifferenceResult.innerHTML = "Різниця: " + dateDifference;
}
function formatDatetask() {
  let date = document.getElementById("formatDate");
  let time = document.getElementById("formatTime");
  if (date.value === "") date.value = "DD.MM.YYYY";
  if (time.value === "") time.value = "HH:mm:ss";
  let formatResult = document.getElementById("formatDateResult");
  date = stringToDate(date.value);
  date = stringToTime(date, time.value);
  formatResult.innerHTML = formatDate(date);
}
function formatDate(date) {
  let currentDate = new Date();
  let difference = (currentDate - date) / 1000;
  if (difference < 1) return "тільки що";
  else if (difference < 60) return `${difference} сек. назад`;
  else if (difference < 60 * 60) return `${difference / 60} хв. назад`;
  else
    return `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

function uaFormatShow() {
  let date = document.getElementById("Date");
  let time = document.getElementById("Time");
  let formatLanguageDateResult = document.getElementById(
    "formatLanguageDateResult"
  );
  date = stringToDate(date.value);
  date = stringToTime(date, time.value);

  formatLanguageDateResult.innerHTML = `${dayName(
    date.getDay()
  )}, ${date.getDate()} 
  ${getMonth(date.getMonth())} ${date.getFullYear()} нашої ери, 
  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
function enFormatShow() {
  let date = document.getElementById("Date");
  let time = document.getElementById("Time");
  let formatLanguageDateResult = document.getElementById(
    "formatLanguageDateResult"
  );
  date = stringToDate(date.value);
  date = stringToTime(date, time.value);

  formatLanguageDateResult.innerHTML = `${endayName(
    date.getDay()
  )}, ${date.getDate()}th of 
                                    
  ${engetMonth(date.getMonth())} ${date.getFullYear()} a.d., 
  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
function endayName(day) {
  switch (day) {
    case 0:
      {
        day = "Sunday";
      }
      break;
    case 1:
      {
        day = "Monday";
      }
      break;
    case 2:
      {
        day = "Tuesday";
      }
      break;
    case 3:
      {
        day = "Wednesday";
      }
      break;
    case 4:
      {
        day = "Thursday";
      }
      break;
    case 5:
      {
        day = "Friday";
      }
      break;
    case 6:
      {
        day = "Saturday";
      }
      break;
    default: {
      alert("Помилка!");
    }
  }
  return day;
}
function engetMonth(monthNum) {
  let month = "";
  switch (monthNum) {
    case 0:
      {
        month = "January";
      }
      break;
    case 1:
      {
        month = "February";
      }
      break;
    case 2:
      {
        month = "March";
      }
      break;
    case 3:
      {
        month = "April";
      }
      break;
    case 4:
      {
        month = "May";
      }
      break;
    case 5:
      {
        month = "June";
      }
      break;
    case 6:
      {
        month = "July";
      }
      break;
    case 7:
      {
        month = "August";
      }
      break;
    case 8:
      {
        month = "September";
      }
      break;
    case 9:
      {
        month = "October";
      }
      break;
    case 10:
      {
        month = "November";
      }
      break;
    case 11:
      {
        month = "December";
      }
      break;
    default: {
    }
  }
  return month;
}
