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
      if (loggedInUserId() == drink.userId || drink.userId == null) {
        if (isDrinkFavorite(loggedInUserId(), drink.drinkId)) {
          let idOfSelectedDrink = drink.drinkId;
          if (idOfSelectedDrink != null) {
            let drinkStyle = drink.selected ? 'gray' : 'white';
            drinksHtml += `<li button style="background:${drinkStyle}" onclick="selectDrink(${idOfSelectedDrink})">${drink.name} ${drink.caffeineContent} mg ${favoriteStarHTML(loggedInUserId(), drink.drinkId)}`;
          }
        }
      }
    }

    for (const drink of drinks) {
      if (loggedInUserId() == drink.userId || drink.userId == null) {
        if (!isDrinkFavorite(loggedInUserId(), drink.drinkId)) {
          let idOfSelectedDrink = drink.drinkId;
          if (idOfSelectedDrink != null) {
            let drinkStyle = drink.selected ? 'gray' : 'white';
            drinksHtml += `<li button style="background:${drinkStyle}" onclick="selectDrink(${idOfSelectedDrink})">${drink.name} ${drink.caffeineContent} mg ${favoriteStarHTML(loggedInUserId(), drink.drinkId)}`;
          }
        }
      }
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

function removeSelectedDrink() {
  let drinks = getDrinks();
  let id = loggedInUserId();
  if (drinks.length > 0) {
    for (const drink of drinks) {
      if (drink.selected && drink.userId == id) {
        console.log("yes", drink.drinkId)
        drink.drinkId = null;
        console.log("yes2", drink.drinkId)
      }
      drink.selected = false;
      updateView();
    }
  }

}

function removeDrinkAsFavorite() {
  let drinks = getDrinks();
  let id = loggedInUserId();
  console.log(model.favoriteDrinks);
  if (drinks.length > 0) {
    for (const favorite of model.favoriteDrinks) {
      console.log(favorite);
      for( const drink of drinks){
      if (drink.selected && isDrinkFavorite(id, drink.drinkId)) {
        
        
       favorite.userId = null;
       favorite.drinkId = null;
       console.log(model.favoriteDrinks);
       
      }
      drink.selected = false;
    }
      updateView();
    }
  }
}

function addDrinkAsFavorite() {
  let drinks = getDrinks();
  let id = loggedInUserId();
  if (drinks.length > 0) {
    for (const drink of drinks) {
      if (drink.selected && !isDrinkFavorite(id, drink.drinkId)) {
        
       newFavorite = {
        userId: id,
        drinkId: drink.drinkId,
       }
       model.favoriteDrinks.push(newFavorite);
      }
      drink.selected = false;
      updateView();
    }
  }
}
