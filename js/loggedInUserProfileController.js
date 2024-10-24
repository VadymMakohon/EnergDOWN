function getLoggedInFavoriteDrinks() {
    let userId = loggedInUserId();
    let userProfileDrinks = [];
    for (let favoriteDrinks of model.favoriteDrinks) {
      if (favoriteDrinks.userId == userId)
        for (let drinks of model.drinks) {
          if (drinks.drinkId == favoriteDrinks.drinkId)
          userProfileDrinks.push(drinks.name);
        }
    }
    return userProfileDrinks;
}

function getLoggedInComments() {
    let userId = loggedInUserId();
    let userProfileComments = [];
    for (let comments of model.comments) {
      if (comments.userId == userId)
          userProfileComments.push(comments.comment);
    }
    return userProfileComments;
  }

