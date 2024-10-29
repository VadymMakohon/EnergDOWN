function createDrink() {
  let openId = findAvailableDrinkId();
  let userId = loggedInUserId();
  let newDrink = {
    userId: userId,
    drinkId: openId,
    name: model.inputs.addCustomDrinkPage.customDrinkName,
    caffeineContent: model.inputs.addCustomDrinkPage.customCaffeineContent,
    image: model.inputs.addCustomDrinkPage.customDrinkImage,
    selected: model.inputs.addCustomDrinkPage.selected,
  };
  model.drinks.push(newDrink);
  console.log(newDrink);
  console.log(model.drinks);
  goToPage('addDrinkPage');
}

function findAvailableDrinkId() {
  for (let i = 1; i <= model.drinks.length + 1; i++) {
    if (!idToDrink(i)) 
      return i;
  }
}

function idToDrink(id) {
  for (let drink of model.drinks) {
    if (drink.drinkId == id) return drink;
  }
  return null;
}
