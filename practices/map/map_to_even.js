'use strict';
function map_to_even(collection){
  let arrayMap=collection.map(function(item){
    return item*2;
  })
  return arrayMap;
}
module.exports = map_to_even;
