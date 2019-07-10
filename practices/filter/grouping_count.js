'use strict';

function grouping_count(collection) {
let result=[];
collection.filter((number)=>{
  if(number in result){
    result[number]++;
  }
  else result[number]=1;
})
return result;
}

module.exports = grouping_count;
