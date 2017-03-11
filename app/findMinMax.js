var findMinMax = function(arr) {
  var result = [];
  arr.sort(function(x, y) {
    return x - y;
  });
  
  var myMin = arr[0], myMax = arr[arr.length - 1];
  result.push(myMin);
  if (myMin !== myMax) {
    result.push(myMax);
  }
  return result;
};

module.exports = findMinMax;