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

function removeMenuItem(title, dish){
  title.menus[dish.type].pop();

}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
