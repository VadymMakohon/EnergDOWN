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
      let drinkStyle = drink.selected ? 'gray' : 'white';
      drinksHtml += `<li button style="background:${drinkStyle}" onclick="selectDrink(${idOfSelectedDrink})">${drink.name} ${drink.caffeineContent} mg ${favoriteStarHTML(loggedInUserId(), drink.drinkId)}`;
    }
  }
  return drinksHtml;
}

function selectDrink(selectedDrinkId) {
  let drinks = getDrinks();
  for (const drink of drinks) {
    if (drink.drinkId == selectedDrinkId) {
      drink.selected = !drink.selected;
    }
  }
  updateView();
}

function addSelectedToGoalProgression() {
  let addToProgression = 0;
  let drinks = getDrinks();
  let id = loggedInUserId();
  if (drinks.length > 0) {
    for (const drink of drinks) {
      if (drink.selected) {
        addToProgression += drink.caffeineContent;
        drink.selected = false;
      }
    }
  }
  if (loggedInUserId() > -1) {
    let index = findIndexOfUserId(id);
    model.goals[index].progression += addToProgression;
  }
  goToPage('mainPage');
}
