"use scrict";
function checkForSpam(str) {
    let array = str.toLowerCase();
    if (array.includes('sale')){
      return true;
      } else if (array.includes('spam')){
        return true;
      }else{
        return false;
      }
      
  }
  
console.log(checkForSpam('Latest technologysnews')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best {Sale} offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true