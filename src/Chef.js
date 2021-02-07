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
    if (foodItem === foodItem) {
      console.log(foodItem);
     return  `Yes, we're serving ${foodItem.name} today!`;
   }
     return "Sorry, we aren't serving Quiche today."
   }

}

module.exports = Chef;
