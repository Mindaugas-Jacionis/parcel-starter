const timestamp = () => Date.now();
const milisecondsToHours = miliseconds => miliseconds / 1000 / 60 / 60;

module.exports = {
  timestamp,
  milisecondsToHours
};
