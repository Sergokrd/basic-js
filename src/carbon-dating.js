const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(element) {
  if (typeof element !== 'string') {
    return false;
  }
  if (parseFloat(element) === 0 ){
    return false;
  }
  let activity = Math.log(MODERN_ACTIVITY / parseFloat(element));
  if (isNaN(activity) || activity < 0) {
    return false;
  }
  let result = (activity / (0.693 / HALF_LIFE_PERIOD)) + 1;
  return parseInt(result);
};