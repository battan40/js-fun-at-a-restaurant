function takeOrder(order, delivery){
  if (delivery.length <= 2){
  delivery.push(order)
} else {
  order;
 }
}

function refundOrder(numOrder, delOrder){
for (var i = 0; i < delOrder.length; i++){
  if (numOrder === delOrder[i].orderNumber){
    delOrder.splice(i, 1)
  }
 }
}

function listItems(array){
  var newItems = '';
  for (var i = 0; i < array.length; i++){
    if (i !== array.length - 1){
    newItems = newItems + array[i].item + ', '
  } else {
    newItems = newItems + array[i].item
  }
 }
 return newItems;
}

  function searchOrder(list, order) {
    var onMenu = false;
    for (var i = 0; i < list.length; i++){
    if (list[i].item === order) {
      onMenu = true;
      }
   }
   return onMenu;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
