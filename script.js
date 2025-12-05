//your JS code here. If required.

function daysOfAYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366;
  }
  return 365;
	
}
let year = Number(prompt("Enter a year:"));
alert(daysOfAYear(year));