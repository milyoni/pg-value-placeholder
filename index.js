module.exports = function() {
  var num = 0;
  return function() {
    ++num;
    return "$" + num;
  };
};
