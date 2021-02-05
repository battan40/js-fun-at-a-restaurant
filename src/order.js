function takeOrder(order, delivery){
  if (delivery.length <= 2){
  delivery.push(order)
} else {
  return order;
 }
}

function refundOrder(numOrder, delOrder){
for (var i = 0; i <= delOrder.length; i++){
  if (numOrder === 1){
    return delOrder.shift(numOrder);
  } else if (numOrder === 2) {
    return delOrder.splice(1, 1);
  }
 }
}

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
