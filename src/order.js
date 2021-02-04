function takeOrder(order, delivery){
  if (delivery.length <= 2){
  delivery.push(order)
} else {
  return order;
 }
}

function refundOrder(){
  
}

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}
