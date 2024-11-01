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
    userProfileDrinksHtml = `<p>Du har ingen favorittdrikker</p> `;
  }
  return userProfileDrinksHtml;
}

function getLoggedInComments() {
  let userId = loggedInUserId();
  let userProfileComments = [];

  for (let comments of model.comments) {
    if (comments.userId == userId) {
      userProfileComments.push(comments);
    }
  }
  return userProfileComments;
}

function getLoggedInCommentsHtml() {
  let userProfileCommentsHtml = '';
  let comments = getLoggedInComments();

  if (comments.length > 0) {
    for (let comment of comments) {
      userProfileCommentsHtml += `<li class="individualComment">${getUsername(
        comment.friendId
      )}: ${comment.comment}</li>`;
    }
  } else {
    userProfileCommentsHtml = `<p>Du har ingen kommentarer</p>`;
  }

  return userProfileCommentsHtml;
}
