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
//This function should be able to add ingredients to an empty array.
//It looks like it takes a string and a parameter

function addIngredients(newItem, ingredients){
  if (ingredients.includes(newItem)){
    return ingredients
  } else {
    return ingredients.push(newItem)
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
