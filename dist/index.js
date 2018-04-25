"use strict";

module.exports = function (arr, chunkSize) {
  var result = [];
  for (var i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};
