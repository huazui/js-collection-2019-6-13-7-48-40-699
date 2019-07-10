'use strict';
function choose_even(collection) {

  let result=collection.filter((number)=>{
    return number%2==0;
  })

 return result;
}
module.exports = choose_even;
