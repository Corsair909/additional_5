module.exports = function check(str, bracketsConfig) {

      let closingBrackets = Object.assign(
          {},
          ...bracketsConfig.map(item => item[1])
              .map(key => ({[key]: true}))),

      openingBrackets = Object.assign(
          {},
          ...bracketsConfig.map(item => item[0])
              .map((key, index) => {
                  return ({[key]: Object.keys(closingBrackets)[index]})
              })
      ),

      stack = [];

      for (let i = 0; i < str.length; i++) {
          if (openingBrackets[str[i]]) {
              if (openingBrackets[str[i]] && closingBrackets[str[i]] && stack[stack.length - 1] === str[i]) {
                  stack.pop();
              } else {
                  stack.push(str[i]);
              }
          } else if (closingBrackets[str[i]]) {
              if (openingBrackets[stack.pop()] !== str[i]) return false;
          }
      }

      return stack.length === 0;
}
