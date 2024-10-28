function createDrink() {
  let openId = findAvailableDrinkId();
  let newDrink = {
    drinkId: openId,
    name: model.inputs.addCustomDrinkPage.customDrinkName,
    caffeineContent: model.inputs.addCustomDrinkPage.coffeineContent,
    image: model.inputs.addCustomDrinkPage.customDrinkImage,
  };
  model.drinks.push(newDrink);
  console.log(newDrink);
  console.log(model.drinks);
  goToPage('addDrinkPage');
}

function findAvailableDrinkId() {
  for (let i = 0; i <= model.drinks.length + 1; i++) {
    if (!idToDrink(i)) return i;
  }
}

function idToDrink(id) {
  for (let drink of model.drinks) {
    if (drink.id == id) return drink;
  }
  return null;
}
