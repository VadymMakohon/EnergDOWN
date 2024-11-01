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
    drinksHtml += `<l>Ingen favorittdrikker valgt</l>`;
  }
  return drinksHtml;
}

function getComments(id) {
  let userProfileComments = [];
  for (let comments of model.comments) {
    if (comments.userId == id) userProfileComments.push(comments);
  }
  return userProfileComments;
}

function getCommentsHtml(id) {
  let userCommentsHtml = '';
  let comments = getComments(id);
  let thisUsername = '';

  if (comments.length > 0) {
    for (const comment of comments) {
      if (comment.friendId == model.users.id)
        thisUsername = getUsername(comment.friendId);
        userCommentsHtml += `<li class="individualComment">${getUsername(comment.friendId)}: ${comment.comment}</li>`;
    }
  } else {
    userCommentsHtml += `<l>Du har ingen venner</l>`;
  }

  return userCommentsHtml;
}

function getProfileGoalsListHTML(id) {
  let goalsHtml = ``;
  let goals = getProfileGoal(id);

  if (goals.length > 0) {
    for (const goal of goals) {
      goalsHtml += `<p>Mål: ${goal.progression}mg / ${goal.goal}mg</p>`;
    }
  } else {
    goalsHtml = `<p>Mål er ikke satt</p>`;
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
  let colour = 'blue';
  for (let goal of model.goals) {
    if (goal.userId == id) {
      if (goal.progression > goal.goal) {
        colour = 'red';
      }
      goalGraph = /*HTML*/ `
      <svg viewBox="0 0 32 32">
      <circle class='${colour}' stroke-dasharray="${(goal.progression / goal.goal) * 100
        } 100"></circle>
      </svg>
      `;
    }
  }
  return goalGraph;
}

function submitComment(localId, commentText) {
  let userId = loggedInUserId();
  if (commentText != '') {
    let index = findIndexOfUserId(userId);
    model.comments[index].comment = model.inputs.userProfilePage.commentInput;
    let newComment = {
      userId: localId,
      friendId: userId,
      comment: commentText,
    };
    model.comments.push(newComment);
  }
  updateView();
}
