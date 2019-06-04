const timestamp = () => new Date().getTime();
const milisecondsToHours = miliseconds => miliseconds / 1000 / 60 / 60;

module.exports = {
  timestamp,
  milisecondsToHours,
};
