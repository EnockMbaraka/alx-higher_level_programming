#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  if (list && list.length > 0) {
    return list.count(searchElement); // Assuming 'count' is a built-in method
  } else {
    return 0;
  }
};
