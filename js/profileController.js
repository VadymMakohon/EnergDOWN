function getUsername(id) {
    for (let user of model.users) {
      if (user.id == id)
        return user.username;
    }
}

function getProfilePicture(id) {
    for (let user of model.users) {
      if (user.id == id)
        return user.image;
    }
}

function getFavoriteDrinks(id) {
  let userProfileDrinks = [];
  for (let favoriteDrinks of model.favoriteDrinks) {
    if (favoriteDrinks.userId == id)
      console.log(favoriteDrinks.drinkId);
      for (let drinks of model.drinks) {
        if (drinks.drinkId == favoriteDrinks.drinkId)
        userProfileDrinks.push(drinks.name);
      }
  }
  return userProfileDrinks;
}

function getComments(id) {
  let userProfileComments = [];
  for (let comments of model.comments) {
    if (comments.userId == id)
        userProfileComments.push(comments.comment);
  }
  return userProfileComments;
}