var findMinMax = function(arr) {
  var result = [];
  if (! Array.isArray(arr)) {
    return "Invalid input. Only strings accepted"
  }

  else if (arr.length === 0) {
    return [];
  }

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