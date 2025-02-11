function goToPage(pageName) {
  model.app.previousPage = model.app.currentPage;
  model.app.currentPage = pageName;
  updateView();
}
function goToPreviousPage(){
  goToPage(model.app.previousPage);
}

function allFriends() {
  let userId = loggedInUserId();
  let friends = [];
  for (let otherUser of model.friends) {
    if (otherUser.userId == userId) friends.push(idToUser(otherUser.friendId));
  }
  return friends;
}

function goToFriendProfile(friendId){
model.inputs.userProfilePage.profileId = friendId;
goToPage('userProfilePage');

}

function loggedInUserId() {
  for (let user of model.users) {
    if (user.username == model.inputs.loginPage.username) return user.id;
  }
  return -1;
}

function idToUser(id) {
  for (let user of model.users) {
    if (user.id == id) return user;
  }
  return null;
}

function userToId(username) {
  for (let user of model.users) {
    if (user.username == username) return user.id;
  }
  return null;
}

function findIndexOfUserId(x) {
  for (let i = 0; i <= model.users.length; i++) {
    if (model.users[i].id == x) return i;
  }
  return -1;
}

function logOut() {
  model.app.loggedIn = false;
  model.inputs.loginPage.username = '';
  model.inputs.loginPage.password = '';
  goToPage('startPage');
}

function bannerButtonCheck() {
  if (model.app.loggedIn) return 'mainPage';
  else return 'startPage';
}

function getGoal() {
  let userId = loggedInUserId();
  let goals = [];

  for (let goal of model.goals) {
    if (goal.userId == userId) {
      goals.push(goal);
    }
  }

  return goals;
}

function getGoalText() {
  let userId = loggedInUserId();
  let goalText = "";
  for (let goal of model.goals) {
    if (goal.userId == userId) {
      goalText = goal.goal;
    }
  }
  return goalText;
}

function getGoalGraph() {
  let userId = loggedInUserId();
  let goalGraph = ``;
  let colour = 'blue';
  for (let goal of model.goals) {
    if (goal.userId == userId) {
      if(goal.progression > goal.goal){
        colour = 'red';
      }
      goalGraph = /*HTML*/`
      <svg viewBox="0 0 32 32">
      <circle class='${colour}' stroke-dasharray="${(goal.progression/goal.goal)*100} 100"></circle>
      </svg>
      `;

    }
  }
  return goalGraph;
}

function getRandomQuote() {
  let quotes = model.quotes;
  let randomNum = Math.floor(Math.random() * quotes.length);

  return `<p>${quotes[randomNum].quote}</p>`;
}

function getRandomSuggestion() {
  let suggestions = model.suggestions;
  let randomNum = Math.floor(Math.random() * suggestions.length);

  return `<p>${suggestions[randomNum].suggestion}</p>`;
}

function isDrinkFavorite(userId, drinkId){
  for (let favorite of model.favoriteDrinks){
    if((favorite.drinkId == drinkId) && (favorite.userId == userId)) return true;
  }
  return false;
}