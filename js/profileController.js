function getUsername(id) {
  for (let user of model.users) {
    if (user.id == id) return user.username;
  }
}

function getProfilePicture(id) {
  for (let user of model.users) {
    if (user.id == id) return user.image;
  }
}

function getFavoriteDrinks(id) {
  let userProfileDrinks = [];
  for (let favoriteDrinks of model.favoriteDrinks) {
    if (favoriteDrinks.userId == id)
      for (let drinks of model.drinks) {
        if (drinks.drinkId == favoriteDrinks.drinkId)
          userProfileDrinks.push(drinks);
      }
  }
  return userProfileDrinks;
}
function getFavoriteDrinksHtml(id) {
  let drinks = getFavoriteDrinks(id);
  let drinksHtml = ``;
  if (drinks.length > 0) {
    for (let drink of drinks) {
      drinksHtml += `<li>${drink.name} ${drink.caffeineContent}mg <img src="img/tiny-star.png"/></li>`;
    }
  } else {
    drinksHtml += `<p>No Favorite Drinks</p>`;
  }
  return drinksHtml;
}

function getComments(id) {
  let userProfileComments = [];
  for (let comments of model.comments) {
    if (comments.userId == id) userProfileComments.push(comments.comment);
  }
  return userProfileComments;
}

function getCommentsHtml(id) {
  let userCommentsHtml = '';
  let comments = getComments(id);

  if (comments.length > 0) {
    for (const comment of comments) {
      userCommentsHtml += `<li>${comment}</li>`;
    }
  } else {
    userCommentsHtml += `<p>You don't have friends</p>`;
  }

  return userCommentsHtml;
}

function getProfileGoalsListHTML(id) {
  let goalsHtml = ``;
  let goals = getProfileGoal(id);

  if (goals.length > 0) {
    for (const goal of goals) {
      goalsHtml += `<p>Goal: ${goal.goal}mg / ${goal.progression}mg</p>`;
    }
  } else {
    goalsHtml = `<p>You don't have any goals</p>`;
  }
  console.log(goals);

  return goalsHtml;
}

function getProfileGoal(id) {
  let goals = [];

  for (let goal of model.goals) {
    if (goal.userId == id) {
      goals.push(goal);
    }
  }

  return goals;
}

function getProfileGoalGraph(id) {
  let goalGraph = ``;
  for (let goal of model.goals) {
    if (goal.userId == id) {
      goalGraph = /*HTML*/ `
        <svg viewBox="0 0 32 32">
        <circle class='first' stroke-dasharray="${
          (goal.progression / goal.goal) * 100
        } 100"></circle>
        </svg>
      `;
    }
  }
  return goalGraph;
}
