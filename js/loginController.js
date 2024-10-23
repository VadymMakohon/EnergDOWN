function logIn() {
    const inputs = model.inputs.loginPage;
    const username = inputs.username;
    const password = inputs.password;
    if (userExists(username, password)) {
        model.app.loggedIn = true;
        goToPage('mainPage');
    } else {
        model.inputs.loginPage.error = 'Ugyldig brukernavn eller passord';
        model.inputs.loginPage.username = '';
        model.inputs.loginPage.password = '';
        updateView();
        model.inputs.loginPage.error = '';
    }
}

function userExists(username, password) {
    for (let user of model.users) {
        if (user.username == username && user.password == password) return true;
    }
    return false;
}