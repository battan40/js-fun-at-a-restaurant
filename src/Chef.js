class Chef {
  constructor(call, place) {
    this.name = call;
    this.restaurant = place;
  }
  greetCustomer(name, condition){
    if (condition === true){
      return `Good morning, ${name}!`
    } else {
    return  `Hello, ${name}!`
  }
 }
 checkForFood(foodItem){
   if (foodItem.name === "Quiche" || foodItem.name === "Kouign Amann"){
     return `Sorry, we aren't serving ${foodItem.name} today.`
   }
    if (foodItem === foodItem) {
     return  `Yes, we're serving ${foodItem.name} today!`;
   }

   }

}

module.exports = Chef;
