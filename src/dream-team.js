module.exports = function createDreamTeam(arrays) {
  let resultName = '';
  if (!Array.isArray(arrays)) {
    return false;
  }
  arrays.forEach(element => {
    if (typeof element === 'string') {
      resultName += element.trim().split('')[0].toLocaleUpperCase();
    }
  });
  let resultArray = resultName.split('').sort();
  resultName = resultArray.join('');
  return resultName;
};