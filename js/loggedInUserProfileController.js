function getLoggedInUsername() {
  let userId = loggedInUserId();
  for (let user of model.users) {
    if (user.id == userId) return user.username;
  }
}

function getLoggedInProfilePicture() {
  let userId = loggedInUserId();
  for (let user of model.users) {
    if (user.id == userId) return user.image;
  }
}

function getLoggedInFavoriteDrinks() {
  let userId = loggedInUserId();
  let userProfileDrinks = [];
  for (let favoriteDrinks of model.favoriteDrinks) {
    if (favoriteDrinks.userId == userId)
      for (let drinks of model.drinks) {
        if (drinks.drinkId == favoriteDrinks.drinkId) {
          userProfileDrinks.push(drinks);
        }
      }
  }
  return userProfileDrinks;
}

function getLoggedInFavoriteDrinksHtml() {
  let userProfileDrinks = getLoggedInFavoriteDrinks();
  let userProfileDrinksHtml = '';
  if (userProfileDrinks.length > 0) {
    for (let drink of userProfileDrinks) {
      userProfileDrinksHtml += `<li>${drink.name} ${drink.caffeineContent}mg <img src="img/tiny-star.png"/></li>`;
    }
  } else {
    userProfileDrinksHtml = `<p>You dont have favorite drinks</p> `;
  }
  return userProfileDrinksHtml;
}

function getLoggedInComments() {
  let userId = loggedInUserId();
  let userProfileComments = [];

  for (let comments of model.comments) {
    if (comments.userId == userId) {
      userProfileComments.push(comments.comment);
    }
  }
  return userProfileComments;
}

function getLoggedInCommentsHtml() {
  let userProfileCommentsHtml = '';
  let comments = getLoggedInComments();
  for (let comment of comments) {
    if (comments.length > 0) {
      userProfileCommentsHtml += `<li>${comment}</li>`;
    } else {
      userProfileCommentsHtml += `<p>You don't have comments</p>`;
    }
  }
  return userProfileCommentsHtml;
}
