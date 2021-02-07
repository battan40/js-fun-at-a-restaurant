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
}

module.exports = Chef;
