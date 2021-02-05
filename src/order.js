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

function listItems(array){
  for (var i = 0; i <= array.length; i++){
    return array[0].item + ", " + array[1].item + ", " + array[2].item;
    }
  }

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}
