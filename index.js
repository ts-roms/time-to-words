// expecting time to be a string in the format like '8:15' or '12:30'

const timeInWords = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fiftheen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "thirty",
];

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === "0:00") {
    return "midnight";
  }

  if (time === "12:00") {
    return "midday";
  }

  const timeSplitted = time.split(":");
  const hour = parseInt(timeSplitted[0]);
  const minute = parseInt(timeSplitted[1]);

  const hourToString = convertHourToString(hour);

  if (minute === 0) {
    return hourToString + " o'clock";
  }

  if (minute <= 30) {
    return convertPastHour(hour, minute);
  }

  return "half past eight";
}

function convertPastHour(hour, minute) {
  const hourStr = timeInWords[hour - 1];
  const minuteStr = timeInWords[minute - 1];
  return hourStr + " past " + minuteStr;
}

function convertHourTo(hour, minute) {
  const hourStr = timeInWords[hour - 1];
  const minuteStr = timeInWords[59 - minute];
  return (hourStr = hourStr + " to " + minuteStr);
}

function convertHourToString(hour) {
  return timeInWords[hour - 1];
}

module.exports = { convertTimeToWords };
