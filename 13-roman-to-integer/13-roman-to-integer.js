/**
 * @param {string} s
 * @return {number}
 */
const symbolValue = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

var romanToInt = function(s) {
    const romanArray = s.split('');
    const symbolValueKeys = Object.keys(symbolValue);
  
    return romanArray.reduce((acc, cur, index) => {
      const nextItem = romanArray[index+1];
      const curSymbolIndex = symbolValueKeys.indexOf(cur);
      const nextItemSymbolIndex = symbolValueKeys.indexOf(nextItem);
      
      let addItem = 0;
      
      switch (cur) {
        case 'I':
        case 'X':
        case 'C':
          if (nextItemSymbolIndex === curSymbolIndex + 1 || nextItemSymbolIndex === curSymbolIndex + 2 ) {
            addItem = symbolValue[nextItem] - symbolValue[cur];
            romanArray.splice(index+1, 1);
            break;
          }
        default:
          addItem = symbolValue[cur]
          break; 
      }
     
      return acc += addItem
    }, 0)
};