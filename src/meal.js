function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(specific, cost, general){
  return {
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

function decreasePrice(decreasedPrice){
return decreasedPrice = decreasedPrice - (decreasedPrice * .1)
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
