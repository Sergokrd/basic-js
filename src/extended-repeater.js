module.exports = function repeater(str, options) {
    let output = '';
    str = '' + str;
    
    if(options.addition === undefined) options.addition = '';
    if(options.additionSeparator === undefined) options.additionSeparator = '|';
    if(options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
    if(options.repeatTimes === undefined) options.repeatTimes = 1;
    if(options.separator === undefined) options.separator = '+';
  
    for (let i = 1; i <= options.repeatTimes; i++) {
      output+= str;
      for (let j = 1; j <= options.additionRepeatTimes; j++) {
        output+= options.addition;
        if(j < options.additionRepeatTimes) output+= options.additionSeparator;
      }
      if(i < options.repeatTimes) output+= options.separator;
    }
    return output;
  };