var aritGeo = function(arr) {
  if (! Array.isArray(arr)) {
    return "Invalid input. Array expected."
  }
    
  else if (arr.length === 0) {
    return 0;
  }
  
  else if (arr.length < 3) {
    return -1;
  }
  
  var difference = arr[1] - arr[0], ratio = arr[1]/arr[0];
  
  if(difference == arr[arr.length - 1] - arr[arr.length-2]) {
  return "Arithmetic";
  }
  
  else if (ratio == arr[arr.length -  1] / arr[arr.length - 2]) {
  return "Geometric";
  }
  
  else {
    return -1;
  }
};

module.exports = aritGeo;