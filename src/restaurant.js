function createRestaurant(entitle){
  return {
    name: entitle,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
}

function addMenuItem(callIt, item){
  if (callIt.menus[item.type].includes(item)){
    return callIt;
  } else {
    return callIt.menus[item.type].push(item);
  }
}

function removeMenuItem(restName, mealName, mealType){
    for (var i = 0; i < restName.menus[mealType].length; i++){
      if (restName.menus[mealType][i].name.includes(mealName)){
        restName.menus[mealType].shift(i);
        return `No one is eating our ${mealName} - it has been removed from the ${mealType} menu!`
    }
  }
  return "Sorry, we don't sell Mom's Spaghetti, try adding a new recipe!"
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
