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

function addIngredients(newItem, ingredients){
  if (ingredients.includes(newItem)){
    return ingredients
  } else {
    return ingredients.push(newItem)
  }
}

function formatPrice(initialPrice){
  return `$${initialPrice}`

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}
