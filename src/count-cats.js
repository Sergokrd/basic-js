module.exports = function countCats(array) {
  let result = 0;
      array.forEach(list => { 
      list.forEach(element => {
  if (element === '^^') {
      result++;
          }
      });
    });
  return result;
  };
      