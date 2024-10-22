function goToPage(pageName) {
  model.app.currentPage = pageName;
  updateView();
}

function logOut() {
  model.app.loggedIn = false;
  model.inputs.loginPage.username = '';
  model.inputs.loginPage.password = '';
  goToPage('startPage');
}

function showFriendList() {}
