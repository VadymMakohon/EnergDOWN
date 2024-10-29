function getDrinks() {
  let drinks = [];
  for (let drink of model.drinks) {
    drinks.push(drink);
  }

  return drinks;
}

function drinksHTML() {
  let drinksHtml = ``;
  let drinks = getDrinks();

  if (drinks.length > 0) {
    for (const drink of drinks) {
      let idOfSelectedDrink = drink.drinkId;
      drinksHtml += `<li button onclick="selectDrink(${idOfSelectedDrink})">${drink.name} ${drink.caffeineContent} mg</li>`;
    }
  }
  console.log(drinks);
  return drinksHtml;
}

function selectDrink(selectedDrinkId) {
  let drinks = getDrinks();
  for (const drink of drinks) {
    if (drink.drinkId == selectedDrinkId) {
      drink.selected = !drink.selected;
    }
  }
}

function addSelectedToGoalProgression() {
  let addToGoal = 0;
  let theseDrinks = getDrinks();
  let id = loggedInUserId();
  if (theseDrinks.length > 0) {
    for (const drink of theseDrinks) {
      if (drink.selected) {
        addToGoal += drink.caffeineContent;
        drink.selected = false;
      }
    }
  }
  if (loggedInUserId() > -1) {
    let index = findIndexOfUserId(id);
    model.goals[index].progression += addToGoal;
  }
}