module.exports = function splitQuantity(quantity) {

  var quantitySpilt = quantity.split(",");
  var quantityCount = quantitySpilt.length;
  return quantityCount;
}
