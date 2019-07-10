'use strict';
var map_to_four_multiples_add_one = function(collection){
let result=[];
result=collection.map((number)=>{
  return number*4+1;
})
return result;
};

module.exports = map_to_four_multiples_add_one;
