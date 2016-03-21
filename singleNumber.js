/**
 * @param {number[]} nums
 * @return {number}
 */

/*Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?*/
forEach = function(collection, iterator) {
    
    if( collection.constructor === Array)
    {
      for(var i =0; i<collection.length; i++)
      {
        
        iterator(collection[i], i, collection);
      }
    }

    else if(collection.constructor === Object)
    {
      for(var key in collection){
        iterator(collection[key], key, collection);
      }
    }

  };

var singleNumber = function(nums) {
  var foundValues = {}; //object where we will store found values
  var results
  
  forEach(nums, function(x) {
    if(foundValues[x]) {
      delete foundValues[x];
    } else {
      foundValues[x] = x;  
    }
  });
    
  return Object.keys(foundValues)[0];
}


console.log(singleNumber([5,4,5,4,1,1,6]));
