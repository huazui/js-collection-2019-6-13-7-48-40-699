'use strict';


function choose_multiples_of_three(collection) {

  let result=collection.filter((number)=>{
    return number%3==0;
  })
 
 return result;
}


module.exports = choose_multiples_of_three;
