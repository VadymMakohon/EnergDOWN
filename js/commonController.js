function goToPage(pageName) {
    model.app.currentPage = pageName;
    updateView();
}

function logOut() {
    model.app.loggedInAsUserId = false;
    model.inputs.loginPage.username = '';
    model.inputs.loginPage.password = '';
    goToPage('startPage');
}