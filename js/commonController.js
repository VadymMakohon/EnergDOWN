function goToPage(pageName) {
  model.app.currentPage = pageName;
  updateView();
}

function allFriends() {
  let userId = loggedInUserId();
  let friends = [];
  for (let otherUser of model.friends) {
    if (otherUser.userId == userId) friends.push(idToUser(otherUser.friendId));
  }
  return friends;
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

function logOut() {
  model.app.loggedIn = false;
  model.inputs.loginPage.username = '';
  model.inputs.loginPage.password = '';
  goToPage('startPage');
}

function bannerButtonCheck(){
  if(model.app.loggedIn) return 'mainPage';
  else return 'startPage';

}