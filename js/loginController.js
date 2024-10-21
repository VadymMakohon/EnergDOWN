function logIn() {
    const inputs = model.inputs.loginPage;
    const username = inputs.username;
    const password = inputs.password;
    if (userExists(username, password)) {
        model.app.loggedInAsUserId = true;
        model.app.currentPage = 'mainPage';
    } else {
        model.inputs.loginPage.error = 'Ugyldig brukernavn eller passord';
        model.inputs.loginPage.username = '';
        model.inputs.loginPage.password = '';
    }
    updateView();
}

function userExists(username, password) {
    for (let user of model.users) {
        if (user.username == username && user.password == password) return true;
    }
    return false;
}