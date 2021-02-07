function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(name, cost, type){
  return {
    name: `${name}`,
    price: `${cost}`,
    type: `${type}`,
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

function decreasePrice(diffPrice){
return diffPrice = diffPrice - (diffPrice * .1)
}

function createRecipe(name, fixins, meal){
  return {
    title: name,
    ingredients: fixins,
    type: meal,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
