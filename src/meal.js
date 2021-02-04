function nameMenuItem(food) {
  return `Delicious ${food}`
}
function createMenuItem(specific, cost, general){
  var menuItem = {
    name: `${specific}`,
    price: `${cost}`,
    type: `${general}`,
  }
  return menuItem;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
