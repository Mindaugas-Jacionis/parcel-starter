const timeModule = require('./sample-module');

const monday = new Date().getDate() - new Date().getDay() + 1;
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const now = new Date().getTime();
const mondayInMilliseconds = new Date(`${year}-${month}-${monday}`);

const howLongSinceMonday = timeModule.milisecondsToHours(now - mondayInMilliseconds);

console.log(
  `%c ${howLongSinceMonday} hours have passed since Monday`,
  'background: #222999; color: #bada55',
);
console.log(
  `%c Current time in miliseconds is: ${timeModule.timestamp()}`,
  'background: #e1e1e1; color: #bf2ef3; font-weight: 700',
);
